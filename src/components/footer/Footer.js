import React from "react";
import "../../App.css";
import "./Footer.css";
function Footer() {
  const icon = (
    <i className="fas fa-angle-right" style={{ color: "var(--green)" }}></i>
  );
  return (
    <>
      <section id="footer">
        <footer>
          <div className="container flex justify-evenly wrap gap">
            <div className="quick-links flex flex-column justify-center gap">
              <h1 className="footer-heading">quick links</h1>
              <a href="#hero">
                {icon}
                <span>Home</span>
              </a>
              <a href="#about">
                {icon}
                <span>About</span>
              </a>
              <a href="#services">
                {icon}
                <span>Services</span>
              </a>
              <a href="#doctor">
                {icon}
                <span>Doctors</span>
              </a>
              <a href="#book">
                {icon}
                <span>book</span>
              </a>
              <a href="#reviews">
                {icon}
                <span>reviews</span>
              </a>
              <a href="#blog">
                {icon}
                <span>blog</span>
              </a>
            </div>
            <div className="our-services flex flex-column justify-center gap">
              <h1 className="footer-heading">services</h1>
              <span>{icon} dental care</span>
              <span>{icon} massage therapy</span>
              <span>{icon} cardiology</span>
              <span>{icon} diognosis</span>
              <span>{icon} surgery</span>
            </div>
            <div className="contact-info flex flex-column justify-center gap">
              <h1 className="footer-heading">contact us</h1>
              <span>
                <i className="fas fa-phone"></i> <span>+123-456-7890</span>
              </span>
              <span>
                <i className="fas fa-phone"></i> <span>+123-456-7890</span>
              </span>
              <span>
                <i class="fas fa-envelope-open-text"></i>{" "}
                <span>support@gmail.com</span>
              </span>
              <span>
                <i class="fas fa-envelope-open-text"></i>{" "}
                <span>medicare@gmail.com</span>
              </span>
              <span>
                <i class="fas fa-map-marker-alt"></i>{" "}
                <span>Noida,UP-204569</span>
              </span>
            </div>
            <div className="follow-us flex flex-column justify-center gap ">
              <h1 className="footer-heading">follow us</h1>
              <span>
                <i className="fab fa-facebook-f"></i>
                <span>facebook</span>
              </span>
              <span>
                <i className="fab fa-instagram"></i>
                <span>instagram</span>
              </span>
              <span>
                <i className="fab fa-linkedin"></i>
                <span>linkedin</span>
              </span>
              <span>
                <i className="fab fa-twitter"></i>
                <span>twitter</span>
              </span>
            </div>
          </div>
          <p className="text-center" id="copy-right">
            &copy;medicare.com all right reserve
          </p>
        </footer>
      </section>
    </>
  );
}

export default Footer;
