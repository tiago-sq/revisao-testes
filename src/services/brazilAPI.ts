const BASE_URL = 'https://brasilapi.com.br/api';

const getCitiesByDDD = async (term: string, endpoint: string) => {
  const response = await fetch(`${BASE_URL}/${endpoint}/${term}`);
  if(!response.ok && response.status !== 200) {
    throw new Error('Ocorreu um erro durante a requisição!');
  }
  const data = await response.json();
  return data;
}

export { getCitiesByDDD };