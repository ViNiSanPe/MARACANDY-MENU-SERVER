import { ProductCategory } from "../entities/product.entity";
import { IsOptional, IsEnum, IsString } from "class-validator";

export class FindProductDto {
  @IsOptional()
  @IsEnum(ProductCategory, { message: "Invalid category" })
  public category?: ProductCategory;

  @IsOptional()
  @IsString({ message: "The search term must be a string" })
  public search?: string;
}
