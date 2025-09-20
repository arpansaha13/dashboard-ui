import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { DonutChartdata } from './data.tsx'
import Card from '../Card.tsx'

const COLORS = DonutChartdata.map(entry => entry.color)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded bg-black p-[5px] text-white">
        <p className="m-0">{`${payload[0].value.toFixed(1)}%`}</p>
      </div>
    )
  }
  return null
}

const SalesDonutChart = () => {
  return (
    <Card title="Total Sales">
      <ResponsiveContainer width="100%" height={150}>
        <PieChart>
          <Pie
            data={DonutChartdata}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={60}
            dataKey="value"
            paddingAngle={0}
          >
            {DonutChartdata.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip content={CustomTooltip} />
        </PieChart>
      </ResponsiveContainer>

      <div className="text-left text-xs">
        {DonutChartdata.map((entry, index) => (
          <div key={`legend-${index}`} className="mb-2 flex items-center">
            <span
              className="mr-2 inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="dark:text-light/80 flex-1 text-sm text-[#555]">
              {entry.name}
            </span>
            <span className="dark:text-light text-sm text-[#333]">
              ${entry.value.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default SalesDonutChart
