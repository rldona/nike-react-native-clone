import {useEffect, useState} from 'react';
import {IProductMenu} from '../models';

export function useMenu() {
  const [menu, setMenu] = useState<IProductMenu>({
    links: [],
    backgrounds: [],
  });

  const getMenuItems = async () => {
    const menuList: IProductMenu = await (
      await fetch('http://localhost:3000/menu')
    ).json();

    setMenu(menuList);
  };

  useEffect(() => {
    getMenuItems();
  }, []);

  return {
    menu,
  };
}
