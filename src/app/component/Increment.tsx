'use client'

import { useState } from 'react';

export default function Increment() {
  // Set initial quantity state
  const [quantity, setQuantity] = useState(1);

  // Function to increment the quantity
  const increment = () => setQuantity(prev => prev + 1);

  // Function to decrement the quantity
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="flex items-center">
      <button
        className="border-2 border-gray-300 px-4 py-2 text-xl font-bold focus:outline-none"
        onClick={decrement}
      >
        -
      </button>
      <span className="px-4 text-xl">{quantity}</span>
      <button
        className="border-2 border-gray-300 px-4 py-2 text-xl font-bold focus:outline-none"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}
