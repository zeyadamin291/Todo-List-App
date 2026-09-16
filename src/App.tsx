import React from 'react';
import logo from './logo.svg';
import './App.css';
import StatCard from './Components/StatCard.tsx'
import Header from './Components/Header.tsx'
import SearchField from './Components/SearchField.tsx'
import Task from './Components/Task.tsx'
import NewTaskForm from './Components/NewTaskForm.tsx'
function App() {
  return (
    <div>
      <Header />
      <StatCard 
        title='TOTAL TASKS'
        count={4}
        icon = {null}
        msg = 'All recorded items'
      />
      <SearchField />
      <NewTaskForm />
      <Task 
        id = {1}
        title = 'task 1'
      />
    </div>
  )
}

export default App;
