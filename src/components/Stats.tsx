import { Link } from 'react-router-dom'
import RaiseIcon from './navbar/icons/ArrowRise.svg'
import RaiseDown from './navbar/icons/ArrowDown.svg'
import RaiseIconDark from './navbar/icons/ArrowRise-dark.svg'
import RaiseDownDark from './navbar/icons/ArrowDown-dark.svg'
import { classNames } from '../utils'

const cardData = [
  {
    type: 'customer',
    title: 'Customers',
    count: '3,781',
    subCount: '+11.01%',
    color: 'text-dark bg-[#e3f5ff]',
    icon: RaiseIcon,
    darkIcon: RaiseIconDark,
    to: '#',
  },
  {
    type: 'orders',
    title: 'Orders',
    count: '1,219',
    subCount: '-0.03%',
    color: 'bg-[#f7f9fb] dark:bg-light/5',
    icon: RaiseDown,
    darkIcon: RaiseDownDark,
    to: '/orders',
  },
  {
    type: 'revenue',
    title: 'Revenue',
    count: '$695',
    subCount: '+15.03%',
    color: 'bg-[#f7f9fb] dark:bg-light/5',
    icon: RaiseIcon,
    darkIcon: RaiseIconDark,
    to: '#',
  },
  {
    type: 'growth',
    title: 'Growth',
    count: '30.1%',
    subCount: '+6.08%',
    color: 'text-dark bg-[#e5ecf6]',
    icon: RaiseIcon,
    darkIcon: RaiseIconDark,
    to: '#',
  },
]

const Stats = () => {
  const isDarkMode = true

  return cardData.map(card => (
    <Link
      key={card.title}
      to={card.to}
      className={classNames(
        'flex items-center justify-start gap-2.5 rounded-2xl p-6 no-underline',
        card.color,
      )}
    >
      <div className="w-full">
        <h4 className="text-sm leading-5 font-semibold">{card.title}</h4>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold">{card.count}</div>

          <div className="flex items-center gap-[5px] text-xs">
            {card.subCount}
            <img
              src={isDarkMode ? card.darkIcon : card.icon}
              alt={card.type}
              className="size-4"
            />
          </div>
        </div>
      </div>
    </Link>
  ))
}

export default Stats
