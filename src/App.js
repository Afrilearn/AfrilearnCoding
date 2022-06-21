import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Apply from './pages/Apply';
import Products from './pages/Products';
import SrollToTop from './components/SrollToTop';

function App() {
  return (
    <div className="App">
      <SrollToTop />
       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/apply" element={<Apply />} />
        <Route exact path="/student/products" element={<Products />} />
        
      </Routes>
     
    </div>
  );
}

export default App;
