import React, { createContext, useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};




export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
  const addToCart = (item) => {
    setCart([...cart, item]);    
    console.log(cart);
  };

  const totalPrice = cart.reduce((total, item) => parseInt(total) + parseInt(item.precio), 0);


  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}

        <Button onClick={() => setShowCart(true)}>Confirmar Compra Total</Button>;

        {showCart && (
        <Card>
            <Card.Header>Carrito de Compras</Card.Header>
            <Card.Body>
            <ul>
                {cart.map(item => (
                <li key={item.name}>
                    {item.name} - ${item.precio}
                </li>
                ))}
            </ul>
            <p>Total: ${totalPrice}</p>
            <Button onClick={()=> {alert("COMPRA HECHA TE LLEGARA EN LOS PROXIMOS 8 DIAS HÁBILES")}}>Confirmar Compra</Button>
            </Card.Body>
        </Card>
        )}
            </CartContext.Provider>


  );
};