'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

function Clients() {
  const swiperOptions = {
    speed: 600,
    loop: true,
    slidesPerView: 5,
    spaceBetween: 40,
    centeredSlides: true,
    breakpoints: {
      // when window width is >= 400px
      400: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 80,
        centeredSlides: false,
      },
      // when window width is >= 640px
      640: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false,
      },
      // when window width is >= 768px
      600: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
      },
      // when window width is >= 1200px
      1000: {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 40,
        centeredSlides: false,
      },
    },
  };
  return (
    <section className="clients-carso in-circle section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-80">
              <h3>
                We&apos;re proud to work with <br /> a{' '}
                <span className="opacity-7">diverse range of companies.</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="swiper5" data-carousel="swiper">
          <Swiper
            {...swiperOptions}
            id="content-carousel-container-unq-clients"
            className="swiper-container"
            data-swiper="container"
          >
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/assets/imgs/svgs/narchie.svg" alt="narchie" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/assets/imgs/svgs/hit.svg" alt="hit" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/assets/imgs/svgs/datacakes-ai.svg" alt="datacakes" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/assets/imgs/svgs/kleta.svg" alt="kleta" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/assets/imgs/svgs/contrax.svg" alt="contrax" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/assets/imgs/svgs/go-farm-yourself.svg" alt="go-farm-yourself" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/assets/imgs/svgs/squadra.svg" alt="squadra" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/assets/imgs/svgs/welltime.svg" alt="welltime" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="sec-bottom mt-100">
          <div className="main-bg d-flex align-items-center">
            <h6 className="fz-14 fw-400">
              More than <span className="fw-400"> 200+ companies</span>
              trusted us worldwide
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
