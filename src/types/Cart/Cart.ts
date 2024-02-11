export interface NewCart {
  cart_count: number;
  product_id: number;
  user_id: number;
}

export interface UpdateCart extends NewCart {}
