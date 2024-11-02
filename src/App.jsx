import React, { useState } from 'react';
import DrinkList from './components/DrinkList';
import DrinkDetail from './components/DrinkDetail';

const App = () => {
  const [selectedDrink, setSelectedDrink] = useState(null);

  return (
    <div className="App container">
      <DrinkList setSelectedDrink={setSelectedDrink} />
      {selectedDrink && <DrinkDetail drinkId={selectedDrink} />}
    </div>
  );
};

export default App;
