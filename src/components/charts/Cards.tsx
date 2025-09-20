import { Link } from 'react-router-dom'
import RaiseIcon from '../navbar/icons/ArrowRise.svg'
import RaiseDown from '../navbar/icons/ArrowDown.svg'
import RaiseIconDark from '../navbar/icons/ArrowRise-dark.svg'
import RaiseDownDark from '../navbar/icons/ArrowDown-dark.svg'

const cardData = [
  {
    type: 'customer',
    title: 'Customers',
    count: '3,781',
    subCount: '+11.01%',
    icon: RaiseIcon,
    darkIcon: RaiseIconDark,
    isPositive: true,
    isDarkMode: false,
  },
  {
    type: 'orders',
    title: 'Orders',
    count: '1,219',
    subCount: '-0.03%',
    icon: RaiseDown,
    darkIcon: RaiseDownDark,
    isPositive: false,
    isDarkMode: true,
  },
  {
    type: 'revenue',
    title: 'Revenue',
    count: '$695',
    subCount: '+15.03%',
    icon: RaiseIcon,
    darkIcon: RaiseIconDark,
    isPositive: true,
    isDarkMode: true,
  },
  {
    type: 'growth',
    title: 'Growth',
    count: '30.1%',
    subCount: '+6.08%',
    icon: RaiseIcon,
    darkIcon: RaiseIconDark,
    isPositive: true,
    isDarkMode: false,
  },
]

const Cards = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const getBackgroundColor = (type: string, isDark: boolean) => {
    if (isDark && (type === 'orders' || type === 'revenue')) {
      return 'bg-light/5'
    }
    switch (type) {
      case 'customer':
        return 'bg-[#E3F5FF]'
      case 'orders':
        return 'bg-[#F7F9FB]'
      case 'revenue':
        return 'bg-[#F7F9FB]'
      case 'growth':
        return 'bg-[#E5ECF6]'
      default:
        return 'bg-[#E3F5FF]'
    }
  }

  return (
    <div className="xs:grid-cols-1 grid w-full grid-cols-2 gap-4">
      {cardData.map((card, index) => {
        const cardContent = (
          <>
            <h4
              className={`text-sm leading-5 font-semibold ${isDarkMode && card.isDarkMode ? 'text-light' : 'text-dark'}`}
            >
              {card.title}
            </h4>
            <div className="flex items-center justify-between">
              <div
                className={`text-2xl font-semibold ${isDarkMode && card.isDarkMode ? 'text-light' : 'text-dark'}`}
              >
                {card.count}
              </div>
              <div
                className={`flex items-center gap-[5px] text-xs ${isDarkMode && card.isDarkMode ? 'text-light' : 'text-dark'}`}
              >
                {card.subCount}
                <img
                  src={
                    isDarkMode && card.isDarkMode ? card.darkIcon : card.icon
                  }
                  alt={card.type}
                  className="size-4"
                />
              </div>
            </div>
          </>
        )

        return (
          <div
            key={index}
            className={`xs:p-3 flex flex-col gap-2.5 rounded-2xl p-6 ${getBackgroundColor(card.type, isDarkMode)}`}
          >
            {card.title === 'Orders' ? (
              <Link to="/orders" className="text-inherit no-underline">
                {cardContent}
              </Link>
            ) : (
              cardContent
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Cards
