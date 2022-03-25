# CryptoAPI

> A simple Cryptocurrency exchanges web application that use React.js as frontend framework and
> Node.js as backend server.

In home page(by default http://localhost:3000), you could see a list with the first ten exchanges with some high-level information (name, country, URL, logo, trust rank). By clicking the button, use would be directed to http://localhost:3000/profile/{id} and would see the detail(name, country, trust rank, logo, year of establishment, social media links, description, and a back-to-main-page button).

### To run the program

1. clone the repo
2. cd to server, run `npm install` and then `npm start`, the console would show `Server listening on 3002`
3. start another terminal page, cd to client, run `npm install` and then `npm start`
4. Go to http://localhost:3000 to see the result

### client

- src/components
  Manage all components that is used in page folder
- src/config  
  Includes frontend configuration such as routing, App.js (client entry point) is also put here
- src/page  
  Home is the component that would be render when current url = http://localhost:3000
  Profile is the component that would be render when current url = http://localhost:3000/profile/{id}
- src/styles  
  Manage all **css** file
- cypress  
  Manage all end to end testing file
  To start testing, cd to clent and type `./node_modules/cypress/bin/cypress open`
- jsconfig.json  
  set src as base url to make import statement cleaner and easier
- .env  
  File to store secret key, all arguments should add REACT*APP* as prefix in react project. Although .env suppose to not be submitted on github, this application doesn't contain confidential key.

### server

- index.js  
  Implement all backend logic(manage by express.js)
- /config  
  Manage all configuration file and routing url
- .env  
  Store the secret key required for backend such as database user:password

Home page Demo

Profile Page Demo
