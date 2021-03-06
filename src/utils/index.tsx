import {IProducts} from '../models';

export const getCurrentDate = () => {
  enum Month {
    enero,
    febrero,
    marzo,
    abril,
    mayo,
    junio,
    julio,
    agosto,
    septiembre,
    octubre,
    noviembre,
    diciembre,
  }

  enum Weekday {
    lunes = 1,
    martes = 2,
    miércoles = 3,
    jueves = 4,
    viernes = 5,
    sábado = 6,
    domingo = 0,
  }

  const date = new Date();

  const day = date.getDate();
  const week = date.getDay();
  const month = date.getMonth();

  return `${Weekday[week]}, ${day} de ${Month[month]}`;
};

export const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export const findElementArray = (arr: any, id: string) => {
  let favoritesData = arr.data;
  let favoriteAlreadyExists;

  if (favoritesData) {
    favoriteAlreadyExists = favoritesData.find((i: any) => i.id === id);
  }

  return typeof favoriteAlreadyExists === 'undefined' ? false : true;
};

export const getGenreName = (genreId: number) => {
  return genreId === 0 ? 'man' : genreId === 1 ? 'woman' : 'kids';
};

export const getSumOfProductPrices = (shoppingCartProducts: IProducts[]) => {
  return shoppingCartProducts
    .reduce((res: any, item: IProducts) => {
      return res + item.price;
    }, 0)
    .toFixed(2);
};
