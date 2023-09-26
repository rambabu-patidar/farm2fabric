import React from 'react';
import { useNavigate } from "react-router-dom";

const PurchaseHistory = () => {
  const navigate = useNavigate();
  // Replace with actual purchase history data from your application or API
  const purchaseHistory = [
    {
      id: 1,
      productName: 'Premium Merino Wool',
      quantity: 5,
      totalPrice: 99.95,
      date: '2023-08-15',
    },
    {
      id: 2,
      productName: 'Super Soft Alpaca Wool',
      quantity: 3,
      totalPrice: 74.97,
      date: '2023-07-22',
    },
    // Add more purchase history entries as needed
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mt-10">Purchase History</h2>
      <table className="table-auto mt-4 bg-green-300 mb-24">
        <thead>
          <tr>
            <th className="px-4 py-2">Product Name</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Total Price</th>
            <th className="px-4 py-2">Purchase Date</th>
            <th className="px-4 py-2">Tracking</th>
          </tr>
        </thead>
        <tbody>
          {purchaseHistory.map((purchase) => (
            <tr key={purchase.id}>
              <td className="border px-4 py-2">{purchase.productName}</td>
              <td className="border px-4 py-2">{purchase.quantity}</td>
              <td className="border px-4 py-2">${purchase.totalPrice.toFixed(2)}</td>
              <td className="border px-4 py-2">{purchase.date}</td>
              <td className="border px-4 py-2">
              <button
                onClick={() => navigate("/buyers-dashboard/tracking")}
                className="mt-2 hover:scale-110 transition-all hover:bg-teal-500 text-white bg-teal-700 px-4 py-2 rounded-lg"
              >
                Track your order
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseHistory;
