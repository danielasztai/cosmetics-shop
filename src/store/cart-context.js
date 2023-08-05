import { createContext, useState } from 'react';

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
});

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const getProductQuantity = id => {
    const quantity = cartProducts.find(product => product.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  };

  const addOneToCart = item => {
    const existingProductIndex = cartProducts.findIndex(
      product => product.id === item.id
    );

    if (existingProductIndex === -1) {
      setCartProducts([
        ...cartProducts,
        {
          item: item,
          id: item.id,
          quantity: 1,
        },
      ]);
    } else {
      const updatedCartProducts = [...cartProducts];
      updatedCartProducts[existingProductIndex].quantity += 1;
      setCartProducts(updatedCartProducts);
    }
  };

  const removeOneFromCart = id => {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map(product =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  };

  const deleteFromCart = id => {
    setCartProducts(cartProducts =>
      cartProducts.filter(currentProduct => {
        return currentProduct.id !== id;
      })
    );
  };

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
