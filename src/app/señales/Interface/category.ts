export interface Category {
  id:   number;
  name: string;
  tags: Tag[];
}

export interface Tag {
  id:   number;
  name: string;
}
