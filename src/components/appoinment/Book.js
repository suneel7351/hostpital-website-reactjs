import React, { useRef, useState } from "react";
import "../../App.css";
import "./Book.css";
import emailjs from "@emailjs/browser";
function Book() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });
  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: [e.target.value],
    }));
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mz3u8ma",
        "template_gv11kz7",
        form.current,
        "user_dZrQy01JgMAcijh5TK4HT"
      )
      .then(
        (result) => {
          setValues({ name: "", email: "", phone: "", date: "", message: "" });
          window.alert("submit successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section id="book">
        <h1 className="heading">
          <span>book</span> now
        </h1>
        <div className="container flex justify-center items-center wrap">
          <div className="book-img flex-1">
            <img src="/img/bookSvg.svg" alt="Book Now" />
          </div>
          <div className="book-form flex-1">
            <h1 className="heading">
              book <span>appointment</span>
            </h1>
            <form ref={form} onSubmit={sendEmail}>
              <div className="name">
                {" "}
                <input
                  className="inputField"
                  onChange={handleChange}
                  value={values.name}
                  placeholder="your name"
                  required
                  type="text"
                  name="name"
                />
              </div>
              <div className="email">
                <input
                  className="inputField"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="your email"
                  required
                  type="
                  email"
                  name="email"
                />
              </div>
              <div className="phone">
                <input
                  className="inputField"
                  onChange={handleChange}
                  value={values.phone}
                  placeholder="your number"
                  required
                  type="tel"
                  id="phone"
                  name="phone"
                />
              </div>
              <div>
                <input
                  className="inputField"
                  onChange={handleChange}
                  required
                  value={values.date}
                  placeholder="MM/DD/YYYY"
                  type="date"
                  name="date"
                />
              </div>
              <div className="message">
                <textarea
                  className="inputField"
                  onChange={handleChange}
                  value={values.message}
                  placeholder="message"
                  required
                  cols="30"
                  rows="5"
                  name="message"
                ></textarea>
              </div>
              <button value="send email" className="btn" type="submit">
                Book Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Book;
