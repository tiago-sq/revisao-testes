import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, GlobalStateProps } from "../../types";
import { useState } from "react";
import { searchCities } from "../../redux/actions";

function Header() {
  const dispatch: AppDispatch = useDispatch();
  const { search } = useSelector((state: GlobalStateProps) => state.app);

  const [term, setTerm] = useState('');

  return (
    <header className="header">
      <h1>Cidades por DDD</h1>
      <div>
        <input type="text" onChange={ ({ target }) => setTerm(target.value) } />
        <button type="button" onClick={ () => dispatch(searchCities(term)) }>
          Pesquisar
        </button>
      </div>
      <h2>{`Buscando por ${search}`}</h2>
    </header>
  );
}

export default Header;
