import Card from '../Card.tsx'
import { countryData } from './data.tsx'

const RevenueByLocation = () => {
  return (
    <Card title="Revenue by Location">
      <div className="flex w-full items-center justify-center">
        <img src="/icons/world-map.svg" alt="World Map" className="m-2.5" />
      </div>

      {countryData.map(country => (
        <div key={country.name} className="my-1.5 flex flex-col gap-2">
          <div className="flex w-full items-center justify-between">
            <span className="text-xs">{country.name}</span>
            <span className="text-xs">{`${country.percentage}k`}</span>
          </div>
          <div className="bg-dark/40 dark:bg-light/40 h-[3px] w-full overflow-hidden rounded">
            <div
              className="h-full bg-[#a8c5da]"
              style={{ width: `${country.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </Card>
  )
}

export default RevenueByLocation
