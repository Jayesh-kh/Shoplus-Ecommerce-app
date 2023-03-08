import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/Images/About us.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h4 className="text-justify mt-2">
            ShopPlus is an ecommerce company. we Have all kind Of product. We
            provide best home Delivery for our customers
          </h4>
        </div>
      </div>
    </Layout>
  );
};

export default About;
