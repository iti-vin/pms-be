import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { createObserveModule } from "@nestjs/observe";
import { AuthModule } from "./modules/auth/auth.module.js";

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    // MAIN DATABASE
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: "postgres",
        host: config.get<string>("POSTGRES_HOST", "localhost"),
        port: config.get<number>("POSTGRES_PORT", 5433),
        database: config.get<string>("POSTGRES_DB", "postgres"),
        username: config.get<string>("POSTGRES_USER", "postgres"),
        password: config.get<string>("POSTGRES_PASSWORD", ""),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),

    // SECONDARY DATABASE
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   name: "secondaryDB",
    //   useFactory: (config: ConfigService) => {
    //     const connectTimeout = Number(config.get("DB_CONNECTION_TIMEOUT", "30000"));

    //     const requestTimeout = Number(config.get("DB_REQUEST_TIMEOUT", "30000"));

    //     const host = config.get<string>("DB_HOST");
    //     const username = config.get<string>("DB_USERNAME");
    //     const password = config.get<string>("DB_PASSWORD");
    //     const database = config.get<string>("DB_DATABASE");

    //     if (!host || !username || !password || !database) {
    //       throw new Error("Missing required MSSQL environment variables");
    //     }

    //     if (!Number.isFinite(connectTimeout) || !Number.isFinite(requestTimeout)) {
    //       throw new Error("Invalid MSSQL timeout configuration");
    //     }

    //     return {
    //       type: "mssql" as const,
    //       host,
    //       port: Number(config.get("DB_PORT", "1433")),
    //       username,
    //       password,
    //       database,
    //       options: {
    //         encrypt: config.get<string>("DB_ENCRYPT") === "true",
    //         trustServerCertificate: config.get<string>("DB_TRUST_SERVER_CERTIFICATE") === "true",
    //         connectTimeout,
    //         requestTimeout,
    //       },
    //       connectionTimeout: connectTimeout,
    //       requestTimeout,
    //       pool: { max: 10, min: 0, idleTimeoutMillis: 30000 },
    //       autoLoadEntities: true,
    //       synchronize: false,
    //     };
    //   },
    // }),

    // LIST OF MODULES
    AuthModule,

    ObserveModule.forRoot({ appKey: "YOUR_APP_KEY", appSecret: "YOUR_APP_SECRET", serviceId: "pms" }),
  ],
})
export class AppModule {}
