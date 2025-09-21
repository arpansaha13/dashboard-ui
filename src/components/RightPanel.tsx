const notifications = [
  {
    icon: '/icons/bug.svg',
    text: 'You have a bug that needs...',
    time: 'Just now',
  },
  {
    icon: '/icons/user.svg',
    text: 'New user registered',
    time: '59 minutes ago',
  },
  {
    icon: '/icons/bug.svg',
    text: 'You have a bug that needs...',
    time: '12 hours ago',
  },
  {
    icon: '/icons/Broadcast.svg',
    text: 'Andi Lane subscribed to you',
    time: 'Today, 11:59 AM',
  },
]

const activities = [
  {
    avatar: '/avatars/avatar1.png',
    text: 'You have a bug that needs...',
    time: 'Just now',
  },
  {
    avatar: '/avatars/avatar2.png',
    text: 'Released a new version',
    time: '59 minutes ago',
  },
  {
    avatar: '/avatars/avatar5.png',
    text: 'Submitted a bug',
    time: '12 hours ago',
  },
  {
    avatar: '/avatars/avatar3.png',
    text: 'Modified A data in Page X',
    time: 'Today, 11:59 AM',
  },
  {
    avatar: '/avatars/avatar4.png',
    text: 'Deleted a page in Project X',
    time: 'Feb 2, 2023',
    isLast: true,
  },
]

const contacts = [
  { avatar: '/avatars/avatar6.png', name: 'Natali Craig' },
  { avatar: '/avatars/avatar7.png', name: 'Drew Cano' },
  { avatar: '/avatars/avatar8.png', name: 'Orlando Diggs' },
  { avatar: '/avatars/avatar9.png', name: 'Andi Lane' },
  { avatar: '/avatars/avatar10.png', name: 'Kate Morrison' },
  { avatar: '/avatars/avatar11.png', name: 'Koray Okumus' },
]

const RightPanel = () => {
  return (
    <aside>
      <div className="mb-5">
        <h2 className="mt-4 mb-2.5 text-sm font-bold">Notifications</h2>

        {notifications.map((notification, index) => (
          <div key={index} className="mb-3 flex cursor-pointer items-center">
            <div className="mr-2.5 flex h-5 w-5 items-center justify-center rounded-lg bg-[#e3f5ff] p-1">
              <img src={notification.icon} alt="icon" className="size-icon" />
            </div>
            <div className="overflow-hidden text-sm text-ellipsis whitespace-nowrap">
              {notification.text}
              <div className="text-dark/40 dark:text-light/40 mt-0.5 text-[11px]">
                {notification.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-5">
        <h2 className="mt-4 mb-2.5 text-sm font-bold">Activities</h2>

        {activities.map((activity, index) => (
          <div key={index} className="mb-3 flex cursor-pointer items-start">
            <div className="relative mr-2.5 flex flex-col items-center">
              <img
                src={activity.avatar}
                alt="person"
                className="h-5 w-5 rounded-full"
              />
              {!activity.isLast && (
                <div className="bg-dark/10 dark:bg-light/10 absolute top-[27px] bottom-[-20px] left-[9px] w-[1px] grow"></div>
              )}
            </div>
            <div className="text-sm">
              {activity.text}
              <div className="text-dark/40 dark:text-light/40 mt-0.5 text-[11px]">
                {activity.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-5">
        <h2 className="mt-4 mb-2.5 text-sm font-bold">Contacts</h2>

        {contacts.map((contact, index) => (
          <div key={index} className="mb-3.5 flex cursor-pointer items-center">
            <img
              src={contact.avatar}
              alt="person"
              className="mr-2.5 h-5 w-5 rounded-full"
            />
            <div className="text-sm">{contact.name}</div>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default RightPanel
