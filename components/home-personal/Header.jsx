'use client';
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import CalendlyPopup from './Calendly';
import { RootRefContext } from '../common/RootRefContext';

function Header() {
  const [rootElement, setRootElement] = useState(null);
  const rootRef = useContext(RootRefContext); 
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);

  useEffect(() => {
    loadBackgroudImages();
    setRootElement(rootRef.current);
  }, []);

  return (
    <div
      ref={rootRef} 
      className="header header-personal valign bg-img"
      data-background="/assets/imgs/hero-image.png"
      data-overlay-dark="2"
    >
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-7">
            <div className="caption">
              <h6 className="mb-15">
                <span>👋</span>{' '}Hey there!
              </h6>
              <h1 className="fw-700 mb-10">
                I&apos;m Syed <span className="main-color">Yawar Shah</span>
              </h1>
              <h3>A passionate Front-end developer</h3>
              <div className="row">
                <div className="col-lg-9">
                  <div className="text mt-30">
                    <p>
                    Dedicated to bringing your digital ideas to life. Whether you're a startup founder looking for a reliable developer or someone with an innovative idea ready to take the digital world by storm, I'm here to help you turn your vision into reality.
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-60">
                    <CalendlyPopup text="Get in touch" className="butn butn-md butn-bord radius-30" rootElement={rootElement} />
                    <div className="icon-img-60 ml-20">
                      <img
                        src="/assets/imgs/icon-img/arrow-down-big.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info d-flex align-items-center justify-content-end mt-100">
          {/* <div className="item">
            <h6 className="sub-title mb-10">Email :</h6>
            <span className="p-color">yawarshah.dev@gmail.com</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Phone :</h6>
            <span className="p-color">+2 456 (343) 24 45</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Address :</h6>
            <span className="p-color">5919 Trussville Pkwy, Birmingham</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
