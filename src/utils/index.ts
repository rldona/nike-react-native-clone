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

  console.log(month);

  return `${Weekday[week]}, ${day} de ${Month[month]}`;
};

export const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
