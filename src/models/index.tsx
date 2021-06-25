export interface IMenuItem {
  id: number;
  title: string;
}

export interface IProductMenu {
  links: IMenuItem[];
  backgrounds: string[];
}

export interface IGenre {
  id: number;
  name: string;
  type: string;
  isActive: boolean;
  onSelectGenre: (id: number) => void;
}

export interface ICategories {
  id: number;
  title: string;
  type: string;
  list: string[];
}

export interface IPopular {
  id: number;
  title: string;
  backdrop: string;
}

export interface IFavorites extends IPopular {
  price: number;
}
