import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import Card from '../Card'
import { LineChartdata } from './data.tsx'
import Divider from '../Divider.tsx'

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

const RevenueChart = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <Card>
      <div className="mb-2.5 flex items-center gap-3">
        <h3 className="text-sm font-bold">Revenue</h3>
        <Divider vertical />
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={LineChartdata}
          margin={{ top: 20, right: 30, bottom: 5 }}
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
              fill: isDarkMode ? '#FFFFFF66' : '#1C1C1C66',
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
              fill: isDarkMode ? '#FFFFFF66' : '#1C1C1C66',
              dx: -12,
              fontSize: 12,
            }}
          />
          <Tooltip content={CustomTooltip} />

          <Line
            type="monotone"
            dataKey="currentWeek"
            stroke={isDarkMode ? '#A8C5DA' : '#000'}
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 5 }}
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="previousWeek"
            stroke={isDarkMode ? '#C6C7F8' : '#8da4c9'}
            strokeWidth={3}
            dot={false}
            strokeDasharray=""
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default RevenueChart
