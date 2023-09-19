import React from "react";
import { useNavigate } from "react-router-dom";
import PurchaseHistory from "../components/Buyers/PurchaseHistory";

const BuyersDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Sidebar */}
        <div className="col-span-1 md:col-span-2">
          {/* Buyer Profile Card */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold">Buyer Profile</h2>
            <p className="text-gray-600">Company: XYZ Trading</p>
            <p className="text-gray-600">Location: New Delhi, India</p>
            <p className="text-gray-600">Contact: buyer@xyztrading.com</p>
          </div>
          <PurchaseHistory />
        </div>

        {/* Action Widgets */}
        <div className="col-span-1">
          {/* Quick Actions */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold">Quick Actions</h2>
            <div className="flex justify-evenly mt-4">
              <button
                onClick={() => navigate("/buyers-dashboard/shop")}
                className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Purchase Wool
              </button>
              <button
                onClick={() => navigate("/buyers-dashboard/basic-details")}
                className="mt-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
              >
                Profile Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyersDashboard;
