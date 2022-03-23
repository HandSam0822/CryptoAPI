import {React, useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";

const axios = require("axios")

export const Profile = (props) => {  
    let id = window.location.href.split('/').pop()
    const [profileData, setProfileData] = useState({})
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    
    let navigate = useNavigate(); 
    const routeChange = (destination) =>{       
      navigate(destination);
    }
    const getProfileData = async () => {
        const backend_url = `${BACKEND_URL}/api/profile/${id}`
        try {    
          const resp = await axios.get(backend_url);          
          const data = resp.data;      
          console.log(data)
          setProfileData(data)            
        } catch (err) {
          console.log(err);
        }
      };

    useEffect(()=> {
        getProfileData();
    }, [])
    return (
        <div>
        <div>Name: {profileData.name}</div>
        <div>Country: {profileData.country}</div>
        <div>Trust: {profileData.trust_score}</div>
        <div>Trust rank: {profileData.trust_rank}</div>
        <div>Logo: <img src={profileData.image} alt=""></img></div>
        <div>year of establishment: {profileData.year_established}</div>
        <div>social media links: {profileData.url}</div>
        <div>description: {profileData.description}</div>
        <button onClick={()=> {routeChange("/")}}>back-to-main-page</button>
        </div>      
    );
  }
  
  