import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  // Transform
  @Type(() => Number) // Igual a enableImplicitConversion: true
  limit?: number;

  @IsOptional()
  @Min(0)
  @IsNumber()
  // Transform
  @Type(() => Number) // Igual a enableImplicitConversion: true
  offset?: number;
}
