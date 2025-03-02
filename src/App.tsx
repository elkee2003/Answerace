import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Routes/HomepageRoutes.jsx';

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/*" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
