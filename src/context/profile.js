import React, { createContext,useState } from 'react';

export  const Pro=createContext();
const Provile = (props) => {
    const [user,setUser]=useState([]);
    const hanndleUserEmail=(e)=>{
        const {name,value}=e.target
        setUser(
            
            { 
               [name]:value,
            }
            
        )
       
        e.preventDefault();
    }
  
    return ( 
        <Pro.Provider value={{user,hanndleUserEmail}}>
           {props.children}
        </Pro.Provider>
     );
}
export default Provile;