import { classNames } from '../utils'

interface PanelProps {
  className: string
  children: React.ReactNode
}

const Panel = (props: PanelProps) => {
  const { className, children } = props

  return (
    <div
      className={classNames(
        className,
        'border-dark/10 dark:border-light/10 sticky top-0 hidden h-screen overflow-y-auto p-5 lg:block',
      )}
    >
      {children}
    </div>
  )
}

export default Panel
