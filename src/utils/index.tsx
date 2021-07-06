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
  let favoritesData: any = arr.data;

  let favoriteAlreadyExists = favoritesData.find(
    (i: any) => i.id === parseInt(id, 10),
  );

  return typeof favoriteAlreadyExists === 'undefined' ? false : true;
};

export const getGenreName = (genreId: number) => {
  return genreId === 0 ? 'man' : genreId === 1 ? 'woman' : 'kids';
};
