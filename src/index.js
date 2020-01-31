import React from "react";
import ReactDOM from "react-dom";
import axios from "axios"

import App from "./App";

// Health Check
async function healthCheck(){
 try {
     const response = await axios.get("http://localhost:5000/ping")
     console.log("we good")
 } catch (error) {
     console.log(error)
 }
}
healthCheck()

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
