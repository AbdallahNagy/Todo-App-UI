import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Signup , {action as signupAction} from './components/Signup/Signup.jsx';
// import Login , {action as loginAction} from './components/Login/Login';
// import ListItem from './components/List Item/ListItem'
// import TaskItem from './components/Task Item/TaskItem'
import { loader as ListsLoader } from './components/Lists/Lists'
// import { loader as TasksLoader } from './components/Tasks/Tasks.jsx'
import MainLayout from './Routes/MainLayout/MainLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    loader: ListsLoader,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
