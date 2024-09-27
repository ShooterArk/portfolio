"use client";
import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Testimonials() {
  const swiperOptions = {
    modules: [Navigation],
    slidesPerView: "auto",

    spaceBetween: 30,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: "auto",
      },
    },

    navigation: {
      nextEl: ".testim-modern .swiper-button-next",
      prevEl: ".testim-modern .swiper-button-prev",
    },
  };
  return (
    <section className="testim-modern section-padding sub-bg bord-top-grd bord-bottom-grd">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Testimonials</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Trusted <span className="fw-200">by Clients.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev">
                  <span className="ti-arrow-left"></span>
                </div>
                <div className="swiper-button-next">
                  <span className="ti-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="testim-swiper3 out-right"
          data-carousel="swiper"
          data-loop="true"
          data-space="30"
        >
          <Swiper
            {...swiperOptions}
            id="content-carousel-container-unq-testim"
            className="swiper-container"
            data-swiper="container"
          >
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <h6 className="sub-title mb-15">Design Quality</h6>
                  <div className="text">
                    <p>
                      “Yawar’s dedication and technical expertise were
                      impressive. His ability to tackle complex challenges
                      showcased his exceptional IT skills. Yawar’s contributions
                      were invaluable, and I look forward to working with him
                      again in the future. Thank you, Yawar, for ensuring the
                      success of this project. Well done!”
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div
                        className="img fit-img"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid white",
                          borderRadius: 100,
                        }}
                      >
                        {/* <img src="/assets/imgs/testim/t1.jpg" alt="" /> */}
                        <h4>NC</h4>
                      </div>
                    </div>
                    <div className="ml-20">
                      <h6 className="fz-18">Natalie C</h6>
                      {/* <span className="p-color opacity-8 fz-15 mt-5">
                        Envato Customer
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <h6 className="sub-title mb-15">Design Quality</h6>
                  <div className="text">
                    <p>
                      “Yawar’s team was communicative and willing to take
                      responsibility for any issues that came up during
                      development. We expect to work with them in the future
                      given they are now the most knowledgeable developers on
                      our application as they transition it over to us. ”
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div
                        className="img fit-img"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid white",
                          borderRadius: 100,
                        }}
                      >
                        <img
                          src="/assets/imgs/svgs/contrax.svg"
                          style={{ width: 60, height: 23 }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="ml-20">
                      <h6 className="fz-18">KJ Magill</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        Contrax
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <h6 className="sub-title mb-15">Design Quality</h6>
                  <div className="text">
                    <p>
                      “ Yawar and his team delivered good work on the short
                      engagement, I would work with them again.”
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div
                        className="img fit-img"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid white",
                          borderRadius: 100,
                        }}
                      >
                        <img
                          src="/assets/imgs/svgs/go-farm-yourself.svg"
                          style={{
                            width: 180,
                            height: 40,
                            transform: "translateX(36%)",
                            clipPath:
                              "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
                          }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="ml-20">
                      <h6 className="fz-18">Anish M.</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        Go Farm Yourself Inc
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <h6 className="sub-title mb-15">Design Quality</h6>
                  <div className="text">
                    <p>
                      “Once again Yawar has done an amazing job for us on the
                      Frontend Engineering.”
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                    <div
                        className="img fit-img"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid white",
                          borderRadius: 100,
                        }}
                      >
                        {/* <img src="/assets/imgs/testim/t1.jpg" alt="" /> */}
                        <h4>MC</h4>
                      </div>
                    </div>
                    <div className="ml-20">
                      <h6 className="fz-18">Monica C.</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        Numberly Inc
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
