import App from "./App";
import Dashboard from './components/dashboard/Dashboard';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './pages/Login.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store/store";

const router = createBrowserRouter([
  {
    element: <Login />,
    index: true
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
