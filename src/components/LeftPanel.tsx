import { Link, useLocation } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'
import { selectIsDark } from '../store/features/dark/dark.slice'
import { Accordion, AccordionButton, AccordionPanel } from './Accordion'

const LeftPanel = () => {
  const isDark = useAppSelector(selectIsDark)

  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <aside>
      {/* Logo and Profile Section */}
      <div className="mb-5 flex flex-col text-sm">
        <div className="mt-2.5 flex items-center">
          <img
            src="/icons/profile-image.svg"
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
            src={isDark ? '/icons/default-dark.svg' : '/icons/default.svg'}
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
            src={isDark ? '/icons/ecommerce-dark.svg' : '/icons/ecommerce.svg'}
            alt="eCommerce"
            className="size-icon"
          />
          <span>eCommerce</span>
        </Link>

        <Accordion>
          <AccordionButton>
            <img
              src={isDark ? '/icons/projects-dark.svg' : '/icons/projects.svg'}
              alt="Projects"
              className="size-icon"
            />
            <p>Projects</p>
          </AccordionButton>
        </Accordion>

        <Accordion>
          <AccordionButton>
            <img
              className="size-icon"
              src={
                isDark
                  ? '/icons/online-course-dark.svg'
                  : '/icons/online-course.svg'
              }
              alt="Online Courses"
            />
            <p>Online Courses</p>
          </AccordionButton>
        </Accordion>

        <div className="text-dark/40 dark:text-light/40 mb-12px mt-[15px] text-sm">
          Pages
        </div>

        <Accordion initialOpen>
          <AccordionButton>
            <img
              className="size-icon"
              src={
                isDark
                  ? '/icons/user-profile-dark.svg'
                  : '/icons/user-profile.svg'
              }
              alt="User Profile"
            />
            <p>User Profile</p>
          </AccordionButton>
          <AccordionPanel>
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
          </AccordionPanel>
        </Accordion>

        <Accordion>
          <AccordionButton>
            <img
              src={isDark ? '/icons/account-dark.svg' : '/icons/account.svg'}
              alt="Account"
              className="size-icon"
            />
            <p>Account</p>
          </AccordionButton>
        </Accordion>

        <Accordion>
          <AccordionButton>
            <img
              src={
                isDark ? '/icons/corporate-dark.svg' : '/icons/corporate.svg'
              }
              alt="Corporate"
              className="size-icon"
            />
            <p>Corporate</p>
          </AccordionButton>
        </Accordion>

        <Accordion>
          <AccordionButton>
            <img
              src={isDark ? '/icons/blog-dark.svg' : '/icons/blog.svg'}
              alt="Blog"
              className="size-icon"
            />
            <p>Blog</p>
          </AccordionButton>
        </Accordion>

        <Accordion>
          <AccordionButton>
            <img
              src={isDark ? '/icons/social-dark.svg' : '/icons/social.svg'}
              alt="Social"
              className="size-icon"
            />
            <p>Social</p>
          </AccordionButton>
        </Accordion>
      </nav>
    </aside>
  )
}

export default LeftPanel
