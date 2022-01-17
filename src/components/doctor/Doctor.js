import React from "react";
import "../../App.css";
import "./Doctor.css";
function Doctor({ data }) {
  return (
    <>
      <section id="doctor">
        <h1 className="heading">
          our <span>Doctors</span>
        </h1>
        <div className="container flex justify-evenly items-center wrap">
          {data.map((items, index) => {
            return (
              <div
                className="doctor-card flex flex-column items-center justify-center"
                key={index}
              >
                <img src={items.img} alt="John Doe" />
                <strong className="para">
                  <p>{items.name}</p>
                </strong>
                <p className="para expert">Expert Surgeon</p>
                <span className="para">{items.email}</span>
                <div className="social-media flex justify-center items-center">
                  <a
                    href={items.facebook}
                    target="_blank"
                    className="fab fa-facebook-f"
                  ></a>
                  <a
                    href={items.linkdin}
                    target="_blank"
                    className="fab fa-linkedin"
                  ></a>
                  <a
                    href={items.insta}
                    target="_blank"
                    className="fab fa-instagram"
                  ></a>
                  <a
                    href={items.twitter}
                    target="_blank"
                    className="fab fa-twitter"
                  ></a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Doctor;
