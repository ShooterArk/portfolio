import React from "react";

function About() {
  return (
    <section className="about-author section-padding">
      <div className="container with-pad">
        <div className="row lg-marg">
          {/* <div className="col-lg-5 valign">
            <div className="profile-img">
              <div className="img">
                <img src="/assets/imgs/header/p2.jpg" alt="" />
              </div>
              <span className="icon">
                <img src="/assets/imgs/resume/icon1.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/icon2.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/icon3.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/icon4.png" alt="" />
              </span>
            </div>
          </div> */}
          <div className="col-12 valign">
            <div className="cont">
              <h6 className="sub-title main-color mb-30">About Me</h6>
              <div className="text" style={{position: 'relative'}}>
                <h4 className="mb-30">
                  Crafting Seamless Digital Experiences with Expertise in{" "}
                  {/* <span className="fw-200">
                    Front-End and Full-Stack Development
                  </span> */}
                  Front-End and Full-Stack Development
                </h4>
                <p>
                  With over a decade of experience in the tech industry, I
                  specialize in building high-performance web and mobile
                  applications tailored to the unique needs of startups and
                  enterprises. My journey has taken me from developing intuitive
                  user interfaces with React and React Native to leading complex
                  full-stack projects that drive growth and innovation. I thrive
                  on solving challenges and delivering solutions that meet and
                  exceed client expectations. Whether you require front-end
                  precision or full-stack expertise, I’m here to help you
                  succeed in the digital space.
                </p>
                <div
                  className="profile-img full-width"
                  style={{ position: 'absolute', top: "-9rem", borderWidth: 0, height: 480 }}
                >
                  <span className="icon">
                    <img src="/assets/imgs/tech/reactjs 1.svg" alt="" />
                  </span>
                  <span className="icon">
                    <img src="/assets/imgs/resume/icon2.png" alt="" />
                  </span>
                  <span className="icon">
                    <img src="/assets/imgs/tech/firebase.svg" alt="" />
                  </span>
                  <span className="icon">
                    <img src="/assets/imgs/tech/ts.svg" alt="" />
                  </span>
                </div>

                <div className="numbers mt-50">
                  <div className="row lg-marg">
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">100%</h3>
                          <h6 className="p-color sub-title">
                            Clients Satisfaction
                          </h6>
                        </div>
                        <div className="ml-auto">
                          <div className="icon-img-40">
                            <img src="/assets/imgs/arw0.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">50</h3>
                          <h6 className="p-color sub-title">
                            Projects Completed
                          </h6>
                        </div>
                        <div className="ml-auto">
                          <div className="icon-img-40">
                            <img src="/assets/imgs/arw0.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
