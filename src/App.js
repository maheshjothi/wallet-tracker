import React, { useState, useEffect } from 'react'
import { Jumbotron, Container } from 'reactstrap'
import Logo from './logo.svg'
import Form from './components/Form'
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
  const [amount, setAmount] = useState('')
  
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
      expenses.splice(index,1);
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
    console.log("event", item);
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

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  return (
    <Container className="text-center">
      <Jumbotron fluid>
        <h3 className="display-6">
          Wallet Tracker
          <img src={Logo} style={{ width: 50, height: 50 }} alt="react-logo" />
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
        <Form
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