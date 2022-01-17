import React from "react";
import "../../App.css";
import "./About.css";
function About() {
  return (
    <>
      <section id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>
        <div className="container flex justify-center items-center">
          <div className="about-img flex-1">
            <img src="/img/aboutSvg.svg" alt="Medicare." />
          </div>
          <div className="about-text flex-1">
            <h2 className="heading pb">We take care of your healthy life</h2>
            <p className="para pb">
              Lorem ipsum dolor sit amet. Est corrupti quisquam et sequi alias
              in ipsa quos. Non repudiandae totam ut doloribus commodi sed iste
              voluptatum qui voluptatibus corporis qui facere vero qui animi
              dicta et harum veniam. Quo sapiente reiciendis in dicta voluptatem
              sit voluptatibus iusto aut praesentium maxime non obcaecati sunt.
              Est dolores sapiente ut esse modi ea ratione velit est quibusdam
              odio eum facere quod.
            </p>
            <p className="para">
              Lorem ipsum dolor sit amet. Et molestias expedita ea porro enim
              perspiciatis fugiat vel enim laudantium sed rerum dolor. Non iusto
              dolor et eligendi internos in molestias
            </p>
            <a href="/" className="btn">
              Learn more <i className="fas fa-angle-right"></i>{" "}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
