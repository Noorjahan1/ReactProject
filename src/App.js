
import './App.css';
import Home from "./home/home";
import Nav from "./Navbar/navbar";
import {
  Switch,
  Route
} from "react-router-dom";
import TableOne from './table1/table';
import TableTwo from './table2/table2';
import Provile from './context/profile';
import Profile from './profile/profile';
function App() {
  return (
    <>
 
     
     <Nav/>
    
    <Switch>
         
          <Route path="/home">
             <Provile>
            <Home />
            </Provile>
          </Route>
          
          <Route path="/table1">
            < TableOne/>
          </Route>
          
          <Route path="/profile">
          <Provile>
           <Profile/>
           </Provile>
          </Route>
          
            
          <Route path="/table2">
            < TableTwo/>
          </Route>
          
      </Switch>
   
    </>
   
  );
}

export default App;
