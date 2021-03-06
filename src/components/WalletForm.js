import React from 'react'

import {
  Form,
  FormGroup,
  Input,
  Label,
  Col,
  Button
} from 'reactstrap'

const WalletForm = ({ date, type, name, amount, handleType, handleDate, handleName, handleAmount,  handleSubmitForm, handleClearExpenses }) => (
  <Form style={{ margin: 10 }} onSubmit={handleSubmitForm}>
    <FormGroup className="row">
        <Label for="transactionDate" sm={2}>Date</Label>
        <Col sm={4}>
        <Input
          type="date"
          name="date"
          id="date"
          value={date}
          onChange={handleDate}
          placeholder="date placeholder"
        />
        </Col>
    </FormGroup>
    <FormGroup className="row">
        <Label for="transactionType" sm={2}>Type</Label>
        <Col sm={4}>
        <Input 
        type="select"
        name="type"
        id="type"
        value={type}
        onChange={handleType}
        >
            <option value=''>SELECT TYPE</option>
            <option value='Expense'>Expense</option>
            <option value='Income'>Income</option>
        </Input>
        </Col>
    </FormGroup>
    <FormGroup className="row">
      <Label for="expenseName" sm={2}>
        Income / Expense
      </Label>
      <Col sm={4}>
        <Input
          type="text"
          name="name"
          id="expenseName"
          placeholder="Income / Expense Details"
          value={name}
          autoComplete="nope"
          onChange={handleName}
        />
      </Col>
    </FormGroup>
    <FormGroup className="row">
      <Label for="expenseAmount" sm={2}>
        Amount(Rs)
      </Label>
      <Col sm={4}>
        <Input
          type="number"
          name="amount"
          id="expenseAmount"
          placeholder="0.00"
          value={amount}
          onChange={handleAmount}
        />
      </Col>
    </FormGroup>
    <Button type="submit" color="primary">
      Save / Update
    </Button>{' '}
    <Button type="submit" color="danger" onClick={handleClearExpenses}>
      Delete
    </Button>
  </Form>
)

export default WalletForm