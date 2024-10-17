// App.tsx
import React from 'react';
import Counter from './Counter';
import ShoppingCart from './ShoppingCart';
import './styles.css';

const App: React.FC = () => {
  return (
    <div>
      <h1>Test the Counter Component</h1>
      <Counter />
      <h1>Test the Shopping Cart Component</h1>
      <ShoppingCart />
    </div>
  );
};

export default App;
