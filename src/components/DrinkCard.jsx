import React from 'react';

const DrinkCard = ({ drink, onClick }) => {
  return (
    <div className="card mb-4" onClick={() => onClick(drink.idDrink)}>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{drink.strDrink}</h5>
      </div>
    </div>
  );
};

export default DrinkCard;
