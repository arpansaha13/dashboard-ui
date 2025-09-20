import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ProfileImage from './Images/profile-image.svg'
import DefaultIcon from './Images/default-icon.svg'
import EcommerceIcon from './Images/ecommerce-icon.svg'
import ProjectsIcon from './Images/projects-icon.svg'
import OnlineCourseIcon from './Images/online-courses-icon.svg'
import UserprofileIcon from './Images/user-profile-icon.svg'
import AccountIcon from './Images/account-icon.svg'
import BlogIcon from './Images/blog-icon.svg'
import CorporateIcon from './Images/corporate-icon.svg'
import SocialIcon from './Images/social-icon.svg'
import DropArrow from './Images/dropArrow.svg'
import DefaultIconDark from './Images/default-icon-dark.svg'
import EcommerceIconDark from './Images/ecommerce-dark.svg'
import ProjectIconDark from './Images/projects-dark.svg'
import OnlineCourseIconDark from './Images/online-course-dark.svg'
import UserprofileIconDark from './Images/user-profile-dark.svg'
import AccountIconDark from './Images/account-dark.svg'
import BlogIconDark from './Images/blogs-dark.svg'
import CorporateIconDark from './Images/corporate-dark.svg'
import SocialIconDark from './Images/social-dark.svg'
import DropArrowDark from './Images/arrow-dark.svg'
import { AppContext } from '../../context/AppContext'

