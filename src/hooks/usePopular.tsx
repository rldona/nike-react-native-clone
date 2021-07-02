import {useEffect, useState} from 'react';

import {IPopular} from '../models';

export function usePopular() {
  const [popular, setPopular] = useState<IPopular[]>([]);

  const getPopular = async () => {
    const categorieList = await (
      await fetch('http://localhost:3000/popular')
    ).json();

    setPopular(categorieList);
  };

  useEffect(() => {
    getPopular();
  }, []);

  return {
    popular,
  };
}
