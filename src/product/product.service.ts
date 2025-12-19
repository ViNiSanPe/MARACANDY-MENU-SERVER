import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  findAllProducts() {
    return `This action returns all product`;
  }

  findProductsByCategory(category: string) {
    return `This action returns a #${category} product`;
  }
}
