import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product, ProductDocument } from "./entities/product.entity";
import { FindProductDto } from "./dto/find-product.dto";

@Injectable()
export class ProductService {
  public constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  public async findAll(query: FindProductDto): Promise<Product[]> {
    const filter: Partial<Product> = {};

    if (query.category) {
      filter.category = query.category;
    }

    return this.productModel.find(filter).lean<Product[]>();
  }
}
