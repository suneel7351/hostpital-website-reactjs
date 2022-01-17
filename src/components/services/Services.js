import React from "react";
import "./Services.css";
import "../../App.css";

function Services({ data }) {
  return (
    <>
      <section id="services">
        <h1 className="heading">
          Our <span>Services</span>{" "}
        </h1>
        <div className="container flex justify-evenly wrap">
          {data.map((items, index) => {
            return (
              <div
                className="service-card flex justify-evenly flex-column"
                key={index}
              >
                <div id="icon" className={items.logo}></div>
                <h2 className="service-heading">{items.heading}</h2>
                <p className="para">{items.text}</p>

                <a href="/" className="btn">
                  Learn More
                  <i className="fas fa-angle-right"></i>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Services;
