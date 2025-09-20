import { classNames } from '../utils'

interface DividerProps {
  vertical?: boolean
}

const Divider = (props: DividerProps) => {
  const { vertical = false } = props

  return (
    <div
      className={classNames(
        vertical ? 'h-[18px] w-px' : 'h-px w-full',
        'bg-dark/20 dark:bg-light/20',
      )}
    />
  )
}

export default Divider
