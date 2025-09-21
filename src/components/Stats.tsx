import { Link } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'
import { selectIsDark } from '../store/features/dark/dark.slice'
import { classNames } from '../utils'

const cardData = [
  {
    type: 'customer',
    title: 'Customers',
    count: '3,781',
    subCount: '+11.01%',
    color: 'text-dark bg-[#e3f5ff]',
    icon: '/icons/stats/ArrowRise.svg',
    darkIcon: '/icons/stats/ArrowRise.svg',
    to: '#',
  },
  {
    type: 'orders',
    title: 'Orders',
    count: '1,219',
    subCount: '-0.03%',
    color: 'bg-[#f7f9fb] dark:bg-light/5',
    icon: '/icons/stats/ArrowDown.svg',
    darkIcon: '/icons/stats/ArrowDown-dark.svg',
    to: '/orders',
  },
  {
    type: 'revenue',
    title: 'Revenue',
    count: '$695',
    subCount: '+15.03%',
    color: 'bg-[#f7f9fb] dark:bg-light/5',
    icon: '/icons/stats/ArrowRise.svg',
    darkIcon: '/icons/stats/ArrowRise-dark.svg',
    to: '#',
  },
  {
    type: 'growth',
    title: 'Growth',
    count: '30.1%',
    subCount: '+6.08%',
    color: 'text-dark bg-[#e5ecf6]',
    icon: '/icons/stats/ArrowRise.svg',
    darkIcon: '/icons/stats/ArrowRise.svg',
    to: '#',
  },
]

const Stats = () => {
  const isDark = useAppSelector(selectIsDark)

  return cardData.map(card => (
    <Link
      key={card.title}
      to={card.to}
      className={classNames(
        'flex h-[112px] items-center justify-start rounded-2xl p-4 no-underline lg:p-6',
        card.color,
      )}
    >
      <div className="w-full">
        <h4 className="text-sm leading-5 font-semibold">{card.title}</h4>

        <div className="mt-1.5 flex items-center justify-between">
          <div className="text-2xl font-semibold">{card.count}</div>

          <div className="flex items-center gap-[5px] text-xs">
            {card.subCount}
            <img
              src={isDark ? card.darkIcon : card.icon}
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
