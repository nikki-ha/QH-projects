import React from "react";
import '../styles/home.css';

const HomeScreen = () => {


  const handleClick = () => {
    alert("yo auntie");
  };

    return (
        <div className="home-screen">
            <h2 id="welcome-text">Welcome</h2>
            <p id="mission-statement">General Mission Statement.</p>
            <button type="button" onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default HomeScreen;