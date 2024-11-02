import React, { useEffect, useState } from 'react';
import DrinkCard from './DrinkCard';

const DrinkList = ({ setSelectedDrink }) => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary%20Drink');
        const data = await response.json();
        setDrinks(data.drinks);
      } catch (error) {
        console.error('Error fetching drinks:', error);
      }
    };

    fetchDrinks();
  }, []);

  return (
    <div>
      <h1>Ordinary Drinks</h1>
      <div className="row">
        {drinks.map((drink) => (
          <div className="col-md-4" key={drink.idDrink}>
            <DrinkCard drink={drink} onClick={setSelectedDrink} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinkList;
