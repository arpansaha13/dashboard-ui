import { Link } from 'react-router-dom'

const BreadCrumbs = ({ separator = '/' }) => {
  return (
    <div className="xs:gap-3 flex gap-1.5">
      <Link
        to="#"
        className="text-dark/40 block cursor-pointer text-sm leading-none dark:text-[#FFFFFF66]"
      >
        Dashboard
      </Link>
      <span className="text-dark/40 dark:text-light/40 block cursor-pointer text-sm leading-none">
        {separator}
      </span>
      <span className="text-dark dark:text-light block cursor-pointer text-sm leading-none">
        Default
      </span>
    </div>
  )
}

export default BreadCrumbs
