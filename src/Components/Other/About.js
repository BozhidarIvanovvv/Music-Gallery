const About = () => {
  return (
    <div className="about" id="team">
      <div className="container">
        {/* <!-- default heading --> */}
        <div className="default-heading">
          {/* <!-- heading --> */}
          <h2>Who We Are?</h2>
        </div>
        {/* <!-- about what we are like content --> */}
        <div className="about-what-we">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className="what-we-item ">
                {/* <!-- heading with icon --> */}
                <h3>
                  <i className="fa fa-heartbeat"></i> What we do?
                </h3>
                {/* <!-- paragraph --> */}
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit occaecat cupidatat non id est laborum.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="what-we-item ">
                {/* <!-- heading with icon --> */}
                <h3>
                  <i className="fa fa-hand-o-up"></i> Why choose us?
                </h3>
                {/* <!-- paragraph --> */}
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit occaecat cupidatat non id est laborum.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="what-we-item ">
                {/* <!-- heading with icon --> */}
                <h3>
                  <i className="fa fa-map-marker"></i> Where we are?
                </h3>
                {/* <!-- paragraph --> */}
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit occaecat cupidatat non id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- our team --> */}
      <div className="team">
        <div className="container">
          {/* <!-- Team Member's Details --> */}
          <div className="team-content">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                {/* <!-- Team Member --> */}
                <div className="team-member  delay-one">
                  {/* <!-- Image Hover Block --> */}
                  <div className="member-img">
                    {/* <!-- Image  --> */}
                    <img
                      className="img-responsive"
                      src="img/user/1.jpg"
                      alt=""
                    />
                    {/* <!-- Hover block --> */}
                    <div className="social text-center">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                  {/* <!-- Member Details --> */}
                  <h3>Stacey Kowalski</h3>
                  <span className="designation">Guitarist</span>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                {/* <!-- Team Member --> */}
                <div className="team-member  delay-two">
                  {/* <!-- Image Hover Block --> */}
                  <div className="member-img">
                    {/* <!-- Image  --> */}
                    <img
                      className="img-responsive"
                      src="img/user/2.jpg"
                      alt=""
                    />
                    {/* <!-- Hover block --> */}
                    <div className="social text-center">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                  {/* <!-- Member Details --> */}
                  <h3>Joanna Koo</h3>
                  <span className="designation">Clarinetist</span>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                {/* <!-- Team Member --> */}
                <div className="team-member  delay-three">
                  {/* <!-- Image Hover Block --> */}
                  <div className="member-img">
                    {/* <!-- Image  --> */}
                    <img
                      className="img-responsive"
                      src="img/user/3.jpg"
                      alt=""
                    />
                    {/* <!-- Hover block --> */}
                    <div className="social text-center">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                  {/* <!-- Member Details --> */}
                  <h3>Mark Laredo</h3>
                  <span className="designation">Accordionist</span>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                {/* <!-- Team Member --> */}
                <div className="team-member  delay-four">
                  {/* <!-- Image Hover Block --> */}
                  <div className="member-img">
                    {/* <!-- Image  --> */}
                    <img
                      className="img-responsive"
                      src="img/user/4.jpg"
                      alt=""
                    />
                    {/* <!-- Hover block --> */}
                    <div className="social text-center">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                  {/* <!-- Member Details --> */}
                  <h3>Belie Costa</h3>
                  <span className="designation">Keyboardist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
