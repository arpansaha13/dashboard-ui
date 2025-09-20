import { Tableproducts } from './data.tsx'

const TopSellingProductsTable = () => {
  return (
    <div className="dark:bg-light/5 h-full rounded-xl bg-[#F7F9FB] p-6">
      <h2 className={`mb-4 text-sm font-bold`}>Top Selling Products</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="dark:text-light/40 text-dark/40 dark:border-light/10 border-b border-[#e5e7eb] pb-3 text-left text-xs font-medium">
              Name
            </th>
            <th className="dark:text-light/40 text-dark/40 dark:border-light/10 border-b border-[#e5e7eb] pb-3 text-left text-xs font-medium">
              Price
            </th>
            <th className="dark:text-light/40 text-dark/40 dark:border-light/10 border-b border-[#e5e7eb] pb-3 text-left text-xs font-medium">
              Quantity
            </th>
            <th className="dark:text-light/40 text-dark/40 dark:border-light/10 border-b border-[#e5e7eb] pb-3 text-left text-xs font-medium">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {Tableproducts.map(product => (
            <tr key={product.name}>
              <td className="py-3 text-xs">{product.name}</td>
              <td className="py-3 text-xs">{product.price}</td>
              <td className="py-3 text-xs">{product.quantity}</td>
              <td className="py-3 text-xs">{product.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TopSellingProductsTable
