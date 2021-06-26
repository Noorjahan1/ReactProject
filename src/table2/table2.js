import {React,useState,useEffect }from 'react';
import axios from 'axios';
const TableTwo = () => {  
    const [user,setUser]=useState([]);
    
useEffect(() => {
    const users = async () => {
                   let res=await axios.get("https://jsonplaceholder.typicode.com/users");
                   setUser(res.data);
                  
    };    
    users();
}, []);

let deleteUser=(id)=>{
   
  
     console.log("deleted id :",id );
     const Filtered=user.filter(
       (u,index,array)=>{
         return u.id!==id;
       }
     );
     setUser(Filtered)

}
 
    return (
        <>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">phone</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
  {user.map(u=>
   <tr key={u.id}>
      <th scope="row">{u.id}</th>
      <td>{u.name}</td>
      <td>{u.email}</td>
      <td>{u.phone}</td>
      <td><button className="btn btn-danger" onClick={()=>{deleteUser(u.id)}}>Delete</button></td>
    </tr>)}
    
    
  </tbody>
</table>
        
        </>
    );
}

export default TableTwo ;