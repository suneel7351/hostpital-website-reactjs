import React, { useState } from "react";
import "../../App.css";
import "./Review.css";
function Review({ data }) {
  return (
    <>
      <section id="reviews">
        <h1 className="heading">
          patients <span>reviews </span>
        </h1>
        <div className="container flex justify-evenly wrap items-center">
          {data.map((items, index) => {
            return (
              <div
                className="review-card flex flex-column items-center text-center"
                key={index}
              >
                <img src={items.img} alt="john doe" />
                <strong className="para">
                  <p>{items.name}</p>
                </strong>
                <div className="stars para text-center">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <p className="para text-center">{items.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Review;
