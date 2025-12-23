import { IsOptional, IsEnum } from "class-validator";
import { ProductCategory } from "../entities/product.entity";

export class FindProductDto {
  @IsOptional()
  @IsEnum(ProductCategory)
  public category?: ProductCategory;
}
