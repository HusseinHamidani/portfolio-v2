import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './component/Footer';
import Home from './component/Home';
import Navbar from './component/Navbar';
import './style/style.css';
function App() {
     const state = useSelector((state) => state);
     return (
          <div className={state}>
               <Router>
                    <Navbar />
                    <Routes>
                         <Route exact path='/' element={<Home />}></Route>
                    </Routes>
                    <Footer />
               </Router>
          </div>
     );
}

export default App;
