import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30 pm',
        reminder: true

    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false
    }
  ])

  // Add Tasks
  const addTask = (task) => {

    // random id 
    const id = Math.floor(Math.random()* 10000)+1
    // add random id 
    const newTask = { id, ...task } // for text / day / reminder 
    setTasks([...tasks, newTask]) // update new tasks 
  }

  // Delete Task
  const deleteTask = (deleteId) => {
    setTasks(tasks.filter( (task) => task.id !== deleteId)) // set only not this id
  }

  // Toggle Reminder
  const toggleReminder = (toggleId) => {
    setTasks(tasks.map((task) => task.id === toggleId ? {...task, reminder: !task.reminder} : task))
  } 

  return (
    <div className="container">
      
      <Header 
        title='Task Tracker' 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>} 
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to Show'}

      


      
      
      {/* tasks = {... } is like a new variable*/}
   
      {/* 
      <h2>Hello {name}</h2>
      <h2>1+2 = {1+2}</h2>
      <h2>I'm a male : {x ? 'Yes' : 'No'}</h2>
      */}
    
    
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>

//   }

// }

export default App;


/* 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


*/