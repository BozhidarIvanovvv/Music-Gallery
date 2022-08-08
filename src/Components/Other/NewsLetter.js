const NewsLetter = () => {
  return (
    <div className="news-letter">
      <div className="container">
        {/* <!-- news letter inner content --> */}
        <div className="news-content ">
          {/* <!-- heading --> */}
          <h3>Sign Up For Newsletter</h3>
          {/* <!-- paragraph --> */}
          <p>
            <strong>Contact Us</strong> and let us know if you have any
            questions, Don't forget to subscribe for more awesome stuff by
            typing mail bellow.
          </p>
          {/* <!-- subscribe form --> */}
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control input-lg"
                placeholder="Email"
              />
              <span className="input-group-btn">
                <button className="btn btn-default btn-lg" type="button">
                  Subscribe
                </button>
              </span>
            </div>
            {/* <!-- /input-group --> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
