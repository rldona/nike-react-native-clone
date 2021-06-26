export const getPopular = async () => {
  const response = await fetch('http://localhost:3000/popular');
  return response.json();
};

export const getOptions = async () => {
  const response = await fetch('http://localhost:3000/options');
  return response.json();
};

export const getFavorites = async () => {
  const response = await fetch('http://localhost:3000/favorites');
  return response.json();
};

export const addFavorite = async (data: any) => {
  const response = await fetch('http://localhost:3000/favorites', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const deleteFavorite = async (id: number) => {
  const response = await fetch(`http://localhost:3000/favorites/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({response: 'OK'}),
  });
  return response.json();
};

export const updateOption = async (data: any) => {
  const response = await fetch('http://localhost:3000/options', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
};
