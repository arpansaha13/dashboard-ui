import { useRef } from 'react'
import { Tooltip } from 'react-tooltip'
import FavIcon from './icons/fav.svg'
import LeftPanelView from './icons/Sidebar.svg'
import ThemeIcon from './icons/theme.svg'
import RecentIcon from './icons/recent.svg'
import NotificationIcon from './icons/notification.svg'
import SearchIconImg from './icons/search.svg'
import FavIconDark from './icons/fav-dark.svg'
import LeftPanelViewDark from './icons/left-panel-dark.svg'
import ThemeIconDark from './icons/theme-dark.svg'
import RecentIconDark from './icons/activity-dark.svg'
import NotificationIconDark from './icons/notification-dark.svg'
import SearchIconImgDark from './icons/search-dark.svg'
import BreadCrumbs from '../breadCrumbs'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { selectIsDark, toggleDark } from '../../store/features/dark/dark.slice'
import {
  toggleLeftPanel,
  toggleRightPanel,
} from '../../store/features/layout/layout.slice'

function Navbar() {
  const searchRef = useRef(null)

  const dispatch = useAppDispatch()
  const isDark = useAppSelector(selectIsDark)

  const handleLeftPanelToggle = () => {
    dispatch(toggleLeftPanel())
  }

  const handleRightPanelToggle = () => {
    dispatch(toggleRightPanel())
  }

  const handleDarkMode = () => {
    dispatch(toggleDark())
  }

  return (
    <>
      <nav className="border-dark/10 dark:border-light/10 xs:gap-0 xs:items-center xs:px-7 xs:py-5 flex items-start justify-between gap-[15px] border-b px-4 py-4.5">
        <div className="xs:gap-4 flex items-center gap-1.5">
          <button onClick={handleLeftPanelToggle} className="button-icon">
            <img
              data-tooltip-id="leftPanelTooltip"
              data-tooltip-content="Toggle Left Panel"
              src={isDark ? LeftPanelViewDark : LeftPanelView}
              alt="left-view"
              className="navbar-left-toggle size-icon"
            />
          </button>
          <button className="button-icon">
            <img
              data-tooltip-id="favTooltip"
              data-tooltip-content="Favorites"
              src={isDark ? FavIconDark : FavIcon}
              alt="fav"
              className="navbar-fav size-icon"
            />
          </button>

          <BreadCrumbs />
        </div>
        <div className="xs:gap-4 flex items-center gap-5">
          <div className="xs:block navbar-search-bar relative hidden">
            <img
              className="size-icon pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2"
              src={isDark ? SearchIconImgDark : SearchIconImg}
              alt="search"
            />
            <input
              className="dark:bg-light/5 bg-dark/5 placeholder:text-dark/20 dark:placeholder:text-light/20 w-full rounded-lg py-2 pr-16 pl-8 transition-colors outline-none"
              ref={searchRef}
              type="text"
              placeholder="Search"
            />
            <div className="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 text-[#1C1C1C33] dark:text-[#FFFFFF33]">
              ⌘ /
            </div>
          </div>
          <button onClick={handleDarkMode} className="button-icon">
            <img
              className="size-icon"
              data-tooltip-id="themeTooltip"
              data-tooltip-content="Switch Theme"
              src={isDark ? ThemeIconDark : ThemeIcon}
              alt="theme"
            />
          </button>
          <button className="button-icon">
            <img
              data-tooltip-id="recentTooltip"
              data-tooltip-content="Recent Activities"
              src={isDark ? RecentIconDark : RecentIcon}
              alt="recent"
              className="size-icon"
            />
          </button>
          <button className="button-icon">
            <img
              className="size-icon"
              data-tooltip-id="notificationTooltip"
              data-tooltip-content="Notifications"
              src={isDark ? NotificationIconDark : NotificationIcon}
              alt="notification"
            />
          </button>
          <button onClick={handleRightPanelToggle} className="button-icon">
            <img
              className="size-icon"
              data-tooltip-id="rightPanelTooltip"
              data-tooltip-content="Toggle Right Panel"
              src={isDark ? LeftPanelViewDark : LeftPanelView}
              alt="Right-view"
            />
          </button>
        </div>
      </nav>

      <Tooltip id="leftPanelTooltip" />
      <Tooltip id="favTooltip" />
      <Tooltip id="themeTooltip" />
      <Tooltip id="recentTooltip" />
      <Tooltip id="notificationTooltip" />
      <Tooltip id="rightPanelTooltip" />
    </>
  )
}

export default Navbar
