import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/logo.png"
import "./main.css"

export default function Main() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <img className="shan" src={Logo} alt="..." />

      <a>
        {" "}
        <button onClick={() => navigate("/back")} className="btn">
          Lets go
        </button>
      </a>
    </div>
  );
}
