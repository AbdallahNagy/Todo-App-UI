import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts, { loader as postsLoader } from './Routes/Posts'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NewPost, { action as newPostAction } from './Routes/NewPost';
import RootLayout from './Routes/RootLayout';
import PostDetails , {loader as detailsLoader} from './Routes/PostDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: '/create-post', element: <NewPost />, action: newPostAction },
          { path: '/:id', element: <PostDetails />, loader: detailsLoader}
        ]
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
