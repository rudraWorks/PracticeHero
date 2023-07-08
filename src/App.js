import React, { useContext } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Root from './Pages/Root'
import AddContest from './Pages/AddContest'
import UserState from './Contexts/User/UserState'
import Login from './Pages/Login'
import About from './Pages/About'
import RecordsState from './Contexts/Records/RecordsState'
import Edit from './Pages/Edit'
import Concepts from './Pages/Concepts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'addContest',
        element: <AddContest />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'edit/:recordId',
        element: <Edit/>
      },
      {
        path:'concepts/:recordId',
        element: <Concepts/>
      }
    ]
  }
])

export default function App() {

  return (
    <RecordsState>
      <UserState>
        <RouterProvider router={router}></RouterProvider>
      </UserState>
    </RecordsState>
  )
}    