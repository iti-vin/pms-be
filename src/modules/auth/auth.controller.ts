import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, UseGuards } from "@nestjs/common";
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from "@nestjs/swagger";
import type { Request } from "express";
import { AuthService } from "./services/auth.service.js";
import { LoginDto } from "./dtos/login.dto.js";
import { SigninDto } from "./dtos/signin.dto.js";
import { JwtAuthGuard } from "./guards/jwt-auth.guard.js";
import { AuthResponseDto, AuthUserDto } from "./dtos/auth-response.dto.js";
import { ApiErrorResponseDto } from "./dtos/api-response.dto.js";

@ApiTags("Authentication")
@Controller("auth")
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post("sign-in")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "register a new user account" })
  @ApiOkResponse({ description: "Success", type: AuthResponseDto })
  @ApiBadRequestResponse({ description: "Bad Request", type: ApiErrorResponseDto })
  async signIn(@Body() dto: SigninDto) {
    return this.auth.register(dto.email, dto.password);
  }

  @Post("login")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "authenticate with email and password" })
  @ApiOkResponse({ description: "Success", type: AuthResponseDto })
  @ApiBadRequestResponse({ description: "Bad Request", type: ApiErrorResponseDto })
  @ApiUnauthorizedResponse({ description: "Unauthorized", type: ApiErrorResponseDto })
  async login(@Body() dto: LoginDto) {
    return this.auth.login(dto.email, dto.password);
  }

  @Get("me")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get the current authenticated user" })
  @ApiOkResponse({ description: "Success", type: AuthUserDto })
  @ApiUnauthorizedResponse({ description: "Unauthorized", type: ApiErrorResponseDto })
  async me(@Req() req: Request) {
    const user = (req as unknown as { user: Record<string, unknown> }).user;

    return user;
  }
}
