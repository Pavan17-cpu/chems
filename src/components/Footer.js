import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="row justify-content-center footer-content">
          <div className="col-md-6">
            <div className="div text-center">
              <p style={{ color: "white", fontWeight: "bold" }}>
                Â© 2025 All Rights Reserved | KSSB CHEMICALS PVT LTD
              </p>
              <hr />

              <div className="d-flex justify-content-between px-2">
                <FaFacebook className="footer-icons" />
                <FaInstagram className="footer-icons" />
                <FaMailBulk className="footer-icons" />
                <FaLinkedinIn className="footer-icons" />
                <FaGithub className="footer-icons" />
              </div>

              <hr />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
