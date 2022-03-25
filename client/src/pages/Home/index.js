import {React, useEffect, useState} from 'react'
import ProfileCard from 'components/ProfileCard';
import {Row, Col} from "react-bootstrap"
const axios = require("axios")

export const Home = (props) => {  
    /**
     * Use
     */ 
    const [topTenExchange, setTopTenExchange] = useState([])        
    useEffect(()=> {      
      const getTopTenExchanges = async () => {
        const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
        const backend_url = `${BACKEND_URL}/api/home`
        try {    
          const resp = await axios.get(backend_url);          
          const data = resp.data;      
          setTopTenExchange(data)            
        } catch (err) {
          console.log(err);
        }
      };
      getTopTenExchanges()
    }, [])
            
    const cards = topTenExchange.map((item, index) =>
      <Col key={index} >      
        <ProfileCard data={item} atHome={true} nextRoute= {`profile/${item.id}`} />      
      </Col>
    );

    return (
      <Row xs={1} md={2} className="g-5">
        {cards}
      </Row>  
    );
  }
  
  