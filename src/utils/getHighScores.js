import axios from "axios"

export async function getHighScores(){
    let highScores = [];
    try {
     const res = await axios.get("http://localhost:5000/api/v1/high-scores")
     highScores = res.data.highScores
    } catch (error) {
        console.log(error)
    }

    return highScores;
}