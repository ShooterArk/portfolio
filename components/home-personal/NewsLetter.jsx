"use client";
import { addUserMeta } from "@/helpers/firebaseHelpers";
import { validateEmail } from "@/helpers/utils";
import React, { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleAddUser = () => {
    if (email && !validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // add the email to storage.
    const userId = addUserMeta({ email: email });
    if (userId) {
      setSuccess(true);
    } else {
      alert("UserId is null " + userId);
    }
  };

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
              {!success ? (
                <div id="contact-form" className="form2">
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
                          onChange={(event) => {
                            console.log("Event changed");
                            setEmail(event?.target?.value ?? "Test");
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mt-30">
                        <button
                          className="butn butn-full butn-bord radius-30"
                          onClick={handleAddUser}
                        >
                          <span className="text">Get Started</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="valign">
                  <div className="cont">
                    <div className="text">
                      <h4 className="mb-30">
                        Thank you for subscribing! 🎉
                      </h4>
                      <p>You’re now connected with us and ready to receive exclusive insights, expert advice, and practical tips tailored to help your startup thrive in the digital landscape. Stay tuned – exciting content is coming your way!</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
