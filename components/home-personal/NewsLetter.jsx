import React from "react";

function Newsletter() {
  return (
    <section className="my-skills section-padding">
      <div className="container">
        <div className="col-12 row bg-blue">
          <div className="col-lg-6 valign">
            <div className="cont">
              <h6 className="sub-title main-color mb-10">Let's Connect</h6>
              <div className="text">
                <h4 className="mb-30">
                  Are you a startup founder looking to build a high-performance
                  web or mobile application?
                </h4>
                <p>
                  Let’s connect! Subscribe to receive exclusive insights, expert
                  advice, and practical tips tailored to help your startup
                  thrive in the digital landscape.
                </p>
              </div>
            </div>
          </div>
          <div className="contact col-lg-6 valign">
            <div className="full-width">
              <form
                id="contact-form"
                className="form2"
                method="post"
                action="contact.php"
              >
                <div className="messages"></div>

                <div className="controls row">
                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Enter your email to start transforming your digital product"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="mt-30">
                      <button
                        type="submit"
                        className="butn butn-full butn-bord radius-30"
                      >
                        <span className="text">Get Started</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
