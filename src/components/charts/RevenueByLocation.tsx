import Card from '../Card.tsx'
import { countryData } from './data.tsx'

const RevenueByLocation = () => {
  return (
    <Card title="Revenue by Location">
      <div className="mt-4 mb-3">
        <img src="/icons/world-map.svg" alt="World Map" className="w-full" />
      </div>

      <ul className="space-y-4">
        {countryData.map(country => (
          <li key={country.name}>
            <div className="flex items-center justify-between text-xs">
              <span>{country.name}</span>
              <span>{`${country.percentage}k`}</span>
            </div>
            <div className="bg-dark/40 dark:bg-light/40 mt-1.5 h-[3px] rounded">
              <div
                className="h-full bg-[#a8c5da]"
                style={{ width: `${country.percentage}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default RevenueByLocation
