import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Cards from '../components/charts/Cards'
import GlobalMap from '../components/charts/GlobalMap'
import SalesDonutChart from '../components/charts/Sales'
import RevenueChart from '../components/charts/RevenueChart'
import TopSellingProductsTable from '../components/charts/TopSelling'
import ProjectionsVsActualsChart from '../components/charts/ProjectionsActuals'

const Dashboard = () => {
  const { isDarkMode } = useContext(AppContext)
  return (
    <main className="scrollbar-none flex h-full max-h-[90vh] flex-col gap-4 overflow-y-scroll p-5">
      <h4 className="text-sm leading-5 font-semibold">eCommerce</h4>

      <section className="xs:flex-col flex w-full items-center gap-5">
        <Cards isDarkMode={isDarkMode} />

        <div className="relative w-full overflow-hidden rounded-2xl bg-[#F7F9FB] dark:bg-[#FFFFFF0D]">
          <h4 className="pt-4 pl-5 text-sm leading-5 font-semibold">
            Projections vs Actuals
          </h4>

          <ProjectionsVsActualsChart isDarkMode={isDarkMode} />
        </div>
      </section>

      <section className="xs:flex-col flex w-full items-center gap-5">
        <div className="xs:w-[87%] relative w-full overflow-hidden rounded-2xl bg-[#F7F9FB] p-6 dark:bg-[#2E2E2E]">
          <RevenueChart isDarkMode={isDarkMode} />
        </div>

        <GlobalMap />
      </section>

      <section className="xs:flex-col flex w-full items-center gap-5">
        <TopSellingProductsTable />

        <SalesDonutChart />
      </section>
    </main>
  )
}

export default Dashboard
