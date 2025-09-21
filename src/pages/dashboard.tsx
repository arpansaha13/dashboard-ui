import Stats from '../components/Stats'
import SalesDonutChart from '../components/charts/Sales'
import RevenueChart from '../components/charts/Revenue'
import TopSellingProductsTable from '../components/charts/TopSelling'
import RevenueByLocation from '../components/charts/RevenueByLocation'
import ProjectionsVsActualsChart from '../components/charts/ProjectionsActuals'

const Dashboard = () => {
  return (
    <main className="grid grid-cols-1 gap-4 sm:grid-cols-4 sm:gap-7">
      <h4 className="col-span-full text-sm leading-5 font-semibold">
        eCommerce
      </h4>

      <section className="grid grid-cols-1 gap-4 sm:col-span-2 sm:grid-cols-2 sm:gap-7">
        <Stats />
      </section>

      <section className="sm:col-span-2">
        <ProjectionsVsActualsChart />
      </section>

      <section className="sm:col-span-3">
        <RevenueChart />
      </section>

      <section>
        <RevenueByLocation />
      </section>

      <section className="sm:col-span-3">
        <TopSellingProductsTable />
      </section>

      <section>
        <SalesDonutChart />
      </section>
    </main>
  )
}

export default Dashboard
