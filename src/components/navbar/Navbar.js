import React from "react";
import "../../App.css";
import "./Navbar.css";
function Navbar() {
  let bar = document.querySelector(".bar");
  let menu = document.querySelector(".menu");
  const handleBar = () => {
    bar.classList.toggle("fa-times");
    menu.classList.toggle("active");
  };
  const navlinkHandler = () => {
    bar.classList.remove("fa-times");
    menu.classList.remove("active");
  };

  return (
    <>
      <header id="header">
        <nav>
          <div className="container flex justify-between items-center">
            <div className="brand">
              <i className="fas fa-heartbeat"></i> <span>medicare.</span>
            </div>
            <div id="menu" className="menu">
              <ul className="flex">
                <li>
                  <a className="navlink" onClick={navlinkHandler} href="#hero">
                    Home
                  </a>
                </li>
                <li>
                  <a className="navlink" onClick={navlinkHandler} href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="navlink"
                    onClick={navlinkHandler}
                    href="#services"
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a
                    className="navlink"
                    onClick={navlinkHandler}
                    href="#doctor"
                  >
                    Doctors
                  </a>
                </li>
                <li>
                  <a className="navlink" onClick={navlinkHandler} href="#book">
                    Book
                  </a>
                </li>
                <li>
                  <a
                    className="navlink"
                    onClick={navlinkHandler}
                    href="#reviews"
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <a className="navlink" onClick={navlinkHandler} href="#blog">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div
              id="menu-bar"
              onClick={handleBar}
              className="fas fa-bars bar"
            ></div>
          </div>
        </nav>
      </header>

      <section id="hero">
        <div className="container flex justify-center items-center wrap">
          <div className="hero-img flex-1">
            <img src="/img/heroSvg.svg" alt="" />
          </div>
          <div className="hero-text flex-1">
            <h1 className="heading pb">Stay safe, stay healthy</h1>
            <p className="para">
              {" "}
              nec sagittis aliquam malesuada bibendum arcu vitae elementum
              curabitur vitae nunc sed velit dignissim sodales ut eu sem integer
              vitae justo eget magna fermentum iaculis{" "}
            </p>
            <a href="/" className="btn">
              {" "}
              contact now
              <i className="fas fa-angle-right"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
