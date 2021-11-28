import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/HomePage/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="/home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
     
    </BrowserRouter>
    </div>
  );
}

export default App;
