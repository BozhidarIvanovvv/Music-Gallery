const Contact = () => {
  return (
    <div className="contact pad" id="contact">
      <div className="container">
        {/* <!-- default heading --> */}
        <div className="default-heading">
          {/* <!-- heading --> */}
          <h2>Contact Us</h2>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-4">
            {/* <!-- contact item --> */}
            <div className="contact-item ">
              {/* <!-- big icon --> */}
              <i className="fa fa-street-view"></i>
              {/* <!-- contact details  --> */}
              <span className="contact-details">
                #30/67, 5th Street, Mega Market Circle, New Delhi - 625001
              </span>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            {/* <!-- contact item --> */}
            <div className="contact-item ">
              {/* <!-- big icon --> */}
              <i className="fa fa-wifi"></i>
              {/* <!-- contact details  --> */}
              <span className="contact-details">music.site@melodi.com</span>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            {/* <!-- contact item --> */}
            <div className="contact-item ">
              {/* <!-- big icon --> */}
              <i className="fa fa-phone"></i>
              {/* <!-- contact details  --> */}
              <span className="contact-details">555 555 5555</span>
            </div>
          </div>
        </div>
        {/* <!-- form content --> */}
        <div className="form-content ">
          {/* <!-- paragraph --> */}
          <p>Do you have any idea in your mind? Drop us a line.</p>
          <form role="form" id="contactForm" method="post">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Enter phone"
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="9"
                    placeholder="Enter message"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-lg btn-theme">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
