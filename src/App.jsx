import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About , {about2 as Ab2} from './components/About'


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  },[])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch(`http://localhost:5000/tasks`)
    const data = await res.json()

    return data
  }

   // Fetch Task (only 1)
   const fetchTask = async (taskId) => {
    const res = await fetch(`http://localhost:5000/tasks/${taskId}`)
    const data = await res.json()

    return data
  }

  // Add Tasks 
  const addTask = async (task) => {

    // // random id 
    // const id = Math.floor(Math.random()* 10000)+1
    // // add random id 
    // const newTask = { id, ...task } // for text / day / reminder 
    // setTasks([...tasks, newTask]) // update new tasks 

    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json() // make sure we await
    setTasks([...tasks, data])

  }

  // Delete Task
  const deleteTask = async (deleteId) => {
    await fetch(`http://localhost:5000/tasks/${deleteId}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter( (task) => task.id !== deleteId)) // set only not this id
  }

  // Toggle Reminder
  const toggleReminder = async (toggleId) => {
    const taskToToggle = await fetchTask(toggleId)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${toggleId}`,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === toggleId ? {...task, reminder: data.reminder} : task)) //!task.reminder
  } 

  return (
    <Router>
      <div className="container">
        
        <Header 
          title='Task Tracker' 
          onAdd={() => setShowAddTask(!showAddTask)} 
          showAdd={showAddTask}
        />
    
        {/* 
        <h2>Hello {name}</h2>
        <h2>1+2 = {1+2}</h2>
        <h2>I'm a male : {x ? 'Yes' : 'No'}</h2>
        */}

        <Route path='/' exact render={(props) =>(
          <>
            {showAddTask && <AddTask onAdd={addTask}/>} 
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to Show'}
            
          </>
          
        )} />
        <Ab2 />
        <Route path='/about' component={About}/>
        <Footer />
        
      </div>
    </Router>
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