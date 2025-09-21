import { classNames } from '../utils'
import Chip from './Chip'

interface BadgeProps {
  color: string
  textColor?: string
  variant?: 'soft' | 'plain'
  children: React.ReactNode
}

const Badge = (props: BadgeProps) => {
  const { color, textColor, variant = 'plain', children } = props

  return (
    <p className="flex items-center gap-1.5 text-xs leading-none">
      <Chip className={color} />
      <span
        className={classNames(
          'block',
          variant === 'soft' ? (textColor ?? color) : '',
        )}
      >
        {children}
      </span>
    </p>
  )
}

export default Badge
