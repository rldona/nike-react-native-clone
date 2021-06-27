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
    lunes,
    martes,
    miércoles,
    jueves,
    viernes,
    sábado,
    domingo,
  }

  const date = new Date();

  const day = date.getDate();
  const week = date.getDay();
  const month = date.getMonth();

  return `${Weekday[week - 1]}, ${day} de ${Month[month]}`;
};

export const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
