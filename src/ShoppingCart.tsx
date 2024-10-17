import React, { useReducer } from 'react';
import { ShoppingCartItem, ShoppingCartAction, shoppingCartReducer } from './shoppingCartReducer';

const ShoppingCart: React.FC = () => {
  const [cart, dispatch] = useReducer<React.Reducer<ShoppingCartItem[], ShoppingCartAction>>(shoppingCartReducer, []);

  const addItem = (item: ShoppingCartItem) => dispatch({ type: 'ADD_ITEM', payload: item });
  const removeItem = (id: number) => dispatch({ type: 'REMOVE_ITEM', payload: id });

  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addItem({ id: Date.now(), name: 'New Item', price: 10 })}>Add Item</button>
      <p>Total Cost: ${totalCost}</p>
    </div>
  );
};

export default ShoppingCart;

