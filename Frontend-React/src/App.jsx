import { Routes, Route } from 'react-router-dom';
import  MainPage  from './components/MainPage';
import Signup from './components/forms/Signup';
import Login from './components/forms/Login';
import UserPage from './components/UserPage';
import NewContactForm from './components/forms/NewContactForm';

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/:username" element={<UserPage />} />
        <Route path="/contacts/add" element={<NewContactForm user={JSON.parse(localStorage.getItem('user'))} />} />
      </Routes>
    </div>
  )
}

export default App;
