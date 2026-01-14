import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProductDocument = HydratedDocument<Product>;

export enum ProductCategory {
  DRINK = "bebida",
  DESSERT = "sobremesa",
  SNACK = "lanche",
}

@Schema({ timestamps: true, versionKey: false })
export class Product {
  @Prop({ required: true, trim: true })
  public name: string;

  @Prop({ trim: true })
  public description?: string;

  @Prop({ type: [String], default: [] })
  public ingredients?: string[];

  @Prop({ required: true, min: 0 })
  public price: number;

  @Prop({ required: true, enum: ProductCategory })
  public category: ProductCategory;

  @Prop({ trim: true })
  public imageUrl?: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

ProductSchema.index({ category: 1 });
ProductSchema.index({ name: 1 });
