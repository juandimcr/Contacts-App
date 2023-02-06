import { Routes, Route } from 'react-router-dom';
import  MainPage  from './components/MainPage';
import Signup from './components/forms/Signup';
import Login from './components/forms/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