const LeftPanel = () => {
  const {
    isDarkMode,
    sidebarRef, // Accessing the ref from AppContext
  } = useContext(AppContext)

  const location = useLocation()

  // Check if the route matches the current path
  const isActive = (path: string) => location.pathname === path

  return (
    <aside ref={sidebarRef}>
      {/* Logo and Profile Section */}
      <div className="mb-5 flex flex-col text-sm">
        <div className="mt-2.5 flex items-center">
          <img
            src={ProfileImage}
            alt="Profile"
            className="mr-2 h-6 w-6 rounded-full"
          />
          <div className="text-sm">ByeWind</div>
        </div>
      </div>

      {/* Navigation Sections */}
      <nav className="flex-1">
        <div className="flex items-center gap-6">
          <div className="text-dark/40 dark:text-light/50 mt-4 mb-3 text-sm">
            Favorites
          </div>
          <div className="text-dark/40 dark:text-light/50 mt-4 mb-3 text-sm opacity-50">
            Recently
          </div>
        </div>
        <Link
          to="#"
          className="hover:bg-dark/5 flex items-center gap-2.5 rounded px-3 py-1.5 text-sm"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-[#94a3b8]" />
          <span>Overview</span>
        </Link>
        <Link
          to="#"
          className="hover:bg-dark/5 flex items-center gap-2.5 rounded px-3 py-1.5 text-sm"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-[#94a3b8]" />
          <span>Projects</span>
        </Link>

        <div className="text-dark/40 dark:text-light/50 mt-4 mb-3 text-sm">
          Dashboards
        </div>
        <Link
          to="/"
          className={`hover:bg-dark/5 relative flex items-center gap-2.5 rounded px-3 py-1.5 text-sm ${
            isActive('/default') || isActive('/') || isActive('/orders')
              ? 'bg-dark/5 dark:bg-light/10 before:bg-dark before:absolute before:top-1/4 before:left-0 before:h-1/2 before:w-1 before:rounded before:content-[""] dark:before:bg-[#C6C7F8]'
              : ''
          }`}
        >
          <div className="border-dark mr-3 h-4 rounded-full border-l-4 dark:border-[#C6C7F8]"></div>
          <img
            src={isDarkMode ? DefaultIconDark : DefaultIcon}
            alt="Default"
            className="size-icon"
          />
          <span>Default</span>
        </Link>
        <Link
          to="/"
          className={`hover:bg-dark/5 relative flex items-center gap-2.5 rounded px-3 py-1.5 text-sm ${
            isActive('/default')
              ? 'bg-dark/5 dark:bg-light/10 before:bg-dark before:absolute before:top-1/4 before:left-0 before:h-1/2 before:w-1 before:rounded before:content-[""] dark:before:bg-[#C6C7F8]'
              : ''
          }`}
        >
          <div className="border-dark mr-3 h-4 rounded-full border-l-4 dark:border-[#C6C7F8]"></div>
          <img
            src={isDarkMode ? EcommerceIconDark : EcommerceIcon}
            alt="eCommerce"
            className="size-icon"
          />
          <span>eCommerce</span>
        </Link>
        <div className="hover:bg-dark/5 flex cursor-pointer items-center gap-2.5 rounded px-3 py-1.5 text-sm">
          <img
            src={isDarkMode ? DropArrowDark : DropArrow}
            alt="Drop Arrow"
            className="size-icon"
          />
          <img
            src={isDarkMode ? ProjectIconDark : ProjectsIcon}
            alt="Projects"
            className="size-icon"
          />
          <span>Projects</span>
        </div>
        <div className="hover:bg-dark/5 flex cursor-pointer items-center gap-2.5 rounded px-3 py-1.5 text-sm">
          <img
            className="size-icon"
            src={isDarkMode ? DropArrowDark : DropArrow}
            alt="Drop Arrow"
          />
          <img
            className="size-icon"
            src={isDarkMode ? OnlineCourseIconDark : OnlineCourseIcon}
            alt="Online Courses"
          />
          <span>Online Courses</span>
        </div>

        <div className="text-dark/40 dark:text-light/40 mb-12px mt-[15px] text-sm">
          Pages
        </div>
        <div className="hover:bg-dark/5 flex cursor-pointer items-center gap-2.5 rounded px-3 py-1.5 text-sm">
          <img
            className="size-icon"
            src={isDarkMode ? DropArrowDark : DropArrow}
            alt="Drop Arrow"
          />
          <img
            className="size-icon"
            src={isDarkMode ? UserprofileIconDark : UserprofileIcon}
            alt="User Profile"
          />{' '}
          <span>User Profile</span>
        </div>
        <Link
          to="/"
          className="hover:bg-dark/5 flex items-center gap-2.5 rounded py-1.5 pl-14 text-sm"
        >
          Overview
        </Link>
        <Link
          to="/"
          className="hover:bg-dark/5 flex items-center gap-2.5 rounded py-1.5 pl-14 text-sm"
        >
          Projects
        </Link>
        <Link
          to="/"
          className="hover:bg-dark/5 flex items-center gap-2.5 rounded py-1.5 pl-14 text-sm"
        >
          Campaigns
        </Link>
        <Link
          to="/"
          className="hover:bg-dark/5 flex items-center gap-2.5 rounded py-1.5 pl-14 text-sm"
        >
          Documents
        </Link>
        <Link
          to="/"
          className="hover:bg-dark/5 flex items-center gap-2.5 rounded py-1.5 pl-14 text-sm"
        >
          Followers
        </Link>
        <div className="hover:bg-dark/5 flex cursor-pointer items-center gap-2.5 rounded px-3 py-1.5 text-sm">
          <img
            src={isDarkMode ? DropArrowDark : DropArrow}
            alt="Drop Arrow"
            className="size-icon"
          />
          <img
            src={isDarkMode ? AccountIconDark : AccountIcon}
            alt="Account"
            className="size-icon"
          />
          <span>Account</span>
        </div>
        <div className="hover:bg-dark/5 flex cursor-pointer items-center gap-2.5 rounded px-3 py-1.5 text-sm">
          <img
            src={isDarkMode ? DropArrowDark : DropArrow}
            alt="Drop Arrow"
            className="size-icon"
          />
          <img
            src={isDarkMode ? CorporateIconDark : CorporateIcon}
            alt="Corporate"
            className="size-icon"
          />
          <span>Corporate</span>
        </div>
        <div className="hover:bg-dark/5 flex cursor-pointer items-center gap-2.5 rounded px-3 py-1.5 text-sm">
          <img
            src={isDarkMode ? DropArrowDark : DropArrow}
            alt="Drop Arrow"
            className="size-icon"
          />
          <img
            src={isDarkMode ? BlogIconDark : BlogIcon}
            alt="Blog"
            className="size-icon"
          />
          <span>Blog</span>
        </div>
        <div className="hover:bg-dark/5 flex cursor-pointer items-center gap-2.5 rounded px-3 py-1.5 text-sm">
          <img
            src={isDarkMode ? DropArrowDark : DropArrow}
            alt="Drop Arrow"
            className="size-icon"
          />
          <img
            src={isDarkMode ? SocialIconDark : SocialIcon}
            alt="Social"
            className="size-icon"
          />
          <span>Social</span>
        </div>
      </nav>
    </aside>
  )
}

export default LeftPanel
