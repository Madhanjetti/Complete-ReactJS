import React from 'react';
import { useParams,useLocation} from 'react-router-dom';

const UserProfile = () => {
    //Path params
    const route=useParams();
    //Query Params
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    const page = queryParams.get('page');
    return (
        <div>
            <h1>UserProfile Data using Path and Query Paramas</h1>
            <h1>Userprofile  Id: {route.id}</h1>
            <h1>Userprofile Name:{route.name}</h1>
            <h1>Userprofile category:{category}</h1>
            <h1>Userprofile Page:{page}</h1>
        </div>
    );
 
};

export default UserProfile;


//path parameter link--- http://localhost:5173/UserProfile/100/jhon
//Query parameter link-- http://localhost:5173/UserProfile/100/jhon?page=250&category=%22same%22
