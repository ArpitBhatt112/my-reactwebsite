import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import Footer from "./Footer";


const Home=() => {
return (    
    <>
    <section id="header" className="d-flex aling-items-center">
      <div className="container-fluid my-5 ">
    <div className="row">
        <div className = "col-10 mx-auto">
        <div className="row">
<div className="col-md-6 pt-5  mt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">

    <h1>
        Grow your business with <strong className="brand-name">CoderBoys</strong>
    </h1>
    <h2 className="my-3">
        We are the  Team Talented Developers for making Websites
    </h2>
    <div className="mt-3">
        <NavLink to="service" className="btn-get-started">
            Get Started
        </NavLink>
    </div>
</div>

<div className="col-lg-6 mt-5 order-1 order-lg-2 header-img">
<img src ="https://plus.unsplash.com/premium_photo-1680807869379-435766727cdb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYnxlbnwwfHwwfHx8MA%3D%3D" className="img-fluid animated" alt="home img" />
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
export default Home;