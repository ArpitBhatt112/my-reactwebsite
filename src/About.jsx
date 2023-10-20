import React from "react";
 import { NavLink } from "react-router-dom";
 import Footer from "./Footer";
const About =() => {
    return (
        <>
    <section id="header" className="d-flex aling-items-center">
      <div className="container-fluid my-5 nav_bg">
    <div className="row">
        <div className = "col-10 mx-auto">
        <div className="row">
<div className="col-md-6 pt-5 mt-4 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">

    <h1>
       Welcome to About Page  <strong className="brand-name">CoderBoys</strong>
    </h1>
    <h2 className="my-3">
        We are the  Team Talented Developers for making Websites
    </h2>
    <div className="mt-3">
        <NavLink to="/contact" className="btn-get-started">
         Contact Now
        </NavLink>
    </div>
</div>

<div className="col-lg-6 mt-5 order-1 order-lg-2 header-img">
<img src ="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VifGVufDB8fDB8fHww" className="img-fluid animated" alt="home img" />
</div>
        <div/>

    </div>
</div>
</div>
    </div>
    </section>
    <Footer/>
        </>
    );
};
export default About;