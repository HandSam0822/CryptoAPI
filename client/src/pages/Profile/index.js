import {React, useEffect, useState} from 'react'
import ProfileCard from 'components/ProfileCard';
const axios = require("axios")

export const Profile = (props) => {  
    
  const [profileData, setProfileData] = useState({})
    useEffect(()=> {
      const getProfileData = async () => {
        let id = window.location.href.split('/').pop()
        const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
        const backend_url = `${BACKEND_URL}/api/profile/${id}`
        
        try {    
          const resp = await axios.get(backend_url);          
          const data = resp.data;                
          setProfileData(data)            
        } catch (err) {
          console.log(err);
        }
      };
        getProfileData();
    }, [])
    return (        
        <ProfileCard data={profileData} atHome={false} nextRoute={"/"}/>        
    );
  }
  
  