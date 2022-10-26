import React from "react";
import { Link, NavLink } from "react-router-dom";
import Lottie from "lottie-react";
import logoAnimation from "../assets/animations/logoAnimation.json";
import img from "../assets/images/logo-title.jpg";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <div>
      <div className="shadow-lg flex items-center justify-between md:px-20">
        <div>
          <Link to='/' className=" flex items-center">
            <Lottie
              className="mt-5 mr-2"
              style={{ width: "50px" }}
              animationData={logoAnimation}
            />
            <img src={img} alt="" />
          </Link>
        </div>
        <div className=" flex ">
          <div>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/home"
          >
            Home
          </NavLink>
          <NavLink className="ml-5" to="/courses">
            Courses
          </NavLink>
          <NavLink className="ml-5" to="/FAQ">
            FAQ
          </NavLink>
          <NavLink className="ml-5" to="/blog">
            Blog
          </NavLink>
          <NavLink className="ml-5" to="/login">
            Login
          </NavLink>
        </div>
          <input type="checkbox" className="toggle ml-5"/>
        </div>
      </div>
    </div>
  );
};

export default Nav;