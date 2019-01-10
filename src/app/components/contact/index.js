import React, { Component } from "react";
import SideBar from "../right-sidebar";
import BreadCrumbs from "../breadcrumbs";

class Contact extends Component {
  state = {};
  render() {
    return (
      <>
        <BreadCrumbs link="contact" page="Контакты" />
        <section class="block-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <h3>Contact Us</h3>
                <p>
                  Lumbersexual meh sustainable Thundercats meditation kogi.
                  Tilde Pitchfork vegan, gentrify minim elit semiotics non
                  messenger bag Austin which roasted Lumbersexual meh
                  sustainable Thundercats meditation kogi. Tilde Pitchfork
                  vegan, gentrify minim elit semiotics non messenger bag Austin
                  which roasted
                </p>

                <div class="widget contact-info">
                  <div class="contact-info-box">
                    <div class="contact-info-box-content">
                      <h4>News247 Webagency</h4>
                      <p>Hungry Center, 3021 Horizon Circle</p>
                    </div>
                  </div>

                  <div class="contact-info-box">
                    <div class="contact-info-box-content">
                      <h4>Mail Us</h4>
                      <p>contact@cornike.com.uk</p>
                    </div>
                  </div>

                  <div class="contact-info-box">
                    <div class="contact-info-box-content">
                      <h4>Call Us</h4>
                      <p>+253-480-8973</p>
                    </div>
                  </div>
                </div>

                <h3>Contact Form</h3>
                <form id="contact-form" action="contact-form.php" method="post">
                  <div class="error-container" />
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Name</label>
                        <input
                          class="form-control form-control-name"
                          name="name"
                          id="name"
                          placeholder=""
                          type="text"
                          required
                        />
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Email</label>
                        <input
                          class="form-control form-control-email"
                          name="email"
                          id="email"
                          placeholder=""
                          type="email"
                          required
                        />
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Subject</label>
                        <input
                          class="form-control form-control-subject"
                          name="subject"
                          id="subject"
                          placeholder=""
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label>Message</label>
                    <textarea
                      class="form-control form-control-message"
                      name="message"
                      id="message"
                      placeholder=""
                      rows="10"
                      required
                    />
                  </div>

                  <div class="text-right">
                    <br />
                    <button class="btn btn-primary solid blank" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              <SideBar />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;
