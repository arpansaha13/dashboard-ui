import { Outlet } from 'react-router-dom'
import Panel from '../components/Panel'
import Navbar from '../components/navbar/navbar'
import LeftPanel from '../components/leftPanel/leftPanel'
import RightPanel from '../components/rightPanel/rightPanel'
import { AppProvider } from '../context/AppContext'

const DefaultLayout = () => {
  return (
    <AppProvider>
      <div className="relative flex">
        <Panel className="w-[212px] border-r px-4 py-5">
          <LeftPanel />
        </Panel>

        <div className="grow">
          <Navbar />

          <div className="p-5">
            <Outlet />
          </div>
        </div>

        <Panel className="w-[280px] border-l p-5">
          <RightPanel />
        </Panel>
      </div>
    </AppProvider>
  )
}

export default DefaultLayout
