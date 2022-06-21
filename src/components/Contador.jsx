import React, { useState } from 'react';

const Contador = (props) => {
  console.log(useState);
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => setCounter(counter + 1);
  const decrementCounter = () => setCounter(counter - 1);
  const resetCounter = () => setCounter(0);

  return (
    <div>
      <h2>Contador con hooks</h2>
      <h2>Contador de los {props.message}</h2>
      <p>{counter}</p>
      <button onClick={decrementCounter}>-</button>
      <button onClick={resetCounter}>Reset</button>
      <button onClick={increaseCounter}>+</button>
    </div>
  );
};

//Props por default
Contador.defaultProps = {
  message: 'Contador de clicks',
};
export default Contador;
