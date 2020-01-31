 import React, {useContext, useEffect} from "react"
 import Axios from "axios"
 import {GameContext} from "../state/context"

 export default function useHighScores(){
    const {highScores, setHighScores} = useContext(GameContext);

    Axios.get("http://localhost:5000/api/v1/high-scores").then(res=>console.log(res.data.highScores ))
 }