// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/');
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-3xl font-bold mb-4">Welcome to the Dashboard!</h2>
//         <p className="text-gray-700 mb-6">
//           You are logged in. Feel free to explore the application.
//         </p>
//         <button
//           onClick={handleLogout}
//           className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


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
