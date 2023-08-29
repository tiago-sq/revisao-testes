// src/components/CityList.tsx
import { useSelector } from 'react-redux';
import { GlobalStateProps } from '../../types';

function CardList() {
  const { cities } = useSelector((state: GlobalStateProps) => state.app);

  return (
    <div className="city-list">
      {cities.map((city: string) => (
        <div key={city}>{city}</div>
      ))}
    </div>
  );
}

export default CardList;
