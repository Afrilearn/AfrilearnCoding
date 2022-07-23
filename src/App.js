import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Products from './pages/Products';
import SrollToTop from './components/SrollToTop';
import RegistrationForm from './pages/registeration/RegistrationForm';
import LoginForm from './pages/login/Login';
import Student from './pages/dashboard/student';
import Subscribe from './pages/subscribe/Subscribe';

function App() {
  return (
    <div className="App">
      <SrollToTop />
       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/apply" element={<RegistrationForm />} />
        <Route exact path="/dashboard/student" element={<Student />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/subscribe" element={<Subscribe />} />
        
      </Routes>
     
    </div>
  );
}

export default App;
