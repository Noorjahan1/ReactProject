import {React,useState,useEffect }from 'react';
import axios from 'axios';
const TableOne = () => {  
    const [user,setUser]=useState([]);
    
useEffect(() => {
    const users = async () => {
                   let res=await axios.get("https://jsonplaceholder.typicode.com/users");
                   setUser(res.data);
    };    
    users();
}, []);
    
 
    return (
        <>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">phone</th>
    </tr>
  </thead>
  <tbody>
  {user.map(u=>
   <tr key={u.id}>
      <th scope="row">{u.id}</th>
      <td>{u.name}</td>
      <td>{u.email}</td>
      <td>{u.phone}</td>
    </tr>)}
    
    
  </tbody>
</table>
        
        </>
    );
}

export default TableOne;