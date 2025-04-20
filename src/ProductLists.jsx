import React from 'react';

const ProductLists = ({ products, addToCart }) => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-blue-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Products</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item) => (
          <li
            key={item.id}
            className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="p-6">
              <div className="relative">
                <img
                  src='item1.webp' 
                  className="w-full h-48 object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mt-4">{item.name}</h3>
              <p className="text-lg text-gray-300 mt-2">{item.price} Rs.</p>
              <button
                onClick={() => addToCart(item)}
                className="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Add To Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductLists;
