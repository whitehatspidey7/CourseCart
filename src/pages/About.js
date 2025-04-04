import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        {/* 
            
             */}
        <div className="col-md-4">

        <p className="text-justify mt-2">
            
            Developers
          </p>
          <p className="text-justify mt-2">
            
            E.Nikhilesh 22bcs039
          </p>
          <p className="text-justify mt-2">
            
            Digant Singh 22bcs037
          </p>

          <p className="text-justify mt-2">
            
          E.Srikar 22bcs040
          </p>
          <p className="text-justify mt-2">
            
          Siddharth Singhania 22bcs0122 
          </p>


        </div>
      </div>
    </Layout>
  );
};

export default About;
