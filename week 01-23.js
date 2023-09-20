// this is a single-line javascript comment

/* define a variable and place
into it the http package (shared code) from node.js */

 let myhttp = require("http");

// use dot notation in JS to access an object and its methods(commands) and properties
// createServer() takes some arguments/parameters to make it provide a useful http server
//1. function (block of code) that will be run whenever the server receives an http request

let myserver = myhttp.createServer(
   function( myrequest, myresponse ){
     console.log( myrequest.url );

     let mytext;
     if ( myrequest.url  === "/home"){
       mytext = "home is where you make it. ";
     } else if (myrequest.url === "/heck") {
       mytext = "What the heck go to .../home.";
     }
     else 
       mytext = "nobody is home, try .../heck";

// writeHead() creates an http response header, including the status code (200 ok ), the content type
     myresponse.writeHead( 200, {"content-type" : "text/plain"} );

     myresponse.end ( mytext );
   }
);

// ask http to start listening on a tcp port for incoming http requests

//listen() takes 2 args 1: tcp port#, 2: string of the ip adress to listen (0.0.0.0)

myserver.listen( 8080, "0.0.0.0");

console.log ("server has started");


