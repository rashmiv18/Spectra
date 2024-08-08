import "./Homepage.css";
import ButtonBlue from "../components/ButtonBlue";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <div className="left-div">
        <h2 className="home-h2">WELCOME TO SPECTRA</h2>
        <img
          src="https://i.ibb.co/cYpRYxR/Screenshot-2023-11-23-131359.png"
          alt="logo-leaf"
          className="logo-leaf"
        />
        <h1 className="home-h1">Enhance your vision with us</h1>
        <Link to="/Vision"><div className="home-btn"><ButtonBlue text="Get Started" /></div></Link>
        
      </div>
      <div className="front-rect">Meet your Virtual eyes with Spectra.</div>
      <img
        className="front-girl"
        alt="girl"
        src="https://i.ibb.co/pzym1C3/Front-girl.png"
      />
    </div>
  );
}

export default Homepage;
