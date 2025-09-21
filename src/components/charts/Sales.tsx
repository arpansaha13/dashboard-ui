import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { DonutChartdata } from './data.tsx'
import Card from '../Card.tsx'
import Chip from '../Chip.tsx'

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
    <Card title="Total Sales" className="">
      <ResponsiveContainer width={120} height={120} className="mx-auto my-4">
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
            {DonutChartdata.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip content={CustomTooltip} />
        </PieChart>
      </ResponsiveContainer>

      <ul className="mx-3.5 space-y-4 text-xs">
        {DonutChartdata.map((entry, index) => (
          <li
            key={`legend-${index}`}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-1.5">
              <Chip color={entry.color} />
              <p className="leading-none">{entry.name}</p>
            </div>
            <p>${entry.value.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default SalesDonutChart
