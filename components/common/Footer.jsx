"use client";
import React, { useEffect, useRef, useState } from "react";
import CalendlyPopup from "../home-personal/Calendly";
import { Link } from "react-scroll";

function Footer() {
  const [rootElement, setRootElement] = useState(null);
  const rootRef = useRef(null);

  useEffect(() => {
    setRootElement(rootRef.current);
  }, []);

  return (
    <footer className="clean-footer crev" ref={rootRef}>
      <div className="container pb-40 pt-40 ontop">
        <div
          className="row justify-content-between"
          style={{ marginBottom: "5%" }}
        >
          <div className="col-lg-2">
            <div className="logo icon-img-100 md-mb80">
              <img src="/assets/imgs/Yawar-logo.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Contact</h6>
              <h6 className="p-color fw-400" style={{fontSize: 16, lineHeight: 1.5}}>
                Address 3rd Floor, Plaza 39, <br /> Westeria Road, Sector A Commercial, <br />
                DHA Phase 2, Islamabad, 45730, Pakistan.
              </h6>
              <h6 className="p-color fw-400 mt-20 mb-15" style={{fontSize: 16}}>
                <a href="#0">yawarshah.dev@gmail.com</a>
              </h6>
              {/* <a href="#0" className="underline">
                <span className="fz-22 main-color">+92 332 9262125</span>
              </a> */}
            </div>
          </div>
          <div className="col-lg-2 ">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Links</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <Link
                    to="about"
                    className="cursor-pointer"
                    smooth={true}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li className="mb-15">
                  <Link
                    to="services"
                    className="cursor-pointer"
                    smooth={true}
                    duration={500}
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <CalendlyPopup
                    text="Contact"
                    className="bg-transparent text-white border-0"
                    rootElement={rootElement}
                  />
                </li>
                <li className="rest social-icon d-flex align-items-center mt-20">
                  <span className="cursor-pointer">
                  <a
                    href="https://www.linkedin.com/in/yawar-shah-66925941"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-anim"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-lg-3">
            <div className="column subscribe-minimal">
              <h6 className="sub-title mb-30">Newsletter</h6>
              <div className="form-group mb-40">
                <input type="text" name="subscrib" placeholder="Your Email" />
                <button>
                  <span className="ti-location-arrow"></span>
                </button>
              </div>
              <ul className="rest social-icon d-flex align-items-center">
                <li className="hover-this cursor-pointer">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>

                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        <div className="pt-30 pb-30 mt-30 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">© 2024 Syed Yawar Shah. All rights reserved. | yawarshah.com</p>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
