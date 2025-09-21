import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import Card from '../Card.tsx'
import Divider from '../Divider.tsx'
import { useAppSelector } from '../../store/hooks.ts'
import { selectIsDark } from '../../store/features/dark/dark.slice.ts'
import { LineChartdata } from './data.tsx'
import Chip from '../Chip.tsx'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: 'white',
          padding: '8px',
          borderRadius: '5px',
          boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
        }}
      >
        <p
          style={{ fontWeight: 'bold', color: '#000' }}
        >{`Current Week: $${payload[0].value}`}</p>
        <p
          style={{ fontWeight: 'bold', color: '#8da4c9' }}
        >{`Previous Week: $${payload[1].value}`}</p>
      </div>
    )
  }

  return null
}

const RevenueChart = () => {
  const isDark = useAppSelector(selectIsDark)

  return (
    <Card className="flex flex-col">
      <div className="flex items-center">
        <h3 className="mr-5 text-sm font-bold">Revenue</h3>

        <Divider vertical />

        <p className="ml-8 flex items-center gap-2 text-xs leading-none">
          <Chip color="#C6C7F8" />
          <span className="block">Current Week</span>{' '}
          <span className="block font-semibold">$58,211</span>
        </p>
        <p className="ml-8 flex items-center gap-2 text-xs leading-none">
          <Chip color="#A8C5DA" />
          <span className="block">Previous Week</span>
          <span className="block font-semibold">$68,768</span>
        </p>
      </div>

      <div className="mt-5 grow">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={LineChartdata}
            margin={{ top: 10, right: 0, bottom: 0, left: -16 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E0E0E0"
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              tick={{
                fill: isDark ? '#FFFFFF66' : '#1C1C1C66',
                dy: 12,
                fontSize: 12,
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={value => (value === 0 ? value : `${value}M`)}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              tick={{
                fill: isDark ? '#FFFFFF66' : '#1C1C1C66',
                dx: -12,
                fontSize: 12,
              }}
            />
            <Tooltip content={CustomTooltip} />

            <Line
              type="monotone"
              dataKey="currentWeek"
              stroke={isDark ? '#A8C5DA' : '#000'}
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 5 }}
              strokeDasharray="5 5"
            />
            <Line
              type="monotone"
              dataKey="previousWeek"
              stroke={isDark ? '#c6c7f8' : '#8da4c9'}
              strokeWidth={3}
              dot={false}
              strokeDasharray=""
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

export default RevenueChart
