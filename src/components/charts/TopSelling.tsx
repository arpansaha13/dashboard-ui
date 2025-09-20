import Card from '../Card.tsx'
import { Tableproducts } from './data.tsx'

const TopSellingProductsTable = () => {
  return (
    <Card title="Top Selling Products">
      <table className="w-full border-collapse">
        <thead>
          <tr className="h-10">
            <th className="dark:text-light/40 text-dark/40 dark:border-light/10 border-b border-[#e5e7eb] text-left text-xs font-medium">
              Name
            </th>
            <th className="dark:text-light/40 text-dark/40 dark:border-light/10 border-b border-[#e5e7eb] text-left text-xs font-medium">
              Price
            </th>
            <th className="dark:text-light/40 text-dark/40 dark:border-light/10 border-b border-[#e5e7eb] text-left text-xs font-medium">
              Quantity
            </th>
            <th className="dark:text-light/40 text-dark/40 dark:border-light/10 border-b border-[#e5e7eb] text-left text-xs font-medium">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {Tableproducts.map(product => (
            <tr key={product.name} className="h-10">
              <td className="text-xs">{product.name}</td>
              <td className="text-xs">{product.price}</td>
              <td className="text-xs">{product.quantity}</td>
              <td className="text-xs">{product.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}

export default TopSellingProductsTable
