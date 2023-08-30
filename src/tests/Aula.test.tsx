import { vi } from 'vitest';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRedux from './helpers/renderWithRedux';
import * as APIModule from '../services/brazilAPI';
import { dddError, dddList } from './mocks/dddMock';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  vi.spyOn(APIModule, 'getCitiesByDDD').mockResolvedValue(dddList);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Testes da Aplicação', () => {
  test('Precisamos testar para garantir o funcionamento da aplicação.', async () => {
    vi.spyOn(APIModule, 'getCitiesByDDD').mockResolvedValue(dddList);
    renderWithRedux(<App />);
    
		await userEvent.type(screen.getByPlaceholderText(/Digite/), '51');
    await userEvent.click(screen.getByText(/Pesquisar/i));

		expect(APIModule.getCitiesByDDD).toHaveBeenCalled();
		expect(APIModule.getCitiesByDDD).toHaveBeenCalledWith('51', 'ddd/v1');
  });

  test('Validar retorno da requisição na tela.', async () => { 
    renderWithRedux(<App />);

    await userEvent.type(screen.getByPlaceholderText(/Digite/), '11');
    await userEvent.click(screen.getByText(/Pesquisar/i));
    await screen.getByText(/EMBU/i);
  });

  test('Conferindo diretamente no Redux.', async () => { 
    const initialState = {
      app: {
        ...dddList,
        search: '11',
        isLoading: false,
        hasError: false,
      }
    }
    vi.spyOn(APIModule, 'getCitiesByDDD').mockResolvedValue(dddList);
    renderWithRedux(<App />, { initialState });
    
    await screen.getByText(/EMBU/i);
  });

  test('Conferindo a chamada da função', async () => {
    global.alert = vi.fn().mockImplementation(() => {});
    vi.spyOn(APIModule, 'getCitiesByDDD').mockRejectedValue(dddError);
    renderWithRedux(<App />);
    
    await userEvent.type(screen.getByPlaceholderText(/Digite/), '51');
    await userEvent.click(screen.getByText(/Pesquisar/i));
  
    expect(global.alert).toHaveBeenCalled();
    expect(global.alert).toHaveBeenCalledWith("Não foi possível encontrar cidades para este DDD");
  });
});