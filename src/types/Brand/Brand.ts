export interface NewBrand {
  brand_name: string;
}

export interface UpdateBrand extends NewBrand {
  brand_id: number;
}
