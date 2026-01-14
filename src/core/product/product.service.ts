import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product, ProductDocument } from "./entities/product.entity";

@Injectable()
export class ProductService {
  public constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  public async findAll(): Promise<Product[]> {
    return this.productModel.find().lean<Product[]>().exec();
  }
}
