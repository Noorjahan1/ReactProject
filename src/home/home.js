import {React,useContext }from 'react';
import {Pro} from '../context/profile';
import {  
  Link
  } from "react-router-dom";

const Home = () => {
  const {hanndleUserEmail} = useContext(Pro);
    return ( 
    <>
    <div className="container">
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" name="email" placeholder="name@example.com" onChange={(e)=>{
    hanndleUserEmail(e)
  }}/>
</div>

<Link to="/profile" ><button className="btn btn-secondary" type="submit">Submit</button></Link> 
    </div>
    </>
    );
}
 
export default Home;


