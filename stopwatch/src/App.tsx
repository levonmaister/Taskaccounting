
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import Tasks from "./Components/DisplayableComponents/Components/Tasks";
import Goals from "./Components/DisplayableComponents/Components/Goals";
import Goal from "./Components/DisplayableComponents/Subcomponents/Goal";



function App() {

  const padding = {
    padding: 5
  }

    return(
      <Router>
      <div>

      <div>
        <Link style={padding} to="/goals">Goals</Link>
        <Link style={padding} to="/tasks">Tasks</Link>
      </div>

      <Routes>
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/goals/:name" element={<Goal />}/>
      </Routes>

      </div>
      </Router>
    )


}

export default App
