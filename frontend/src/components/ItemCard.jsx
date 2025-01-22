import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ItemCard = ({ item }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/items/${item._id}`);
      alert('Item deleted');
      window.location.reload();
    } catch (err) {
      alert('Error deleting item');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">{item.name}</h3>
      <p className="text-gray-500">{item.description}</p>
      <p className="font-bold text-blue-500">${item.price}</p>
      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
      <div className="flex justify-between mt-4">
        <Link
          to={`/update-item/${item._id}`}
          className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
