import React from "react";
import "../../App.css";
import "./Blog.css";
function Blog({ data }) {
  return (
    <>
      <section id="blog">
        <h1 className="heading">
          our <span>blog</span>
        </h1>
        <div className="container flex justify-evenly items-center wrap">
          {data.map((items, index) => {
            return (
              <div
                className="blog-card flex justify-evenly items flex-column"
                key={index}
              >
                <div className="blog-img">
                  <img src={items.img} alt="blog" />
                </div>
                <div className="blog-meta-desc flex justify-between items-center flex-1">
                  <span>
                    <i className="fas fa-calendar"></i> 15 Jan,2022
                  </span>
                  <span>
                    <i className="fas fa-user"></i> by admin
                  </span>
                </div>
                <h2 className="blog-heading">{items.blogTitle}</h2>
                <p className="blog-detail">{items.text}</p>
                <a href="/" className="btn">
                  Read MOre <i className="fas fa-angle-right"></i>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Blog;
