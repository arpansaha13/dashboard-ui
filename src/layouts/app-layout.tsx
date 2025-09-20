import { Outlet } from 'react-router-dom'
import LeftPanel from '../components/leftPanel/leftPanel'
import Navbar from '../components/navbar/navbar'
import RightPanel from '../components/rightPanel/rightPanel'
import { AppProvider } from '../context/AppContext'

const AppLayout = () => {
  return (
    <AppProvider>
      <div className="flex">
        <div className="border-dark/10 dark:border-light/10 hidden h-screen w-full max-w-[212px] border-r p-5 lg:block">
          <LeftPanel />
        </div>
        <div className="grow">
          <Navbar />
          <Outlet />
        </div>
        <div className="w-[280px]">
          <RightPanel />
        </div>
      </div>
    </AppProvider>
  )
}

export default AppLayout
