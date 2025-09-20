import { useContext } from 'react'
import BugIcon from './Images/bug.svg'
import UserIcon from './Images/User.svg'
import Broadcast from './Images/Broadcast.svg'
import Person1 from './Images/person1.svg'
import Person2 from './Images/person2.svg'
import Person3 from './Images/person3.svg'
import Person4 from './Images/person4.svg'
import Person6 from './Images/person6.svg'
import Person7 from './Images/person7.svg'
import Person8 from './Images/person8.svg'
import Person9 from './Images/person9.svg'
import Person10 from './Images/person10.svg'
import Person11 from './Images/person11.svg'
import Person12 from './Images/person12.svg'
import { AppContext } from '../../context/AppContext'

const RightPanel = () => {
  const { rightPanelView, rightSidebarRef } = useContext(AppContext)

  return (
    <aside
      ref={rightSidebarRef}
      className={`${
        rightPanelView ? '' : 'hidden'
      } border-dark/10 dark:border-light/10 absolute right-0 z-50 h-screen w-full max-w-[280px] border-l p-5 lg:static`}
    >
      <div className="mb-5">
        <h2 className="text-dark/40 dark:text-light mt-4 mb-2.5 text-sm font-bold">
          Notifications
        </h2>
        <div className="mb-3 flex cursor-pointer items-center hover:scale-[1.02]">
          <div className="mr-2.5 flex h-5 w-5 items-center justify-center rounded-lg bg-[#e3f5ff] p-1">
            <img src={BugIcon} alt="icon" className="size-icon" />
          </div>
          <div className="overflow-hidden text-sm text-ellipsis whitespace-nowrap">
            You have a bug that needs...
            <div className="text-dark/40 dark:text-light/40 mt-0.5 text-[11px]">
              Just now
            </div>
          </div>
        </div>
        <div className="mb-3 flex cursor-pointer items-center hover:scale-[1.02]">
          <div className="mr-2.5 flex h-5 w-5 items-center justify-center rounded-lg bg-[#e3f5ff] p-1">
            <img src={UserIcon} alt="icon" className="size-icon" />
          </div>
          <div className="overflow-hidden text-sm text-ellipsis whitespace-nowrap">
            New user registered
            <div className="text-dark/40 dark:text-light/40 mt-0.5 text-[11px]">
              59 minutes ago
            </div>
          </div>
        </div>
        <div className="mb-3 flex cursor-pointer items-center hover:scale-[1.02]">
          <div className="mr-2.5 flex h-5 w-5 items-center justify-center rounded-lg bg-[#e3f5ff] p-1">
            <img src={BugIcon} alt="icon" className="size-icon" />
          </div>
          <div className="overflow-hidden text-sm text-ellipsis whitespace-nowrap">
            You have a bug that needs...
            <div className="text-dark/40 dark:text-light/40 mt-0.5 text-[11px]">
              12 hours ago
            </div>
          </div>
        </div>
        <div className="mb-3 flex cursor-pointer items-center hover:scale-[1.02]">
          <div className="mr-2.5 flex h-5 w-5 items-center justify-center rounded-lg bg-[#e3f5ff] p-1">
            <img src={Broadcast} alt="icon" className="size-icon" />
          </div>
          <div className="overflow-hidden text-sm text-ellipsis whitespace-nowrap">
            Andi Lane subscribed to you
            <div className="text-dark/40 dark:text-light/40 mt-0.5 text-[11px]">
              Today, 11:59 AM
            </div>
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div className="mb-5">
        <h2 className="text-dark/40 dark:text-light mt-4 mb-2.5 text-sm font-bold">
          Activities
        </h2>
        <div className="mb-3 flex cursor-pointer items-start hover:scale-[1.02]">
          <div className="relative mr-2.5 flex flex-col items-center">
            <img src={Person1} alt="person" className="h-5 w-5 rounded-full" />
            <div className="bg-dark/10 dark:bg-light/10 absolute top-[27px] bottom-[-20px] left-[9px] w-[1px] grow"></div>
          </div>
          <div className="text-sm">
            You have a bug that needs...
            <div className="text-dark/40 dark:text-light/40 mt-0.5 text-[11px]">
              Just now
            </div>
          </div>
        </div>
        <div className="mb-3 flex cursor-pointer items-start hover:scale-[1.02]">
          <div className="relative mr-2.5 flex flex-col items-center">
            <img src={Person2} alt="person" className="h-5 w-5 rounded-full" />
            <div className="bg-dark/10 dark:bg-light/10 absolute top-[27px] bottom-[-20px] left-[9px] w-[1px] grow"></div>
          </div>
          <div className="text-sm">
            Released a new version
            <div className="text-dark/40 dark:text-light/40 mt-0.5 text-[11px]">
              59 minutes ago
            </div>
          </div>
        </div>
        <div className="mb-3 flex cursor-pointer items-start hover:scale-[1.02]">
          <div className="relative mr-2.5 flex flex-col items-center">
            <img src={Person6} alt="person" className="h-5 w-5 rounded-full" />
            <div className="bg-dark/10 dark:bg-light/10 absolute top-[27px] bottom-[-20px] left-[9px] w-[1px] grow"></div>
          </div>
          <div className="text-sm">
            Submitted a bug
            <div className="text-dark/40 dark:text-light/40 mt-0.5 text-[11px]">
              12 hours ago
            </div>
          </div>
        </div>
        <div className="mb-3 flex cursor-pointer items-start hover:scale-[1.02]">
          <div className="relative mr-2.5 flex flex-col items-center">
            <img src={Person3} alt="person" className="h-5 w-5 rounded-full" />
            <div className="bg-dark/10 dark:bg-light/10 absolute top-[27px] bottom-[-20px] left-[9px] w-[1px] grow"></div>
          </div>
          <div className="text-sm">
            Modified A data in Page X
            <div className="text-dark/40 dark:text-light/40 mt-0.5 text-[11px]">
              Today, 11:59 AM
            </div>
          </div>
        </div>
        <div className="mb-3 flex cursor-pointer items-start hover:scale-[1.02]">
          <div className="relative mr-2.5 flex flex-col items-center">
            <img src={Person4} alt="person" className="h-5 w-5 rounded-full" />
          </div>
          <div className="text-sm">
            Deleted a page in Project X
            <div className="text-dark/40 dark:text-light/40 mt-0.5 text-[11px]">
              Feb 2, 2023
            </div>
          </div>
        </div>
      </div>

      {/* Contacts Section */}
      <div className="mb-5">
        <h2 className="text-dark/40 dark:text-light mt-4 mb-2.5 text-sm font-bold">
          Contacts
        </h2>
        <div className="mb-3.5 flex cursor-pointer items-center hover:scale-[1.02]">
          <img
            src={Person7}
            alt="person"
            className="mr-2.5 h-5 w-5 rounded-full"
          />
          <div className="text-sm">Natali Craig</div>
        </div>
        <div className="mb-3.5 flex cursor-pointer items-center hover:scale-[1.02]">
          <img
            src={Person8}
            alt="person"
            className="mr-2.5 h-5 w-5 rounded-full"
          />
          <div className="text-sm">Drew Cano</div>
        </div>
        <div className="mb-3.5 flex cursor-pointer items-center hover:scale-[1.02]">
          <img
            src={Person9}
            alt="person"
            className="mr-2.5 h-5 w-5 rounded-full"
          />
          <div className="text-sm">Orlando Diggs</div>
        </div>
        <div className="mb-3.5 flex cursor-pointer items-center hover:scale-[1.02]">
          <img
            src={Person10}
            alt="person"
            className="mr-2.5 h-5 w-5 rounded-full"
          />
          <div className="text-sm">Andi Lane</div>
        </div>
        <div className="mb-3.5 flex cursor-pointer items-center hover:scale-[1.02]">
          <img
            src={Person11}
            alt="person"
            className="mr-2.5 h-5 w-5 rounded-full"
          />
          <div className="text-sm">Kate Morrison</div>
        </div>
        <div className="mb-3.5 flex cursor-pointer items-center hover:scale-[1.02]">
          <img
            src={Person12}
            alt="person"
            className="mr-2.5 h-5 w-5 rounded-full"
          />
          <div className="text-sm">Koray Okumus</div>
        </div>
      </div>
    </aside>
  )
}

export default RightPanel
