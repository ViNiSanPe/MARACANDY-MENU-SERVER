import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAllProducts() {
    return this.productService.findAllProducts();
  }

  @Get(':category')
  findProductsByCategory(@Param('category') category: string) {
    return this.productService.findProductsByCategory(category);
  }
}
