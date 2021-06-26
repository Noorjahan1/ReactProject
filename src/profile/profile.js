import React, { useContext } from 'react';
import {Pro} from '../context/profile';
const Profile = () => {
    const {user} = useContext(Pro);
    return (
        <>
        <div className="container">
        
        <div className="row">
            <div className="col-lg-12">
                email
                
                <p>{user.email}</p>
                
            </div>
           

        </div>
        </div>
        </>
    );
}

export default Profile;