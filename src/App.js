// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Home from './components/Home';
import About from './components/About';
import { decrement, increment } from './features/actions/counterActions';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
