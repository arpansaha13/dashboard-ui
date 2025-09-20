import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/app-layout'
import Dashboard from './pages/dashboard'
import Orders from './pages/orders'

const routes = createBrowserRouter([
  {
    element: <AppLayout />,
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
