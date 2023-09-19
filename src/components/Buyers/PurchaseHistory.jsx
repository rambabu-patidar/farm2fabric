import React from 'react';

const PurchaseHistory = () => {
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
      <table className="table-auto mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Product Name</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Total Price</th>
            <th className="px-4 py-2">Purchase Date</th>
          </tr>
        </thead>
        <tbody>
          {purchaseHistory.map((purchase) => (
            <tr key={purchase.id}>
              <td className="border px-4 py-2">{purchase.productName}</td>
              <td className="border px-4 py-2">{purchase.quantity}</td>
              <td className="border px-4 py-2">${purchase.totalPrice.toFixed(2)}</td>
              <td className="border px-4 py-2">{purchase.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseHistory;
