import { Link } from 'react-router-dom'

const BreadCrumbs = ({ separator = '/' }) => {
  return (
    <>
      <Link
        to="#"
        className="text-dark/40 cursor-pointer text-sm dark:text-[#FFFFFF66]"
      >
        Dashboard
      </Link>
      <span className="text-dark/40 dark:text-light/40 cursor-pointer text-sm">
        {separator}
      </span>
      <span className="text-dark dark:text-light cursor-pointer text-sm">
        Default
      </span>
    </>
  )
}

export default BreadCrumbs
