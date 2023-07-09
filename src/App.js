import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Root from './Pages/Root'
import AddContest from './Pages/AddContest'
import Progress from './Pages/Progress'
import RecordsState from './Contexts/Records/RecordsState'
import Edit from './Pages/Edit'
import About from './Pages/About' 

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
        path: 'progress',
  
        children:[
          {
            index:true,
            element: <Progress />
          },
          {
            path: 'addContest',
            element: <AddContest />
          },
        ]
        
      },
      {
        path: 'edit/:recordId',
        element: <Edit/>
      },
      {
        path:'about',
        element: <About/>
      }
    ]
  }
])

export default function App() {

  return (
    <RecordsState>
        <RouterProvider router={router}></RouterProvider>
    </RecordsState>
  )
}    