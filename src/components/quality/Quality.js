import React from "react";
import "../../App.css";
import "./Quality.css";
function Quality({ data }) {
  return (
    <>
      <section id="quality">
        <div className="container quality-card justify-evenly flex items-center wrap">
          {data.map((items) => {
            return (
              <div
                className="quality-card flex flex-column justify-evenly items-center"
                key={items.number}
              >
                <div className={items.logo}></div>
                <h2 className="heading">{items.number}+</h2>
                <p className="para">{items.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Quality;
