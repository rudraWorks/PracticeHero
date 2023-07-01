import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home'
import Root from './Pages/Root'
import AddContest from './Pages/AddContest'
import UserState from './Contexts/User/UserState'
import Login from './Pages/Login'
import About from './Pages/About'

const router =  createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        index:true,
        element:<Home/> 
      },
      {
        path:'addContest',
        element:<AddContest/>
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'about',
        element:<About/>
      }
    ]
  }
]) 

export default function App() { 

  return (
      <UserState>
        <RouterProvider router={router}></RouterProvider>
      </UserState>
    )
}    