import React from 'react'
import { Table, Button } from 'reactstrap'

const List = ({ expenses, handleExpenses }) => (
  <div>
    <Table responsive>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Date</th>
          <th>Type</th>
          <th>Income / Expense Details</th>
          <th>Amount(Rs)</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {expenses.map(item => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.date}</td>
          <td>{item.type}</td>
          <td>{item.name}</td>
          <td>{item.amount}</td>
          <td>
            <Button type="submit" color="primary" onClick={(e) => handleExpenses(e, item)}>
                Edit
            </Button>{' '}
        </td>
        </tr>
      ))}
        </tbody>
        </Table>
  </div>
)

export default List