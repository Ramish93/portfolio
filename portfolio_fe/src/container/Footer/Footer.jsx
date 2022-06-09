import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client, urlFor } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setisFormSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setisFormSubmitted(true);
    });
    setformData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee and chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="syed.hassan@appliedtechnology.se" className="p-text">
            syed.hassan@appliedtechnology.se
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +46 737 723 123" className="p-text">
            +46 737 723 123
          </a>
        </div>
      </div>
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input
            type="text"
            className="p-text"
            placeholder="Your name"
            value={name}
            name="name"
            onChange={handleChangeInput}
          />
        </div>
        <div className="app__flex">
          <input
            type="email"
            className="p-text"
            placeholder="Your email"
            value={email}
            name="email"
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            value={message}
            onChange={handleChangeInput}
            name="message"
          />
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>
          {loading ? "Sending.." : "Send"}
        </button>
      </div>
      {isFormSubmitted && (
        <div>
          <h3 className="head-text">Thanks For getting in touch with me!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
