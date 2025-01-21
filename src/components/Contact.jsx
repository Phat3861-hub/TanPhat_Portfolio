import React from "react";
import { CONTACT } from "../constants";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-10">
      <h2 className="my-10 text-center text-4xl">Contact me</h2>
      <div className="grid lg:grid-cols-3 justify-center">
        <div className="">
          <p className="my-4">{CONTACT.address}</p>
          <a href="tel:+84369753861">{CONTACT.phoneNo}</a>
        </div>
        <div className="my-4">
          <a href="mailto:nguyentanphat03122004@gmail.com">
            nguyentanphat03122004@gmail.com
          </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <FaFacebook />
          <FaGithub />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default Contact;
