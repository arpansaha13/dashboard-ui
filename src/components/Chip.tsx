interface ChipProps {
  color: string
}

const Chip = ({ color }: ChipProps) => {
  return (
    <div className="size-1.5 rounded-full" style={{ backgroundColor: color }} />
  )
}

export default Chip
