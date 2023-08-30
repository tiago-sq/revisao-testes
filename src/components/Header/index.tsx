import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, GlobalStateProps } from "../../types";
import { useState } from "react";
import { searchCities } from "../../redux/actions";

function Header() {
  const dispatch: AppDispatch = useDispatch();
  const { search, hasError } = useSelector((state: GlobalStateProps) => state.app);

  const [term, setTerm] = useState('');

  if(hasError) {
    alert('Não foi possível encontrar cidades para este DDD');
  }

  return (
    <header className="header">
      <h1>Cidades por DDD</h1>
      <div>
        <input 
          type="text"
          placeholder="Digite o DDD"
          onChange={ ({ target }) => setTerm(target.value) }
        />
        <button 
          type="button"
          onClick={ () => dispatch(searchCities(term)) }
        >
          Pesquisar
        </button>
      </div>
      <h2>{`Buscando por ${search}`}</h2>
    </header>
  );
}

export default Header;
