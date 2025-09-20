import Stats from '../components/Stats'
import SalesDonutChart from '../components/charts/Sales'
import RevenueChart from '../components/charts/RevenueChart'
import TopSellingProductsTable from '../components/charts/TopSelling'
import RevenueByLocation from '../components/charts/RevenueByLocation'
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

      <section className="col-span-2">
        <ProjectionsVsActualsChart />
      </section>

      <section className="col-span-3">
        <RevenueChart />
      </section>

      <section>
        <RevenueByLocation />
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
