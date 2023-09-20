import React from "react";
import WoolProductionAndQualityTable from "../components/Prices/WoolProductionAndQualityTable";

const priceData = [
  {
    productName: "Premium Merino Wool",
    price: "500 INR",
    image: "/images/WhyWool/image1.jpg",
    description: "High-quality Merino wool for knitting and crafting.",
  },
  {
    productName: "Super Soft Alpaca Wool",
    price: "350 INR",
    image: "/images/wool2.jpg",
    description: "Luxuriously soft Alpaca wool for cozy blankets and scarves.",
  },
  {
    productName: "Luxury Cashmere Blend",
    price: "700 INR",
    image: "/images/wool1.jpg",
    description:
      "A blend of cashmere and wool for luxurious warmth and comfort.",
  },
  {
    productName: "White raw sheep wool",
    price: "200 INR",
    image: "/images/wool2.jpg",
    description:
      "A blend of cashmere and wool for luxurious warmth and comfort.",
  },
];

const Prices = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold">Wool Prices</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {priceData.map((product, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out transform"
          >
            <img
              src={product.image}
              alt={product.productName}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">{product.productName}</h2>
            <p className="text-gray-600">{product.price}</p>
            <p className="mt-2 text-sm">{product.description}</p>
          </div>
        ))}
      </div>
      <WoolProductionAndQualityTable />
      <h1 className="mt-10 text-3xl font-semibold">
        Get Latest Prices and Trends
      </h1>
      <div className="flex justify-center">
        <img src="images/trends.png" className="w-100 h-100 mt-10" />
      </div>
    </div>
  );
};

export default Prices;
