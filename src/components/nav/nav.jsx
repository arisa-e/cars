import React from 'react';
import emblem from "../../assets/img/emblem.jpg"
import "../../styles/nav.css"

const Nav = () => {
  return (
      <nav className="nav">
          <div className="nav-top">
              <div className="nav-item">
                <h2>TRISTAR</h2>
              </div>
              <div className="nav-item">
                  <img src={emblem} alt="navimg" className="nav-img" />
              </div>
              <div className="nav-item">
                  <span>enjoy views</span>
              </div>
              </div>
              <div className="nav-button">
                  <h3 className="nav-item">S-Class</h3>
                  <h3 className="nav-item">G-Class</h3>
                  <h3 className="nav-item">E-Class</h3>
                  <h3 className="nav-item">C-Class</h3>
                  <h3 className="nav-item">B-Class</h3>
                  <h3 className="nav-item">A-Class</h3>
              </div>
      </nav>
    );
};

export default Nav;
