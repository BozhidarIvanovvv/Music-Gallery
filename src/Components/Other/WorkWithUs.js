const WorkWithUs = () => {
  return (
    <div className="work-with-us pad" id="joinus">
      <div className="container">
        {/* <!-- default heading --> */}
        <div className="default-heading">
          {/* <!-- heading --> */}
          <h2>Work With Us</h2>
        </div>
        {/* <!-- why work with us content --> */}
        <div className="why-content">
          {/* <!-- paragraph --> */}
          <p className="why-message">
            It would be a great pleasure to have you in our team, follow these
            steps to join us.
          </p>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              {/* <!-- why work with us item --> */}
              <div className="why-item  delay-one">
                <span className="why-number">1</span>
                {/* <!-- paragraph --> */}
                <p>
                  Sed ut perspi ciatis unde omnis iste natus error sit vol
                  uptatem accus antium totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatisnatus.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              {/* <!-- why work with us item --> */}
              <div className="why-item  delay-two">
                <span className="why-number">2</span>
                {/* <!-- paragraph --> */}
                <p>
                  Sed ut perspi ciatis unde omnis iste natus error sit vol
                  uptatem accu santium totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatisnatus.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              {/* <!-- why work with us item --> */}
              <div className="why-item  delay-three">
                <span className="why-number">3</span>
                {/* <!-- paragraph --> */}
                <p>
                  Sed ut perspi ciatis unde omnis iste natus error sit vol
                  uptatem accus antium totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatisnatus.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              {/* <!-- why work with us item --> */}
              <div className="why-item  delay-four">
                <span className="why-number">4</span>
                {/* <!-- paragraph --> */}
                <p>
                  Sed ut perspi ciatis unde omnis iste natus error sit vol
                  uptatem accus antium totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatisnatus.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- apply button --> */}
          <div className="apply-btn">
            {/* <!-- button line --> */}
            <a className="btn btn-lg btn-theme" href="#">
              Join Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
