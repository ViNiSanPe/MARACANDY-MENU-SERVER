import "dotenv/config";
import mongoose, { model } from "mongoose";
import {
  Product,
  ProductSchema,
  ProductCategory,
} from "../core/product/entities/product.entity";

const ProductModel = model<Product>("Product", ProductSchema);

async function seedProducts(): Promise<void> {
  await mongoose.connect(
    process.env.MONGO_URI ||
      `mongodb://localhost:27017/${process.env.MONGO_DB_NAME}`,
  );

  console.info("[SEED] Connected to MongoDB");
  console.info(`[SEED] Host: ${mongoose.connection.host}`);
  console.info(`[SEED] Database: ${mongoose.connection.name}`);
  console.info(
    `[SEED] Mongo URI: ${process.env.MONGO_URI?.replace(/\/\/.*@/, "//***@")}`,
  );

  const products: ReadonlyArray<Partial<Product>> = [
    {
      name: "Mousse de Maracujá",
      description: "Clássico cremoso com maracujá, doce e azedinho",
      ingredients: ["leite condensado", "creme de leite", "suco de maracujá"],
      price: 15.0,
      category: ProductCategory.DESSERT,
      imageUrl:
        "https://res.cloudinary.com/dr5tx4qz5/image/upload/MOUSSE-DE-MARACUJA_MARACANDY.jpg",
    },
    {
      name: "Torta de Maracujá",
      description: "Torta com creme de maracujá e massa macia",
      ingredients: ["farinha", "açúcar", "maracujá", "creme"],
      price: 20.0,
      category: ProductCategory.DESSERT,
      imageUrl:
        "https://res.cloudinary.com/dr5tx4qz5/image/upload/v1766444022/TORTA-DE-MARACUJA_epziyx.webp",
    },
    {
      name: "Bolo de Maracujá Fofinho",
      description: "Bolo leve e saboroso com cobertura de maracujá",
      ingredients: ["farinha", "açúcar", "ovos", "maracujá"],
      price: 18.0,
      category: ProductCategory.DESSERT,
      imageUrl:
        "https://res.cloudinary.com/dr5tx4qz5/image/upload/MOUSSE-DE-MARACUJA_MARACANDY.jpg",
    },
    {
      name: "Sorvete de Maracujá",
      description: "Sorvete refrescante de maracujá",
      ingredients: ["leite", "creme", "polpa de maracujá"],
      price: 12.0,
      category: ProductCategory.DESSERT,
      imageUrl:
        "https://res.cloudinary.com/dr5tx4qz5/image/upload/v1766444020/SORVETE-DE-MARACUJA_qqtjrm.jpg",
    },
    {
      name: "Chá de Maracujá",
      description: "Bebida quente aromática com maracujá e especiarias",
      ingredients: ["maracujá", "maçã", "canela", "cravos"],
      price: 8.0,
      category: ProductCategory.DRINK,
      imageUrl:
        "https://res.cloudinary.com/dr5tx4qz5/image/upload/v1766444017/cha-da-casca-de-maracauja_mde9yk.webp",
    },
    {
      name: "Caipirinha de Maracujá",
      description: "Drink refrescante com maracujá",
      ingredients: ["maracujá", "álcool", "açúcar", "gelo"],
      price: 22.0,
      category: ProductCategory.DRINK,
      imageUrl:
        "https://res.cloudinary.com/dr5tx4qz5/image/upload/v1766444016/caipirinha-de-maracuja_cy1icn.jpg",
    },
    {
      name: "Filé de Frango ao Molho de Maracujá",
      description: "Prato salgado com molho agridoce de maracujá",
      ingredients: ["frango", "maracujá", "tempero"],
      price: 28.0,
      category: ProductCategory.SNACK,
      imageUrl:
        "https://res.cloudinary.com/dr5tx4qz5/image/upload/v1766444018/FILE-DE-FRANGO-AO-MARACUJA_kgbwl7.png",
    },
    {
      name: "Salmão ao Molho de Maracujá",
      description: "Prato sofisticado com peixe e molho de maracujá.",
      ingredients: ["salmão", "maracujá", "tempero"],
      price: 35.0,
      category: ProductCategory.SNACK,
      imageUrl:
        "https://res.cloudinary.com/dr5tx4qz5/image/upload/v1766444022/salmao_ao_maracuja_dvvceu.png",
    },
  ];

  for (const product of products) {
    await ProductModel.updateOne(
      { name: product.name },
      { $set: product },
      { upsert: true },
    );

    console.info(`[SEED] Product inserted: ${product.name}`);
  }

  console.info("[SEED] Product seeding successfully completed");
}

seedProducts()
  .then(() => process.exit(0))
  .catch((error: unknown) => {
    console.error("[SEED] Error when executing seed:", error);
    process.exit(1);
  });
