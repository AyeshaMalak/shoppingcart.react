import React from 'react';

const Cart = ({ cartItems, removeFromCart, incrementQty, decrementQty }) => {
  // Calculate the total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-500">No items in cart</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li key={index} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md">
                <div className="flex flex-col">
                  <span className="font-semibold text-lg">{item.name}</span>
                  <span className="text-sm text-gray-500">{item.price} x {item.qty} = {item.price * item.qty}</span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => incrementQty(item.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600"
                  >
                    <b>+</b>
                  </button>
                  <button
                    onClick={() => decrementQty(item.id)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-full hover:bg-yellow-600"
                  >
                    <b>-</b>
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center p-4 bg-gray-200 rounded-lg shadow-md">
            <span className="font-semibold text-lg">Total:</span>
            <span className="text-xl font-bold">${totalPrice.toFixed(2)}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
