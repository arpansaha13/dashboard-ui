import { initialData } from '../components/orderTable/data'
import Badge from '../components/Badge'
import { Table, THead, TBody, TRow, TCell } from '../components/Table'
import { selectIsDark } from '../store/features/dark/dark.slice'
import { useAppSelector } from '../store/hooks'
import { Checkbox } from '../components/Checkbox'
import { useSet } from '../hooks/useSet'
import { useCallback, useState } from 'react'
import { classNames } from '../utils'

enum OrderStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  COMPLETED = 'COMPLETED',
}

interface Order {
  id: string
  user: string
  project: string
  address: string
  date: string
  status: OrderStatus
  avatar: string
}

const columnHeaders = [
  { name: 'Order ID', key: 'id', className: '' },
  { name: 'User', key: 'user', className: '' },
  { name: 'Project', key: 'project', className: 'hidden md:table-cell' },
  { name: 'Address', key: 'address', className: 'hidden md:table-cell' },
  { name: 'Date', key: 'date', className: 'hidden md:table-cell' },
  { name: 'Status', key: 'status', className: '' },
]

const Orders = () => {
  const isDark = useAppSelector(selectIsDark)

  const checked = useSet<string>(['#CM9803']) // for example
  const [orders] = useState<Order[]>(initialData as Order[])
  const [currentPage, setCurrentPage] = useState(1)
  const ROWS_PER_PAGE = 10

  const pageCount = Math.ceil(orders.length / ROWS_PER_PAGE)
  const paginatedOrders = orders.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE,
  )

  const handleToggleAll = useCallback(() => {
    if (checked.size === orders.length) {
      checked.clear()
    } else {
      checked.add(orders.map((order: { id: string }) => order.id))
    }
  }, [checked, orders])

  return (
    <main>
      <h4>Order List</h4>

      <Table>
        <THead>
          <TRow>
            <TCell className="w-6">
              <Checkbox
                checked={checked.size === orders.length}
                onChange={handleToggleAll}
              />
            </TCell>
            {columnHeaders.map(header => (
              <TCell key={header.key} isHeader className={header.className}>
                {header.name}
              </TCell>
            ))}
          </TRow>
        </THead>

        <TBody>
          {paginatedOrders.map(order => (
            <TRow key={order.id} className="group">
              <TCell>
                <Checkbox
                  checked={checked.has(order.id)}
                  onChange={() => {
                    checked.toggle(order.id)
                  }}
                  className={classNames(
                    !checked.has(order.id) &&
                      'lg:opacity-0 lg:transition-opacity lg:group-hover:opacity-100',
                  )}
                />
              </TCell>
              <TCell>{order.id}</TCell>
              <TCell>
                <div className="flex items-center gap-2">
                  <img src={order.avatar} alt={order.user} />
                  {order.user}
                </div>
              </TCell>
              <TCell className="hidden md:table-cell">{order.project}</TCell>
              <TCell className="hidden md:table-cell">{order.address}</TCell>
              <TCell className="hidden md:table-cell">
                <div className="flex items-center gap-1">
                  <img
                    src={
                      isDark
                        ? '/icons/calender_dark.svg'
                        : '/icons/calender.svg'
                    }
                    alt="Calender icon"
                  />
                  {order.date}
                </div>
              </TCell>
              <TCell>
                <OrderStatusBadge status={order.status} />
              </TCell>
            </TRow>
          ))}
        </TBody>
      </Table>

      <div className="mt-4 flex items-center justify-end gap-2">
        <PaginationButton
          onClick={() => setCurrentPage(page => page - 1)}
          disabled={currentPage === 1}
          iconSrc={
            isDark
              ? '/icons/arrows/arrow_left_dark.svg'
              : '/icons/arrows/arrow_left.svg'
          }
          alt="Previous page"
        />

        {Array.from({ length: pageCount }, (_, i) => i + 1).map(page => (
          <PaginationButton
            key={page}
            onClick={() => setCurrentPage(page)}
            active={currentPage === page}
          >
            {page}
          </PaginationButton>
        ))}

        <PaginationButton
          onClick={() => setCurrentPage(page => page + 1)}
          disabled={currentPage === pageCount}
          iconSrc={
            isDark
              ? '/icons/arrows/arrow_right_dark.svg'
              : '/icons/arrows/arrow_right.svg'
          }
          alt="Next page"
        />
      </div>
    </main>
  )
}

export default Orders

interface OrderStatusBadgeProps {
  status: OrderStatus
}

function OrderStatusBadge(props: OrderStatusBadgeProps) {
  const { status } = props

  if (status === OrderStatus.APPROVED) {
    return (
      <Badge color="bg-yellow-100" textColor="text-yellow-200" variant="soft">
        Approved
      </Badge>
    )
  }

  if (status === OrderStatus.PENDING) {
    return (
      <Badge color="bg-blue-100" textColor="text-blue-200" variant="soft">
        Pending
      </Badge>
    )
  }

  if (status === OrderStatus.COMPLETED) {
    return (
      <Badge color="bg-green-100" textColor="text-green-200" variant="soft">
        Completed
      </Badge>
    )
  }

  if (status === OrderStatus.IN_PROGRESS) {
    return (
      <Badge color="bg-purple-100" textColor="text-purple-200" variant="soft">
        In Progress
      </Badge>
    )
  }

  return (
    <Badge
      color="bg-dark/40 dark:bg-light/40"
      textColor="text-dark/40 dark:text-light/40"
      variant="soft"
    >
      Rejected
    </Badge>
  )
}

type PaginationButtonProps = {
  onClick: () => void
  disabled?: boolean
  active?: boolean
  children?: React.ReactNode
  iconSrc?: string
  alt?: string
}

export const PaginationButton: React.FC<PaginationButtonProps> = props => {
  const {
    onClick,
    disabled = false,
    active = false,
    children,
    iconSrc,
    alt = '',
  } = props

  return (
    <button
      disabled={disabled}
      className={classNames(
        'flex h-8 w-8 items-center justify-center rounded-lg text-sm',
        disabled
          ? 'cursor-not-allowed opacity-50'
          : 'hover:bg-dark/5 dark:hover:bg-light/5',
        active && 'bg-dark/5 dark:bg-light/5',
      )}
      onClick={onClick}
    >
      {iconSrc ? <img src={iconSrc} alt={alt} /> : children}
    </button>
  )
}
