import React from "react";
import Courosel from "../components/Courosel";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />

      {/* Introduction Section */}
      <div
        className="introduction flex-with-center"
        style={{ backgroundImage: `url('./home.svg')` }}
      >
        <div>
          <h1 data-aos="fade-up">KSSB</h1>
          <h1 data-aos="fade-up">CHEMICALS PVT LTD</h1>

          <div className="intro-content d-flex justify-content-between">
            <p>BULK CHEMICAL SUPPLIERS</p>
            <button className="primary-button font-bold">
              <a href="#courosel">Get Quotation</a>
            </button>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div
        className="about-section flex-with-center"
        style={{ backgroundImage: `url('./home.svg')` }}
      >
        <h1 className="text-center font-bold animated-heading" data-aos="fade-up">
          ABOUT US
        </h1>
      </div>

      {/* Vision & Mission Section */}
      <div
        className="vision-mission-section"
        style={{ backgroundImage: `url('./home.svg')` }}
      >
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-md-4">
              <div className="n-box2 bright-box p-5 font-bold" data-aos="fade-right">
                <h1>Our Vision</h1>
                <p>
                  Our vision is to be viewed as the best speciality chemical
                  company in India by enhancing value to our customers.
                </p>
              </div>
            </div>
          </div>

          <div className="row pt-5 justify-content-center">
            <div className="col-md-4">
              <img
                src="./vision.jpg"
                alt=""
                height="200"
                className="w-100"
                data-aos="fade-up"
              />
            </div>
          </div>

          <div className="row pt-5 justify-content-end">
            <div className="col-md-4">
              <div className="n-box2 bright-box p-5 font-bold" data-aos="fade-left">
                <h1>Our Mission</h1>
                <p>
                  We satisfy our customers by delivering results through quality
                  chemical products and services. Our desire to grow drives our
                  passion to win in the marketplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="devstack container my-5 n-box2 py-5">
        <div className="text-center">
          <h3 className="font-bold text-center">The Industries We Serve</h3>
          <hr />
          <img
            src="./industries.png"
            alt=""
            height="200"
            width="200"
            className="text-center"
          />
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="font-bold">
              <h3 className="font-bold">Industry Areas</h3>
              <hr />
              <p>Sugar</p>
              <p>Pulp and Paper</p>
              <p>Oilfield</p>
              <p>Automobiles</p>
              <p>Edible Oil</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="font-bold text-center">
              <h3 className="font-bold">Industry Areas</h3>
              <hr />
              <p>Food and Beverages</p>
              <p>Textiles</p>
              <p>Mineral Processing</p>
              <p>Pharma</p>
              <p>Steel</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="font-bold text-end">
              <h3 className="font-bold">Industry Areas</h3>
              <hr />
              <p>Distillery</p>
              <p>Power</p>
              <p>Refineries</p>
              <p>Batteries</p>
              <p>Fertilizers</p>
            </div>
          </div>
        </div>
      </div>

    {/* Authorised Distributors */}
      <div
        className="distributors-section"
        style={{ backgroundImage: `url('./home.svg')` }}
      >
        <h1 className="text-center font-bold animated-heading" data-aos="fade-up">
          Authorised Distributors
        </h1>
        <div className="container py-5">
          <div className="row justify-content-center">
            {/* Distributor 1 */}
            <div className="col-md-4 text-center distributor-card">
     
  <h3 style={{ color: "white", fontWeight: "bold", textShadow: "0px 0px 6px rgba(0,0,0,0.6)" }}>
     Suzalkem Technologies PVT LTD
  </h3>
              <hr />
              <img
                src="https://www.environmental-expert.com/files/84532/images/84532_0_202112271059376522585_400.jpg"
                alt="Suzalkem Technologies"
              />
            </div>

            {/* Distributor 2 */}
            <div className="col-md-4 text-center distributor-card">
               <h3 style={{ color: "white", fontWeight: "bold", textShadow: "0px 0px 6px rgba(0,0,0,0.6)" }}>Fisher Scientific</h3>
              <hr />
              <img
                src="data:image/png;base64,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"
                alt="ABC Chemicals"
                style={{
                  width: "250px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  marginTop: "20px",
                }}
              />
            </div>

            {/* Distributor 3 */}
            <div className="col-md-4 text-center distributor-card">
               <h3 style={{ color: "white", fontWeight: "bold", textShadow: "0px 0px 6px rgba(0,0,0,0.6)" }}>SDFCL</h3>
              <hr />
              <img
                src="https://media.licdn.com/dms/image/v2/C4D0BAQHWbb40EYj6eQ/company-logo_200_200/company-logo_200_200/0/1659530579127?e=2147483647&v=beta&t=s0DbSs8MM57DbOUpSVszzYtaJOWFtvWpG3qW0ApFByw"
                alt="SDFCL"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
