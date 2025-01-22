import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CreateItem from './components/CreateItem';
import ItemList from './components/ItemList';
import UpdateItem from './components/UpdateItem';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Item-related routes */}
          <Route path="/items" element={<ItemList />} /> {/* Display all items */}
          <Route path="/create-item" element={<CreateItem />} /> {/* Add new item */}
          <Route path="/update-item/:id" element={<UpdateItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
