const express = require("express");
const cors = require("cors")
const axios = require("axios")
require("dotenv/config")


const app = express();
const PORT = process.env.PORT || 3001;
const whitelist = ["http://localhost:3000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))


app.get("/api/home", async (req, res) => {
  const url = "https://api.coingecko.com/api/v3/exchanges"  
  try {    
    const resp = await axios.get(url);    
    if(resp.status === 200) {
      // const data = resp.data.slice(0, 10);    
      let data;
      let i;
      let output = [];
      
      for (i = 0; i < 10; i++) {
        data = resp.data[i];
        output.push(resp.data[i]);
      }  
      return res.json(output)
      
    } else {
      res.sendStatus(resp.status);
    }
  } catch (err) {
    console.log(err);
  }
});


app.get("/api/profile/:id", async (req, res) => {
  const id = req.params.id;
  const url = `https://api.coingecko.com/api/v3/exchanges/${id}`  
  try {    
    const resp = await axios.get(url);    
    if(resp.status === 200) {            
      return res.json(resp.data)      
    } else {
      res.sendStatus(resp.status);
    }
  } catch (err) {
    console.log(err);
  }
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});