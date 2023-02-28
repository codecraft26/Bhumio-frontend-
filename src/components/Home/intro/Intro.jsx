import React from "react";
import intopic from "../intro.png";
import './intro.css'

const Intro = () => {
  return (
    <div className="container header-section flex">
      <div className="header-left">
        <h1>Bhumio Enter the world of movies and TV shows</h1>
        <p>
          UsabilityHub is a remote user research platform that takes the
          guesswork out of design decisions by validating them with real users.
        </p>
      </div>


        <div className="header-right">
            <img src={intopic} alt="IMDb logo"/>

            </div>
    
    </div>
  );
};

export default Intro;
