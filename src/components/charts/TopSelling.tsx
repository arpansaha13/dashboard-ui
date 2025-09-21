import Card from '../Card.tsx'
import { Tableproducts } from './data.tsx'
import { Table, THead, TBody, TRow, TCell } from '../Table.tsx'

const TopSellingProductsTable = () => {
  return (
    <Card title="Top Selling Products">
      <Table>
        <THead>
          <TRow>
            <TCell isHeader>Name</TCell>
            <TCell isHeader>Price</TCell>
            <TCell isHeader>Quantity</TCell>
            <TCell isHeader>Amount</TCell>
          </TRow>
        </THead>
        <TBody>
          {Tableproducts.map(product => (
            <TRow key={product.name}>
              <TCell>{product.name}</TCell>
              <TCell>{product.price}</TCell>
              <TCell>{product.quantity}</TCell>
              <TCell>{product.amount}</TCell>
            </TRow>
          ))}
        </TBody>
      </Table>
    </Card>
  )
}

export default TopSellingProductsTable
