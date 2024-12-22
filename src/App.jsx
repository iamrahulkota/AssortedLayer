import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Tools from './Components/Data/Tools'


function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} >
            <Route index element={<Navigate to="tools" replace />} />
            <Route path="tools">
              <Route index element={<Tools /> } />
            </Route>
            <Route path="resources">
              <Route index element={<Tools /> } />
            </Route>
            <Route path="technologies">
              <Route index element={<Tools /> } />
            </Route>
            <Route path="upskilling">
              <Route index element={<Tools /> } />
            </Route>
            <Route path="typography">
              <Route index element={<Tools /> } />
            </Route>
        </Route> 
        <Route path="/about" element={<About />} />
      </Routes>
  )
}

export default App
