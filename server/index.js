const express = require("express");
const cors = require("cors")
const axios = require("axios")
const corsOptions = require("./config/cors.js");
const urls = require('./config/urls.js');
require("dotenv/config");
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors(corsOptions));



/**
 * When frontend make get request to BACKEND_URL/api/home
 * axios send get request to coingecko api to get data 
 * and forward to client
 */
app.get("/api/home", async (req, res) => {    
  try {    
    const resp = await axios.get(urls.HOME_API);
    // if response is successful, filter top ten exchanges data
    if(resp.status === 200) {
      let i;
      let output = [];    
      for (i = 0; i < 10; i++) {        
        output.push(resp.data[i]);
      }  
      return res.json(output)      
      // if response status isn't 200, send error status back
    } else {
      res.sendStatus(resp.status);
    }
  } catch (err) {
    console.log(err);
  }
});

/**
 * When frontend make get request to BACKEND_URL/api/profile/:id
 * axios send get request to coingecko api to get data 
 * and forward to client
 */
app.get("/api/profile/:id", async (req, res) => {
  const id = req.params.id;
  try {        
    const resp = await axios.get(`${urls.PROFILE_API}/${id}`);    
    if(resp.status === 200) {            
      return res.json(resp.data)      
    } else {
      res.sendStatus(resp.status);
    }
  } catch (err) {
    console.log(err);
  }
});

// set app listen to port(default: http://localhost:3001)
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});