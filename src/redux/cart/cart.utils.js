export const addItemtoCart = (CartItems, cartItemtoAdd) => {
  const existingCartitem = CartItems.find(
    cartItem => cartItem.id === cartItemtoAdd.id
  );

  if (existingCartitem) {
    return CartItems.map(cartItem =>
      cartItem.id === cartItemtoAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...CartItems, { ...cartItemtoAdd, quantity: 1 }];
};
