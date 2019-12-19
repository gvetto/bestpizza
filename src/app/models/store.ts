export interface Store {
  id: number;
  name: string;
  address: string;
  description: string;
  imageUri: string;
  facebookUri: string;
  instagramUri: string;
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
}
