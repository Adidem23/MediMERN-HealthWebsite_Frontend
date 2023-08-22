import Maint from './Components/Maint';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={Maint} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
      </Routes>
    </>
  )
}

export default App
