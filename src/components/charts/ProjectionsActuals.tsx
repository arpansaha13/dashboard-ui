import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  YAxis,
} from 'recharts'
import { useAppSelector } from '../../store/hooks'
import { selectIsDark } from '../../store/features/dark/dark.slice'
import Card from '../Card'
import { BarChartdata } from './data'

const ProjectionsVsActualsChart = () => {
  const isDark = useAppSelector(selectIsDark)

  return (
    <Card title="Projections vs Actuals">
      <ResponsiveContainer width="100%" height={180}>
        <BarChart
          data={BarChartdata}
          barSize={20}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid
            strokeDasharray="2 2"
            horizontal={true}
            vertical={false}
          />
          <XAxis
            dataKey="month"
            tickLine={false}
            stroke={isDark ? '#FFFFFF66' : '#1C1C1C66'}
            tick={{
              fill: isDark ? '#FFFFFF66' : '#1C1C1C66',
              dy: 8,
              fontSize: 12,
            }}
          />

          <YAxis
            width={30}
            tickLine={false}
            tick={{
              fill: isDark ? '#FFFFFF66' : '#1C1C1C66',
              dx: -5,
              dy: -5,
              fontSize: 12,
            }}
            axisLine={false}
            domain={[0, 30]}
            ticks={[0, 10, 20, 30]}
            tickFormatter={value => (value === 0 ? value : `${value}M`)}
          />
          <Tooltip />
          <Bar dataKey="projections" fill="#A8C5DA" stackId="a" />
          <Bar
            dataKey="actuals"
            fill="#A8C5DA"
            radius={[4, 4, 0, 0]}
            stackId="a"
            fillOpacity={0.5}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default ProjectionsVsActualsChart
