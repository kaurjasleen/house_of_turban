import React, { Component } from "react";
import './assets/style1.css'

class ContactUs extends Component{
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: '',
          disabled:false,
          emailSent: null,
        };
      }
      render(){
          return(
            <div className="container" width="100%">
                <section className="banner-page-section contact-banner">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in Touch with Us</p>
                </div>
                </section>
                <section className="contact-page-section">
			        <div className="contact-info">
                        <div className="container">
					        <div className="contact-info-box">
                                <div className="row">
                                    <div className="col-md-4">
                                        <span><i className="fa fa-phone"></i></span>
                                        <h2>Phone / Fax</h2>
                                        <p> +351123456789 <br /> +351987654321</p>
                                    </div>
                                    <div className="col-md-4">
                                        <span><i className="fa fa-envelope"></i></span>
                                        <h2>Email</h2>
                                        <p> info@strix.com <br/> support@strix.com</p>
                                    </div>
                                    <div className="col-md-4">
                                        <span><i className="fa fa-map-marker"></i></span>
                                        <h2>Location</h2>
                                        <p>795 Fake Ave, Door 6 <br/> Wonderland, CA 94107, USA </p>
                                        
                                    </div>
					            </div>
				            </div>
			            </div>
                    </div>

                    <div className="contact-form">
                        <div className="container">
                            <div className="title-section">
                                <h1>Having Questions?</h1>
                                <h3 className="h3tag">Get in Touch</h3>
                            </div>
                            <form id="contact-form" action="POST" data-netlify="true">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input name="name" id="name" type="text" placeholder="Name*" />
                                    </div>
                                    <div className="col-md-6">
                                        <input name="mail" id="mail" type="text" placeholder="Email*"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input name="subject" id="subject" type="text" placeholder="Subject*"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input name="website" id="website" type="text" placeholder="Product Code"/>
                                    </div>
                                    <div className="field">
                                        
                                    </div>
                                </div>
                                <textarea name="comment" id="comment" placeholder="Message*"></textarea>
                                <div className="submit-area">
                                    <input type="submit" id="submit_contact" value="Send Message"/>
                                    <div id="msg" className="message"></div>								
                                </div>
                            </form>
                        </div>
                    </div>
		        </section>
            </div>
            
          );
}
};
export default ContactUs;