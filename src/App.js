import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


const App = () => {

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

  const name = 'Sirawit'
  const x = true

  return (
    <div className="container">
      
      <Header title='Task Tracker'/>
      <Tasks tasks={tasks}/> {/* tasks = {... } is like a new variable*/}
   
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