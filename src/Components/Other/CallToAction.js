const CallToAction = () => {
  return (
    <div className="cta parallax-one pad">
      <div className="container">
        {/* <!-- cta element --> */}
        <div className="cta-element ">
          <div className="row">
            <div className="col-md-9 col-sm-8">
              {/* <!-- heading --> */}
              <h3>Melodi, A Fully Rock Album Pro</h3>
              {/* <!-- paragraph --> */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim sectetur adipiscing elit, sed do eiusmod tempoad minim
                veniam consequat.
              </p>
            </div>
            <div className="col-md-3 col-sm-4">
              <div className="cta-btn text-center">
                {/* <!-- purchase now button --> */}
                <a href="#" className="btn btn-default btn-lg">
                  Download Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
