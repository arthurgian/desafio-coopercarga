import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import productsData from "Database/products";

interface Product {
  id: number;
  name: string;
  image_url: string;
  type: string;
  price: number;
  seller: string;
  available_sizes: string[];
  details: string;
  sport: string;
  hotProduct: boolean;
}

const products: Product[] = productsData.map((product, index) => ({
  id: index + 1,
  ...product,
}));

export default class ProductsController {
  public async index({ response }: HttpContextContract) {
    return response.json(products);
  }
  public async show({ params, response }: HttpContextContract) {
    const productId = Number(params.id);
    const product = products.find((p) => p.id === productId);

    if (!product) {
      return response.status(404).json({ message: "Produto não encontrado" });
    }

    return response.json(product);
  }
}
