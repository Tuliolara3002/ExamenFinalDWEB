import React, { useEffect, useState } from 'react';

const DrinkDetail = ({ drinkId }) => {
  const [drink, setDrink] = useState(null);

  useEffect(() => {
    const fetchDrinkDetail = async () => {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`);
        const data = await response.json();
        setDrink(data.drinks[0]);
      } catch (error) {
        console.error('Error fetching drink detail:', error);
      }
    };

    if (drinkId) {
      fetchDrinkDetail();
    }
  }, [drinkId]);

  if (!drink) return <p>Select a drink to see details</p>;

  return (
    <div className="card mb-4">
      <img src={drink.strDrinkThumb} alt={drink.strDrink} className="card-img-top" />
      <div className="card-body">
        <h2 className="card-title">{drink.strDrink}</h2>
        <p className="card-text">{drink.strInstructions}</p>
        <ul className="list-group list-group-flush">
          {Array.from({ length: 15 }, (_, i) => i + 1).map((i) => {
            const ingredient = drink[`strIngredient${i}`];
            const measure = drink[`strMeasure${i}`];
            return ingredient ? (
              <li key={i} className="list-group-item">
                {measure} {ingredient}
              </li>
            ) : null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default DrinkDetail;
