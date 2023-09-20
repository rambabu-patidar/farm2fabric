import React, { useState } from 'react';
import toast from 'react-hot-toast';

const WoolDetails = () => {
  const woolProduct = {
    id: 1,
    name: 'Premium Merino Wool',
    description: 'High-quality Merino wool for knitting and crafting.',
    price: 19.99,
    image: '/images/wool1.jpg',
    seller: 'Farmer - Shyam',
    location: 'Kashmir, India',
  };

  const [bought, setbought] = useState(false);
  const [cart, setCart] = useState("Add to Cart");

  const handleClick = () => {
    setbought(!bought);
    if(bought){
      toast.success("Wool successfully added to cart!")
      setCart("Remove")
    }
    else{
      toast.success("Removed from the cart")
      setCart("Add to Cart")
    }
  }

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img src={woolProduct.image} alt={woolProduct.name} className="w-full h-auto rounded-md" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">{woolProduct.name}</h1>
          <p className="text-gray-600">{woolProduct.seller}</p>
          <p className="text-gray-600">{woolProduct.location}</p>
          <p className="mt-4 text-xl font-bold">${woolProduct.price.toFixed(2)}</p>
          <p className="mt-2">{woolProduct.description}</p>
          <button onClick={handleClick} className="mt-4 hover:scale-110 transition-all hover:bg-teal-500 text-white bg-teal-700 px-4 py-2 rounded-lg">
            {cart}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WoolDetails;
