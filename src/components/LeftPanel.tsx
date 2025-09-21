import { Link } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'
import { selectIsDark } from '../store/features/dark/dark.slice'
import { Accordion, AccordionButton, AccordionPanel } from './Accordion'

const favoriteItems = [
  { link: '#', text: 'Overview' },
  { link: '#', text: 'Projects' },
]

const dashboardItems = [
  {
    icon: 'default',
    text: 'Default',
    type: 'link',
    active: true,
    path: '/',
  },
  {
    icon: 'ecommerce',
    text: 'eCommerce',
    type: 'accordion',
  },
  {
    icon: 'projects',
    text: 'Projects',
    type: 'accordion',
  },
  {
    icon: 'online-course',
    text: 'Online Courses',
    type: 'accordion',
  },
]

const pageItems = [
  {
    icon: 'user-profile',
    text: 'User Profile',
    type: 'accordion',
    initialOpen: true,
    children: [
      { text: 'Overview', path: '/' },
      { text: 'Projects', path: '/' },
      { text: 'Campaigns', path: '/' },
      { text: 'Documents', path: '/' },
      { text: 'Followers', path: '/' },
    ],
  },
  {
    icon: 'account',
    text: 'Account',
    type: 'accordion',
  },
  {
    icon: 'corporate',
    text: 'Corporate',
    type: 'accordion',
  },
  {
    icon: 'blog',
    text: 'Blog',
    type: 'accordion',
  },
  {
    icon: 'social',
    text: 'Social',
    type: 'accordion',
  },
]

const LeftPanel = () => {
  const isDark = useAppSelector(selectIsDark)

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

        {favoriteItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="hover:bg-dark/5 flex items-center gap-2.5 rounded px-3 py-1.5 text-sm"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-[#94a3b8]" />
            <span>{item.text}</span>
          </Link>
        ))}

        <div className="text-dark/40 dark:text-light/50 mt-4 mb-3 text-sm">
          Dashboards
        </div>

        {dashboardItems.map((item, index) =>
          item.type === 'link' ? (
            <Link
              key={index}
              to={item.path!}
              className="hover:bg-dark/5 relative rounded text-sm"
            >
              {item.active && (
                <div className="bg-dark absolute top-1/2 left-0 h-4 w-1 -translate-y-1/2 rounded-full border-l-4 dark:bg-[#c6c7f8]" />
              )}
              <div className="flex items-center gap-2.5 px-3 py-1.5">
                <img
                  src={
                    isDark
                      ? `/icons/${item.icon}-dark.svg`
                      : `/icons/${item.icon}.svg`
                  }
                  alt={item.text}
                  className="size-icon"
                />
                <span>{item.text}</span>
              </div>
            </Link>
          ) : (
            <Accordion key={index}>
              <AccordionButton>
                <img
                  src={
                    isDark
                      ? `/icons/${item.icon}-dark.svg`
                      : `/icons/${item.icon}.svg`
                  }
                  alt={item.text}
                  className="size-icon"
                />
                <p>{item.text}</p>
              </AccordionButton>
            </Accordion>
          ),
        )}

        <div className="text-dark/40 dark:text-light/40 mb-12px mt-[15px] text-sm">
          Pages
        </div>

        {pageItems.map((item, index) => (
          <Accordion key={index} initialOpen={item.initialOpen}>
            <AccordionButton>
              <img
                src={
                  isDark
                    ? `/icons/${item.icon}-dark.svg`
                    : `/icons/${item.icon}.svg`
                }
                alt={item.text}
                className="size-icon"
              />
              <p>{item.text}</p>
            </AccordionButton>

            {item.children && (
              <AccordionPanel>
                {item.children.map((child, childIndex) => (
                  <Link
                    key={childIndex}
                    to={child.path}
                    className="hover:bg-dark/5 flex items-center gap-2.5 rounded py-1.5 pl-[46px] text-sm"
                  >
                    {child.text}
                  </Link>
                ))}
              </AccordionPanel>
            )}
          </Accordion>
        ))}
      </nav>
    </aside>
  )
}

export default LeftPanel
