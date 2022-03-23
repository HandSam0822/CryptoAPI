import {React, useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
const axios = require("axios")

export const Home = (props) => {  
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    useEffect(()=> {
    getTopTenExchanges()
    }, [])
    let navigate = useNavigate(); 

    const routeChange = (destination) =>{  
      let url =  `profile/${destination}`     
      navigate(url);
    }
    const [topTenExchange, setTopTenExchange] = useState([])        
    //name, country, URL, logo, trust rank
    const listItems = topTenExchange.map((item) =>
      <li key={item.id}>
        <div>{item.name}</div>
        <div>{item.country}</div>
        <div>{item.url}</div>
        <div><img src={item.logo} alt=""></img></div>
        <div>{item.trust}</div>
        <div>{item.trust_rank}</div>
        <button onClick={()=> routeChange(item.id)}>{item.name}</button>        
      </li>
    );


    const getTopTenExchanges = async () => {
      const backend_url = `${BACKEND_URL}/api/home`
      try {    
        const resp = await axios.get(backend_url);          
        const data = resp.data;      
        setTopTenExchange(data)  
        console.log(topTenExchange)    
      } catch (err) {
        console.log(err);
      }
    };


    return (
      <ul>{listItems}</ul>
    );
  }
  
  