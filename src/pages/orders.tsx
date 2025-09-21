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

const columnHeaders = [
  { name: 'Order ID', key: 'id' },
  { name: 'User', key: 'user' },
  { name: 'Project', key: 'project' },
  { name: 'Address', key: 'address' },
  { name: 'Date', key: 'date' },
  { name: 'Status', key: 'status' },
]

const Orders = () => {
  const isDark = useAppSelector(selectIsDark)

  const checked = useSet<string>()
  const [orders] = useState(initialData)

  const handleToggleAll = useCallback(() => {
    if (checked.size === orders.length) {
      checked.clear()
    } else {
      checked.add(orders.map(order => order.id))
    }
  }, [checked, orders])

  return (
    <main>
      <h4>Order List</h4>

      <Table>
        <THead>
          <TRow>
            <TCell>
              <Checkbox
                checked={checked.size === orders.length}
                partial={checked.size > 0}
                onChange={handleToggleAll}
              />
            </TCell>
            {columnHeaders.map(header => (
              <TCell key={header.key} isHeader className="capitalize">
                {header.name}
              </TCell>
            ))}
          </TRow>
        </THead>

        <TBody>
          {orders.map(order => (
            <TRow key={order.id} className="group">
              <TCell>
                <Checkbox
                  checked={checked.has(order.id)}
                  onChange={() => {
                    checked.toggle(order.id)
                  }}
                  className={classNames(
                    !checked.has(order.id) &&
                      'opacity-0 transition-opacity group-hover:opacity-100',
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
              <TCell>{order.project}</TCell>
              <TCell>{order.address}</TCell>
              <TCell>
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
