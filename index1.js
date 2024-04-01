//1)import json-server
const jsonServer = require('json-server');


//2)create json-server
const registrationServer = jsonServer.create()


//3)create a connection to db.json. it uses a method named router
const router = jsonServer.router('db.json');


//4)create a middleware 
const middleware = jsonServer.defaults();


//5)use this middleware
registrationServer.use(middleware)
registrationServer.use(router)


const port = 5000;

registrationServer.listen(port,()=>{
    console.log(`server is up and running in port ${port}`);
})