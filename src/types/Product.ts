export interface NewProduct {
  category_id: number;
  brand_id: number;

  product_date: Date;
  product_description: string;
  product_image: string;
  product_name: string;
  product_price: number;
  product_stock: number;

  tags: number[];
}

export interface UpdateProduct extends NewProduct {
  product_id: number;
}

export enum PriceRangeEnum {
  '0-50' = '0-50',
  '50-100' = '50-100',
  '100-150' = '100-150',
  '150-200' = '150-200',
  '200-300' = '200-300',
  '300-400' = '300-400',
  '400-500' = '400-500',
  '+500' = '+500',
}

export enum RateRangeEnum {
  '0-1' = '0-1',
  '1-2' = '1-2',
  '2-3' = '2-3',
  '3-4' = '3-4',
  '4-5' = '4-5',
}

export type ProductFilterQuery = {
  price: PriceRangeEnum[] | undefined,
  rate: RateRangeEnum[] | undefined,
  brand_id: number[] | undefined,
  category_id: number[] | undefined,
};
