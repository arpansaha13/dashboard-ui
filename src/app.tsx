import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayout from './layouts/default'
import Dashboard from './pages/dashboard'
import Orders from './pages/orders'

const routes = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
    ],
  },
])

const AppRoutes = () => <RouterProvider router={routes} />

export default AppRoutes
