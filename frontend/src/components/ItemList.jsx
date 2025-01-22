import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from './ItemCard';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/items');
        setItems(response.data);
      } catch (err) {
        alert('Error fetching items');
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Items List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
