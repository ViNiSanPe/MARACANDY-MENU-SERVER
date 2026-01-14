import { Controller, Get } from "@nestjs/common";
import { Product } from "./entities/product.entity";
import { ProductService } from "./product.service";

@Controller("products")
export class ProductController {
  public constructor(private readonly productService: ProductService) {}

  @Get()
  public findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }
}
