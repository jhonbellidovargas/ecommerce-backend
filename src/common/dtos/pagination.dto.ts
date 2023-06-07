import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  // Transform
  @Type(() => Number) // Igual a enableImplicitConversion: true
  limit?: number;

  @IsOptional()
  @Min(0)
  // Transform
  @Type(() => Number) // Igual a enableImplicitConversion: true
  offset?: number;
}
