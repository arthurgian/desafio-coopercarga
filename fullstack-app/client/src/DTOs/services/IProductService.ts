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
  gender?: string;
}

export type { Product };
