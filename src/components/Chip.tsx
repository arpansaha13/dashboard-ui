import { useMemo } from 'react'
import { classNames } from '../utils'

interface ChipProps {
  className?: string
  color?: string
}

const Chip = ({ className, color }: ChipProps) => {
  const style = useMemo(() => {
    if (color) return { backgroundColor: color }
    return {}
  }, [color])

  return (
    <span
      className={classNames('block size-1.5 rounded-full', className)}
      style={style}
      aria-hidden={true}
    />
  )
}

export default Chip
