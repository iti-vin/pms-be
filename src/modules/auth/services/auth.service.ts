import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity.js';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly users: Repository<User>,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  async register(email: string, password: string) {
    const existing = await this.users.findOne({ where: { email } });
    if (existing) {
      throw new ForbiddenException('Email already registered');
    }
    const hashed = await bcrypt.hash(password, 10);
    const user = this.users.create({ email, password: hashed });
    await this.users.save(user);
    return this.issueTokens(user);
  }

  async login(email: string, password: string) {
    const user = await this.users.findOne({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.issueTokens(user);
  }

  private async issueTokens(user: User) {
    const accessToken = await this.signAccess(user);
    return {
      accessToken,
      expiresIn: 3600,
    };
  }

  private async signAccess(user: User) {
    return this.jwt.sign(
      { sub: user.id, email: user.email, type: 'access' },
      {
        secret: this.getAccessSecret(),
        expiresIn: '1h',
      },
    );
  }

  private getAccessSecret() {
    return (
      this.config.get<string>('JWT_ACCESS_SECRET') ??
      'dev-access-secret-change-in-production'
    );
  }
}
