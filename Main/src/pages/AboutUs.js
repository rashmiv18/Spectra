import React from "react";
import "./AboutUs.css";
import AboutCard from "../components/AboutCard";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <div className="abt-div">
      <p className="abt-top-txt">
        "Spectra is a project Empowering Interaction Through Intelligent Recognition.
        We aimed to create a platform that goes beyond conventional user interfaces, 
        allowing seamless interaction with technology through advanced recognition
        capabilities.It provides features like face recognition, object recognition,
        text recognition and voice navigation that is helpful for visually impaired peoples."
      </p>
      <img
        src="https://i.ibb.co/cYpRYxR/Screenshot-2023-11-23-131359.png"
        alt="illustration"
        className="abt-logo-leaf"
      />
      <hr className="gold-hr" />
      <AboutCard
        src="https://i.ibb.co/x5XKLKV/Eyes-rafiki-1.png"
        h2="Face and Object Recognition"
        p="With a single click of button, get to hear what your camera captures.
          Also detect the age, gender and emotions of people."
      />
      <hr className="gold-hr" />
      <div className="box-r">
        <img
          src="https://i.ibb.co/RDr3Tq7/Search-pana-1.png"
          alt="illustration"
          className="abt-imgrec"
        />
        <div>
          <h2 className="abt-blue-h">Real time Text Recognition</h2>
          <p className="abt-disc">
            Make reading in real life much more easier and independent with the
            Read Text feature. It identifies and reads everything that comes in
            your camera frame.
          </p>
          <br />
        </div>
      </div>
      <hr className="gold-hr" />
      <AboutCard
        src="https://i.ibb.co/XsDHgDb/Voice-control-rafiki-1.png"
        h2="Voice Navigation"
        p="Navigate to any page of the site with the following simple commands.
            Click on the logo in the navigation bar to start and click again to
            stop listening."
      />
      <h2 className="commands">COMMANDS</h2>
      <ul className="abt-ul">
        <li>
          <span>Home</span> : to navigate to the home page
        </li>
        <li>
          <span>Vision</span> : to navigate to the vision page
        </li>
        <li>
          <span>Face</span> : to navigate to the face recognition page
        </li>
        <li>
          <span>Object</span> : to navigate to the object recognition page
        </li>
        <li>
          <span>Read</span> : to navigate to the read text page
        </li>
        <li>
          <span>About</span> : to navigate to the about us page{" "}
        </li>
      </ul>
      <Footer />
    </div>
  );
}

export default AboutUs;
