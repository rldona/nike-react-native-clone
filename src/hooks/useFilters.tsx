import {useContext, useState} from 'react';

import {IFilter} from '../models';
import {Context} from '../context/options';

export function useFilters(filterName: string, filterList: any) {
  const {dispatch}: any = useContext(Context);
  const [filters, setFilters] = useState<IFilter[]>(filterList);

  const onFilterSelected = (id: number) => {
    let newFilters: IFilter[] = filters;

    newFilters.forEach(filter => (filter.isActive = false));
    newFilters[id].isActive = true;

    if (filterName === 'genres') {
      dispatch({type: 'SET_CURRENT_GENRE', payload: id});
    }

    setFilters([...newFilters]);
  };

  return {
    onFilterSelected,
  };
}
