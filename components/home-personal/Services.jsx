import React from 'react';

function Services() {
  return (
    <section className="services-clas">
      <div className="container section-padding bord-bottom-grd pt-0">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">My specialized </span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Featured <span className="fw-200">Services.</span>
                </span>
              </h3>
            </div>
            {/* <div className="ml-auto vi-more">
              <a
                href="/page-services"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/3.png" alt="" />
              </div>
              <h5>Front-end Development</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">React</span>
                  <span className="tag">Responsive Design</span>
                  <span className="tag">UI/UX</span>
                </div>
                <p>
                  Crafting intuitive, responsive, and high-performing user interfaces using cutting-edge technologies like React and Next.js. I focus on delivering seamless user experiences that keep your audience engaged.
                </p>
              </div>
              {/* <a href="/page-services-details" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/4.png" alt="" />
              </div>
              <h5>Hybrid Mobile App Development</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">React Native</span>
                  <span className="tag">Cross-Platform Apps</span>
                  <span className="tag">Mobile UI/UX</span>
                </div>
                <p>
                  Developing cross-platform mobile applications using React Native that deliver native-like performance and aesthetics on both iOS and Android. Perfect for startups aiming to reach a broader audience quickly and efficiently.
                </p>
              </div>
              {/* <a href="/page-services-details" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/5.png" alt="" />
              </div>
              <h5>Full-Stack Development</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">MERN Stack</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">RESTful APIs</span>
                </div>
                <p>
                  Building scalable, robust backends with Node.js, Firebase, or Supabase and integrating them seamlessly with a high-performing front-end. From concept to deployment, I manage the entire development process to ensure your product is built for success.
                </p>
              </div>
              {/* <a href="/page-services-details" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
