import {useContext, useEffect, useState} from 'react';

import {IFilter} from '../models';
import {Context} from '../context/options';

export function useFilters(filterName: string) {
  const {dispatch}: any = useContext(Context);
  const [filters, setFilters] = useState<IFilter[]>([]);

  const onFilterSelected = (id: number) => {
    let newFilters: IFilter[] = filters;

    newFilters.forEach(filter => (filter.isActive = false));
    newFilters[id].isActive = true;

    if (filterName === 'genres') {
      dispatch({type: 'SET_CURRENT_GENRE', payload: id});
    }

    setFilters([...newFilters]);
  };

  const getFilters = async (filterType: string) => {
    const filterList = await (
      await fetch(`http://localhost:3000/${filterType}`)
    ).json();

    filterList[0].isActive = true;

    setFilters(filterList);
  };

  useEffect(() => {
    getFilters(filterName);
  }, [filterName]);

  return {
    filters,
    onFilterSelected,
  };
}
