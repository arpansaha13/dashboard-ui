import { Outlet } from 'react-router-dom'
import Panel from '../components/Panel'
import Navbar from '../components/Navbar'
import LeftPanel from '../components/LeftPanel'
import RightPanel from '../components/RightPanel'
import { useAppSelector } from '../store/hooks'
import {
  selectLeftPanelOpen,
  selectRightPanelOpen,
} from '../store/features/layout/layout.slice'

const DefaultLayout = () => {
  const leftPanelOpen = useAppSelector(selectLeftPanelOpen)
  const rightPanelOpen = useAppSelector(selectRightPanelOpen)

  return (
    <div className="relative flex">
      {leftPanelOpen && (
        <Panel className="w-[212px] border-r px-4 py-5">
          <LeftPanel />
        </Panel>
      )}

      <div className="grow">
        <div className="bg-light dark:bg-dark sticky top-0 z-10">
          <Navbar />
        </div>

        <div className="p-5">
          <Outlet />
        </div>
      </div>

      {rightPanelOpen && (
        <Panel className="w-[280px] border-l p-5">
          <RightPanel />
        </Panel>
      )}
    </div>
  )
}

export default DefaultLayout
