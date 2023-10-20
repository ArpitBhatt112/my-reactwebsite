import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './Index.css';
import Home from "./Home.jsx";
import About from "./About"
import Contact from "./Contact";
import Service from "./Service"
import { Routes,Route} from "react-router-dom";
import Navbar from "./Navbar";
import Error from "./Error";

const App =() => {

return(
<>
<Navbar/>
<Routes>
<Route exact path="/" Component={Home}/>
<Route exact path="/about" Component={About}/>
<Route exact path="/service" Component={Service}/>
<Route exact path="/contact" Component={Contact}/>
<Route exact path="*" Component={Error}/>
</Routes>
</>
);
}; 
export default App;