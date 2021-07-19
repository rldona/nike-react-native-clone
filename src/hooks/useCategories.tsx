import {useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {ICategories} from '../models';

interface Props {
  route: any;
}

export function useCategories() {
  const [categories, setcategories] = useState<ICategories[]>([]);
  const navigation = useNavigation();

  const getCategories = useCallback(async () => {
    const categorieList = await (
      await fetch('http://localhost:3000/categories')
    ).json();

    const title: string = categorieList[0].title;
    navigation.setOptions({title});

    setcategories(categorieList);
  }, [navigation]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return {
    categories,
  };
}
