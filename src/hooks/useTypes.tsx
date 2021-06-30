import {useEffect, useState} from 'react';

import {IType} from '../models';

export function useTypes() {
  const [types, setTypes] = useState<IType[]>([]);

  const onSelectType = (id: number) => {
    let newTypes: IType[] = types;
    newTypes.forEach(element => (element.isActive = false));
    newTypes[id].isActive = true;
    setTypes([...newTypes]);
  };

  const getTypes = async () => {
    const typeList = await (await fetch('http://localhost:3000/types')).json();
    typeList[0].isActive = true;
    setTypes(typeList);
  };

  useEffect(() => {
    getTypes();
  }, []);

  return {
    types,
    onSelectType,
  };
}
