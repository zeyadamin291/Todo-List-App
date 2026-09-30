import React from 'react';
import logo from './logo.svg';
import './Components/css/Header.css';
import './Components/css/statCard.css'
import StatCardsContainer from './Components/StatCardsContainer.tsx'
import Header from './Components/Header.tsx'
import SearchField from './Components/SearchField.tsx'
import NewTaskForm from './Components/NewTaskForm.tsx'
import TaskContainer from './Components/TasksContainer.tsx';
import { TaskProvider } from './context/TaskContext.tsx';
function App() {
  return (
    <div>
      <Header />
      <StatCardsContainer />
      <TaskProvider>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <NewTaskForm />
          <SearchField />
        </div>
        <TaskContainer />
      </TaskProvider>
    </div>
  )
}

export default App;
