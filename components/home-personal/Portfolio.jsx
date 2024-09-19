"use client";
import React, { useEffect } from "react";

function Portfolio() {
  function Playing() {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll(".cards .card-item");
    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: "center center",
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: "bottom bottom",
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: "50% " + (lastCardST.start + stickDistance),
      });

      ScrollTrigger.create({
        trigger: card,
        start: "center center",
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: "none",
        animation: scaleDown,
        toggleActions: "restart none none reverse",
      });
    });
  }
  useEffect(() => {
    Playing();

    // Clean up function
    return () => {
      // Dispose GSAP ScrollTrigger instances
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  return (
    <section className="work-card section-padding pb-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">My Portfolio</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Selected <span className="fw-200">Works.</span>
                </span>
              </h3>
            </div>
            {/* <div className="ml-auto vi-more">
              <a
                href=""
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div> */}
          </div>
        </div>
        <div className="cards">
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="" className="tag">
                        React Native
                      </a>
                      <a href="" className="tag">
                        Figma to React Native
                      </a>
                      <a href="" className="tag">
                        Real-Time Data Integration
                      </a>
                    </div>
                    <h4>HIT AI</h4>
                  </div>
                  <div>
                    <p>
                      Developed React Native layouts by translating Figma
                      designs and managed complex API integrations to display
                      real-time data in a user-friendly way. The goal was to
                      create a responsive, data-driven app experience that
                      caters to the needs of HitAI users.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/company-images/HIT.png" alt="hit" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="" className="tag">
                        React.js
                      </a>
                      <a href="" className="tag">
                        SaaS Platform
                      </a>
                      <a href="" className="tag">
                        User Onboarding
                      </a>
                    </div>
                    <h4>Datacakes AI</h4>
                  </div>
                  <div>
                    <p>
                      Improved the user onboarding experience and added new
                      features for the Cubie app using React.js. The
                      enhancements were aimed at driving growth for this
                      lightweight SaaS platform, which enables data owners to
                      share insights while maintaining data privacy.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img
                    src="/assets/imgs/company-images/datacakes.png"
                    alt="datacakes"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="" className="tag">
                        React Native
                      </a>
                      <a href="" className="tag">
                        SendBird Integration
                      </a>
                      <a href="" className="tag">
                        Algolia Search
                      </a>
                    </div>
                    <h4>Narchie</h4>
                  </div>
                  <div>
                    <p>
                      Developed the hybrid mobile app for Narchie, a social
                      marketplace for homeware, using React Native. Integrated
                      SendBird for messaging, Algolia for search, Redis for data
                      caching, and Retool for internal tools, providing an
                      optimized real-time marketplace experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img
                    src="/assets/imgs/company-images/narchie.png"
                    alt="narchie"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="" className="tag">
                        UI/UX
                      </a>
                      <a href="" className="tag">
                        React
                      </a>
                      <a href="" className="tag">
                        Web3 Integration
                      </a>
                      <a href="" className="tag">
                        Decentralized Finance (DeFi)
                      </a>
                    </div>
                    <h4>Contrax</h4>
                  </div>
                  <div>
                    <p>
                      Handled the front-end development using React, focusing on
                      UI/UX and Web3 integration for blockchain interactions.
                      Built an intuitive, scalable platform tailored for
                      decentralized finance (DeFi) users, ensuring smooth user
                      experiences.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img
                    src="/assets/imgs/company-images/Contrax.png"
                    alt="contrax"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="" className="tag">
                        MERN Stack
                      </a>
                      <a href="" className="tag">
                        Digital Transformation
                      </a>
                      <a href="" className="tag">
                        Stripe Integration
                      </a>
                    </div>
                    <h4>Kleta</h4>
                  </div>
                  <div>
                    <p>
                      Responsible for the architecture and full-stack
                      development using the MERN stack. Led the digital
                      transformation, data migration, and Stripe integration,
                      creating a scalable and efficient platform that supports
                      Kleta’s business growth.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img
                    src="/assets/imgs/company-images/kleta.png"
                    alt="kleta"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="" className="tag">
                        MERN Stack
                      </a>
                      <a href="" className="tag">
                        Full-Stack Web Development
                      </a>
                      <a href="" className="tag">
                        API Integration
                      </a>
                    </div>
                    <h4>Squadra</h4>
                  </div>
                  <div>
                    <p>
                      Responsible for developing both front-end and back-end
                      using the MERN stack. Created responsive user interfaces
                      and ensured efficient API integration for data management.
                      Focused on delivering a scalable web platform that
                      enhances collaboration and streamlines workflows, tailored
                      to Squadra's specific needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img
                    src="/assets/imgs/company-images/squadra.png"
                    alt="squadra"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="" className="tag">
                        AWS Amplify
                      </a>
                      <a href="" className="tag">
                        App Revamp
                      </a>
                      <a href="" className="tag">
                        Integrations (HubSpot, Pendo, Stripe)
                      </a>
                    </div>
                    <h4>Go Farm Yourself</h4>
                  </div>
                  <div>
                    <p>
                      Developed the initial MVP using the AWS Amplify stack and
                      later revamped the entire app. Integrated tools like
                      HubSpot, Pendo, and Stripe to optimize functionality,
                      focusing on scalability and improving the overall user
                      experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/company-images/gfy.png" alt="gfy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-bottom mt-100">
        <div className="main-bg d-flex align-items-center">
          <h6 className="fz-14 fw-400">
            More than <span className="fw-600"> 20+ companies&nbsp;</span>
            trusted us worldwide
          </h6>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
