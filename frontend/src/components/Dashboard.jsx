

import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Welcome to Dashboard</h2>

      <div className="flex space-x-4">
        <Link
          to="/items"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          View Items
        </Link>
        <Link
          to="/create-item"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Create Item
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
