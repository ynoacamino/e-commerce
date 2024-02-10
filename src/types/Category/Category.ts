export interface NewCategory {
  category_name: string;
  category_description: string;
}

export interface UpdateCategory extends NewCategory {
  category_id: number;
}
