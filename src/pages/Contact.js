import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
           Having an issue,Feel free to contact us!
          </p>
          <p className="mt-3">
            <BiMailSend /> : 22bcs039@iiitdwd.ac.in
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 1234567891
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
