import { Routes, Route, Router } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import "./App.css";
import Viewallships from "./Components/ViewAllships";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import CreateShip from "./Components/CreateShip";
import Navbar from "./Components/Navbar";
import Viewallschedules from "./Components/ViewAllSchedule";
import Login from "./Components/Login";
import DeleteShip from "./Components/DeleteShip";
import ViewallRoutes from "./Components/ViewAllRoutes";
import CreateRoute from "./Components/CreateRoute";
import DeleteRoute from "./Components/DeleteRoute";
function MyComponent() {
  const location = useLocation();




function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Router>
      <Routes>
     <Route path='/viewship' element = {<Viewallships/>}/> 
     <Route path = "/ship" element={<CreateShip/>}/>
     <Route path = "/viewschedule" element={<Viewallschedules/>}/>
     <Route path='/' element= {<Login/>}/>
     <Route path='/deleteship' element = {<DeleteShip/>}/>
     <Route path='/viewRoute' element = {<ViewallRoutes/>}/> 
     <Route path='/addRoute' element = {<CreateRoute/>}/> 
     <Route path='/deleteRoute' element = {<DeleteRoute/>}/> 
     <Route path='/viewSchedule' element = {<Viewallschedules/>}/> 
     </Routes>
     </Router>
       {/* <Viewallships/> */}
    </div>
  );
}
}

export default App;