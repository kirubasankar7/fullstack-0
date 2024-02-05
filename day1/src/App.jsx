import React from "react";
import { BrowserRouter as Router, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from './pages/login';
import Register from './pages/signup';
import HomePage from "./pages/home";
import Landing from "./pages/landing";
import Photography from "./pages/pagessidebar/photography";
import Makeup from "./pages/pagessidebar/Makeup";
import Mehandi from "./pages/pagessidebar/mehandi";
import Entertainment from "./pages/pagessidebar/entertainment";
import Returngifts from "./pages/pagessidebar/returngifts";
import Food from "./pages/pagessidebar/food";


function App() {
  const router=createBrowserRouter([
    {
    path:'/',
    element:<Landing/>
    },
    {
      path:'/login',
      element:<LoginForm/>,
    },
    {
      path:'/reg',
      element:<Register/>,
    },
    {
      path:'/home',
      element:<HomePage/>,
    },
    {
      path:'/photo',
      element:<Photography/>,
    },
    {
      path:'/makeup',
      element:<Makeup/>,
    },
    {
      path:'/mehandi',
      element:<Mehandi/>,
    },
    {
      path:'/entertain',
      element:<Entertainment/>,
    },
    {
      path:'/food',
      element:<Food/>,
    },
    {
      path:'/gift',
      element:<Returngifts/>,
    },
  ])
  return(
    <div>
      <RouterProvider router={router}>
        
      </RouterProvider>
    </div>
  )
}

export default App;
