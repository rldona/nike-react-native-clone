import {useEffect, useState} from 'react';

import {IFilter} from '../models';

export function useFilters(filterName: string) {
  const [filters, setFilters] = useState<IFilter[]>([]);

  const onFilterSelected = (id: number, subType: string) => {
    let newFilters: IFilter[] = filters;

    newFilters.forEach(filter => (filter.isActive = false));
    newFilters[id].isActive = true;

    console.log(subType);

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
