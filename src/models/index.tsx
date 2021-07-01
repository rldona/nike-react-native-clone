export interface IProducts {
  id: number;
  type: string;
  subType: string;
  genre: string;
  title: string;
  description: string;
  price: number;
  preview: string;
  backdrop: string;
}

export interface IMenuItem {
  id: number;
  title: string;
}

export interface IProductMenu {
  links: IMenuItem[];
  backgrounds: string[];
}

export interface IFilter {
  id: number;
  name: string;
  type: string;
  subType: string;
  isActive: boolean;
  onFilterSelected: (id: number, subType: string) => void;
}

export interface IGenre {
  id: number;
  name: string;
  type: string;
  isActive: boolean;
  onSelectGenre: (id: number) => void;
}

export interface IType extends IGenre {
  onSelectType: (id: number) => void;
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
