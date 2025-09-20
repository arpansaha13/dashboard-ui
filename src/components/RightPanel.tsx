const RightPanel = () => {
  return (
    <aside>
      <div className="mb-5">
        <h2 className="text-dark/40 dark:text-light mt-4 mb-2.5 text-sm font-bold">
          Notifications
        </h2>

        <div className="mb-3 flex cursor-pointer items-center hover:scale-[1.02]">
          <div className="mr-2.5 flex h-5 w-5 items-center justify-center rounded-lg bg-[#e3f5ff] p-1">
            <img src="/icons/bug.svg" alt="icon" className="size-icon" />
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
            <img src="/icons/user.svg" alt="icon" className="size-icon" />
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
            <img src="/icons/bug.svg" alt="icon" className="size-icon" />
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
            <img src="/icons/Broadcast.svg" alt="icon" className="size-icon" />
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
            <img
              src="/avatars/avatar1.png"
              alt="person"
              className="h-5 w-5 rounded-full"
            />
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
            <img
              src="/avatars/avatar2.png"
              alt="person"
              className="h-5 w-5 rounded-full"
            />
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
            <img
              src="/avatars/avatar5.png"
              alt="person"
              className="h-5 w-5 rounded-full"
            />
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
            <img
              src="/avatars/avatar3.png"
              alt="person"
              className="h-5 w-5 rounded-full"
            />
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
            <img
              src="/avatars/avatar4.png"
              alt="person"
              className="h-5 w-5 rounded-full"
            />
          </div>
          <div className="text-sm">
            Deleted a page in Project X
            <div className="text-dark/40 dark:text-light/40 mt-0.5 text-[11px]">
              Feb 2, 2023
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <h2 className="text-dark/40 dark:text-light mt-4 mb-2.5 text-sm font-bold">
          Contacts
        </h2>
        <div className="mb-3.5 flex cursor-pointer items-center hover:scale-[1.02]">
          <img
            src="/avatars/avatar6.png"
            alt="person"
            className="mr-2.5 h-5 w-5 rounded-full"
          />
          <div className="text-sm">Natali Craig</div>
        </div>
        <div className="mb-3.5 flex cursor-pointer items-center hover:scale-[1.02]">
          <img
            src="/avatars/avatar7.png"
            alt="person"
            className="mr-2.5 h-5 w-5 rounded-full"
          />
          <div className="text-sm">Drew Cano</div>
        </div>
        <div className="mb-3.5 flex cursor-pointer items-center hover:scale-[1.02]">
          <img
            src="/avatars/avatar8.png"
            alt="person"
            className="mr-2.5 h-5 w-5 rounded-full"
          />
          <div className="text-sm">Orlando Diggs</div>
        </div>
        <div className="mb-3.5 flex cursor-pointer items-center hover:scale-[1.02]">
          <img
            src="/avatars/avatar9.png"
            alt="person"
            className="mr-2.5 h-5 w-5 rounded-full"
          />
          <div className="text-sm">Andi Lane</div>
        </div>
        <div className="mb-3.5 flex cursor-pointer items-center hover:scale-[1.02]">
          <img
            src="/avatars/avatar10.png"
            alt="person"
            className="mr-2.5 h-5 w-5 rounded-full"
          />
          <div className="text-sm">Kate Morrison</div>
        </div>
        <div className="mb-3.5 flex cursor-pointer items-center hover:scale-[1.02]">
          <img
            src="/avatars/avatar11.png"
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
