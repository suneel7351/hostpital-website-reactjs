import React from "react";
import About from "./components/about/About";
import Book from "./components/appoinment/Book";
import Blog from "./components/blog/Blog";
import Doctor from "./components/doctor/Doctor";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Quality from "./components/quality/Quality";
import Review from "./components/reviews/Review";
import Services from "./components/services/Services";
import Data from "./Data/db.json";
function App() {
  return (
    <>
      <Navbar />
      <Quality data={Data.quality} />
      <Services data={Data.services} />
      <About />
      <Doctor data={Data.ourDoctors} />
      <Book />
      <Review data={Data.reviews} />
      <Blog data={Data.blog} />
      <Footer />
    </>
  );
}

export default App;
