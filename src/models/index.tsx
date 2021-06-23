export interface IProductMenu {
  id: number;
  title: string;
}

export interface IGenre {
  id: number;
  name: string;
  type: string;
  isActive: boolean;
  onSelectGenre: (id: number) => void;
}
