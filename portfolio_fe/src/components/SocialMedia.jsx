import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsGithub onClick={() => window.open('https://github.com/Ramish93')}/>
      </div>
      <div>
        <BsLinkedin onClick={() => window.open('https://www.linkedin.com/in/syedramish/')}/>
      </div>
      <div>
        <BsInstagram onClick={() => window.open('https://www.instagram.com/?hl=en')}/>
      </div>
    </div>
  );
};

export default SocialMedia;
