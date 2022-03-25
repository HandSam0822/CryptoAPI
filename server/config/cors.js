/**
 * To enable request between different ports,   
 * specify which port is allowed by creating a white list  
 * and send to cors package  
 */
const whitelist = ["http://localhost:3000"]
exports.corsOptions = {
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error("Not allowed by CORS"))
      }
    },
    credentials: true,
  }