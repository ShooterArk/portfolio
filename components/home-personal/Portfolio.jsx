'use client';
import React, { useEffect } from 'react';

function Portfolio() {
  function Playing() {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll('.cards .card-item');
    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: 'center center',
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: 'bottom bottom',
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: '50% ' + (lastCardST.start + stickDistance),
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'center center',
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: 'none',
        animation: scaleDown,
        toggleActions: 'restart none none reverse',
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
                href="/portfolio-grid"
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
                      <a href="/portfolio-grid" className="tag">
                        Figma
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Web Design
                      </a>
                    </div>
                    <h4>Contrax</h4>
                  </div>
                  <div>
                    <p>
                      We&apos;re a full stack firm that can help you from strategy to
                      launch, and anywhere in between.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/company-images/Contrax.png" alt="contrax" />
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
                      <a href="/portfolio-grid" className="tag">
                        Figma
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Web Design
                      </a>
                    </div>
                    <h4>HIT</h4>
                  </div>
                  <div>
                    <p>
                      We&apos;re a full stack firm that can help you from strategy to
                      launch, and anywhere in between.
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
                      <a href="/portfolio-grid" className="tag">
                        Figma
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Web Design
                      </a>
                    </div>
                    <h4>Squadra</h4>
                  </div>
                  <div>
                    <p>
                      We&apos;re a full stack firm that can help you from strategy to
                      launch, and anywhere in between.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/company-images/squadra.png" alt="squadra" />
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
                      <a href="/portfolio-grid" className="tag">
                        Figma
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Web Design
                      </a>
                    </div>
                    <h4>Datacakes</h4>
                  </div>
                  <div>
                    <p>
                      We&apos;re a full stack firm that can help you from strategy to
                      launch, and anywhere in between.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/company-images/datacakes.png" alt="datacakes" />
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
                      <a href="/portfolio-grid" className="tag">
                        Figma
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Web Design
                      </a>
                    </div>
                    <h4>Go Farm Yourself</h4>
                  </div>
                  <div>
                    <p>
                      We&apos;re a full stack firm that can help you from strategy to
                      launch, and anywhere in between.
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
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Figma
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Web Design
                      </a>
                    </div>
                    <h4>Kleta</h4>
                  </div>
                  <div>
                    <p>
                      We&apos;re a full stack firm that can help you from strategy to
                      launch, and anywhere in between.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/company-images/kleta.png" alt="kleta" />
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
                      <a href="/portfolio-grid" className="tag">
                        Figma
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Web Design
                      </a>
                    </div>
                    <h4>Narchie</h4>
                  </div>
                  <div>
                    <p>
                      We&apos;re a full stack firm that can help you from strategy to
                      launch, and anywhere in between.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/company-images/narchie.png" alt="narchie" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-bottom mt-100">
        <div className="main-bg d-flex align-items-center">
          <h6 className="fz-14 fw-400">
            More than <span className="fw-600"> 100+ companies&nbsp;</span>
            trusted us worldwide
          </h6>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
