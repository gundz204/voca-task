import React from 'react';

// import react router DOM
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import file untuk routing
import Task from './pages/Task';
import Login from './pages/Login';
import UpdateProfile from './pages/UpdateProfile';

// Define routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/task",
    element: <Task />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/update-profile",
    element: <UpdateProfile />,
  }
]);

// fungsi app untuk manggil router
function App() {
  return <RouterProvider router={router} />;
}

export default App;
