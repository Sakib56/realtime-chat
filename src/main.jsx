import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Login from './Pages/Login.jsx';
import Resister from './Pages/Resister';
import AuthProvider from './Provider/AuthPorvider';
import Home from './Pages/Home';
import ChatRoom from './Pages/ChatRoom';
import PrivateRoute from './routes/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/resister',
        element: <Resister></Resister>
      },
      {
        path: '/chatroom',
        element: <PrivateRoute><ChatRoom></ChatRoom></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
