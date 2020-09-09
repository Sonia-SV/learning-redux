import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions';

const App = () => {
  const counter = useSelector((state) => state.counterReducer);
  const logged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {logged ? <h3>Valuable information I shoudent's see</h3> : ''}
    </div>
  );
};

export default App;
