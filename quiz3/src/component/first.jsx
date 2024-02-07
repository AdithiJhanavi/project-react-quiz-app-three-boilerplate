import React from "react";
import "./first.css"
import { Link } from "react-router-dom";

export default function Home(){

  return(
    <div className="main">
      <h3 className="heading">Quiz App</h3>
      <Link to="play-quiz" className="btn">
        <button className="bt">Play</button>
      </Link>
    </div>
  )
}