import type { Product } from '@/DTOs/services/IProductService';
import api from '@/services/api';

class ProductService {
  static async index(): Promise<Product[]> {
    try {
      const response = await api.get<Product[]>('/products');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      throw new Error('Não foi possível carregar os produtos.');
    }
  }

  static async show(id: number): Promise<Product> {
    try {
      const response = await api.get<Product>(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar o produto com ID ${id}:`, error);
      throw new Error('Produto não encontrado.');
    }
  }
}

export default ProductService;
