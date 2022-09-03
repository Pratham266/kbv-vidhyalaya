import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Classname from "./components/Classname";
import Gallary from "./components/Gallery";
import Teachers from "./components/Teachers";
import Contact from "./components/Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
function App() {
  return (
          <>
          <Router>
            <Navbar/>
            <Routes>
            <Route exact path="/" element={<Home />} ></Route>
            <Route exact path="/about" element={<About />} ></Route>
            <Route exact path="/classname" element={<Classname/>} ></Route>
            <Route exact path="/gallery" element={<Gallary/>} ></Route>
            <Route exact path="/teachers" element={<Teachers/>} ></Route>
            <Route exact path="/contact" element={<Contact/>} ></Route>
            <Route exact path="/page1" element={<Page1/>} ></Route>
            <Route exact path="/page2" element={<Page2/>} ></Route>
            </Routes>
          </Router>
       </>
  );
}
export default App;
