
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './Pages/Home';
import Frontpage from './Front/Frontpage';
import Edit from './module/Edit';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Add from './module/Add';
import Viewit from './module/Viewit';


function App() {
 
  return (
    <div className="app-container">
      <Router>

    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Frontpage/>}/>
      <Route exact path="/Home" element={<Home/>}/>
      <Route exact path="/Add" element={<Add/>}/>
      <Route exact path="/Edit/:id" element={<Edit/>}/>
      <Route exact path="/Viewit/:id" element={<Viewit/>}/>
    </Routes>

      </Router>
     
  
    </div>
  );
}

export default App;