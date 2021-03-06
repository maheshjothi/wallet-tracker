import React, { useState, useEffect } from 'react'
import { Jumbotron, Container } from 'reactstrap'
import WalletForm from './components/WalletForm'
import List from './components/List'

const expensesList = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : []

function App() {
  const [expenses, setExpenses] = useState(expensesList)
  const [id, setId] = useState(1)
  const [date, setDate] = useState('')
  const [type, setType] = useState('')
  const [name, setName] = useState('')
  var [amount, setAmount] = useState('')
  
  const handleDate = event => {
    setDate(event.target.value)
  }

  const handleType = event => {
    setType(event.target.value)
  }

  const handleName = event => {
    setName(event.target.value)
  }
  
  const handleAmount = event => {
    setAmount(event.target.value)
  }
   
  const handleSubmitForm = event => {
    event.preventDefault()
    //check whether the name is not empty and the amount is not negative
    if (date!=='' && type!=='' && name !== '' && amount > 0) {
      var index = expenses.findIndex(e=>e.id===id);
      if(index >= 0) expenses.splice(index,1);
      amount = parseInt(amount).toFixed(2);
      
      const expense = { id, date, type, name, amount }
      setExpenses([...expenses, expense])
      setId(id + 1);
      // clean input fields
      setDate('');
      setType('');
      setName('');
      setAmount('');
    } else {
      console.log('Invalid expense name or the amount')
    }
  }

  const handleClearExpenses = () => {
    setExpenses([])
  }

  const handleExpenses = (event, item) => {
    event.preventDefault();
    setDate(item.date);
    setType(item.type);
    setName(item.name);
    setAmount(item.amount);
    setId(item.id);
  }
   var totalAmount = 0;
   var income = 0;
   var expense = 0;
  for(var i=0; i<expenses.length; i++) {
    totalAmount += parseInt(expenses[i].amount);
    if(expenses[i].type === 'Expense') {
      expense += parseInt(expenses[i].amount);
    }
    if(expenses[i].type === 'Income') {
      income += parseInt(expenses[i].amount);
    }

  }
  totalAmount = totalAmount.toFixed(2);
  expense = expense.toFixed(2);
  income = income.toFixed(2);
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  return (
    <Container className="text-center">
      <Jumbotron fluid>
        <h3 className="display-6">
          Wallet Tracker
        </h3>
        <div>
        <p>
            Total Summary:{' '}
            <span className="text-primary">
              Rs{' '}
              {totalAmount}
            </span>
          </p>
        <p>
            Expense:{' '}
            <span className="text-danger">
              Rs{' '}
              {expense}
            </span>
          </p>
          <p>
            Income:{' '}
            <span className="text-success">
              Rs{' '}
              {income}
            </span>
          </p>
        </div>
        <WalletForm
          date={date} 
          type={type}
          name={name}
          amount={amount}
          handleDate={handleDate}
          handleType={handleType}
          handleName={handleName}
          handleAmount={handleAmount}
          handleSubmitForm={handleSubmitForm}
          handleClearExpenses={handleClearExpenses}
        />
        <List expenses={expenses} handleExpenses = {handleExpenses} />
      </Jumbotron>
    </Container>
  )
}

export default App