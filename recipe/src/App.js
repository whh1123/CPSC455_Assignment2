import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Create from "./pages/Create"
import About from "./pages/About"
import Footer from "./components/Footer";
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';

function App() {
  
  
  return (

    <Router>
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Create" element={<Create />} />
      <Route path="/About" element = {<About />}/>
      
      </Routes>
      <Footer />
    </div>
    </Router>
    
  );
}

export default App;
