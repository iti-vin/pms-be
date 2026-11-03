import { ApiProperty } from "@nestjs/swagger";

export class ApiErrorResponseDto {
  @ApiProperty({ example: "Bad Request" })
  type: string;

  @ApiProperty({ example: "Invalid email or password" })
  title: string;

  @ApiProperty({ example: 400 })
  status: number;

  @ApiProperty({ example: "The request could not be processed" })
  detail: string;

  @ApiProperty({ example: "/auth/login" })
  instance: string;

  @ApiProperty({
    example: {
      email: ["Email must be a valid email address"],
    },
  })
  errors: Record<string, string[]>;
}
