import Stats from '../components/Stats'
import GlobalMap from '../components/charts/GlobalMap'
import SalesDonutChart from '../components/charts/Sales'
import RevenueChart from '../components/charts/RevenueChart'
import TopSellingProductsTable from '../components/charts/TopSelling'
import ProjectionsVsActualsChart from '../components/charts/ProjectionsActuals'

const Dashboard = () => {
  return (
    <main className="grid grid-cols-4 gap-4">
      <h4 className="col-span-full text-sm leading-5 font-semibold">
        eCommerce
      </h4>

      <section className="col-span-2 grid grid-cols-2 gap-4">
        <Stats />
      </section>

      <section className="xs:flex-col col-span-2 flex w-full items-center gap-5">
        <div className="relative w-full overflow-hidden rounded-2xl bg-[#F7F9FB] dark:bg-[#FFFFFF0D]">
          <h4 className="pt-4 pl-5 text-sm leading-5 font-semibold">
            Projections vs Actuals
          </h4>

          <ProjectionsVsActualsChart isDarkMode={false} />
        </div>
      </section>

      <section className="col-span-3">
        <RevenueChart isDarkMode={false} />
      </section>

      <section>
        <GlobalMap />
      </section>

      <section className="col-span-3">
        <TopSellingProductsTable />
      </section>

      <section>
        <SalesDonutChart />
      </section>
    </main>
  )
}

export default Dashboard
