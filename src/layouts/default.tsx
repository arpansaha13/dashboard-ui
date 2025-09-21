import { Outlet } from 'react-router-dom'
import Panel from '../components/Panel'
import Navbar from '../components/Navbar'
import LeftPanel from '../components/LeftPanel'
import RightPanel from '../components/RightPanel'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import {
  selectLeftPanelOpen,
  selectRightPanelOpen,
  toggleLeftPanel,
  toggleRightPanel,
} from '../store/features/layout/layout.slice'
import Drawer from '../components/Drawer'
import { useWindowSize } from '../hooks/useWindowSize'
import { LG_BREAKPOINT } from '../constants'

const DefaultLayout = () => {
  const dispatch = useAppDispatch()
  const leftPanelOpen = useAppSelector(selectLeftPanelOpen)
  const rightPanelOpen = useAppSelector(selectRightPanelOpen)
  const { width } = useWindowSize()

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

      {width < LG_BREAKPOINT && (
        <>
          <Drawer
            open={leftPanelOpen}
            setOpen={() => dispatch(toggleLeftPanel())}
            className="lg:hidden"
            direction="left"
          >
            <LeftPanel />
          </Drawer>

          <Drawer
            open={rightPanelOpen}
            setOpen={() => dispatch(toggleRightPanel())}
            className="lg:hidden"
            direction="right"
          >
            <RightPanel />
          </Drawer>
        </>
      )}
    </div>
  )
}

export default DefaultLayout
