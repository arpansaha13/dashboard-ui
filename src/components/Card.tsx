import { classNames } from '../utils'

interface CardProps {
  title?: string
  className?: string
  children: React.ReactNode
}

const Card = (props: CardProps) => {
  const { title, className, children } = props

  return (
    <div
      className={classNames(
        className,
        'dark:bg-light/5 h-full rounded-xl bg-[#f7f9fB] p-4 lg:p-6',
      )}
    >
      {title && <h3 className="mb-2.5 text-sm font-bold">{title}</h3>}

      {children}
    </div>
  )
}

export default Card
