import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <button onClick={handleDecrement} className='btn btn-error'>
        -
      </button>
      <span className='p-4 font-bold'>{counter}</span>
      <button onClick={handleIncrement} className='btn btn-success'>
        +
      </button>
    </div>
  );
};

export default Counter;
