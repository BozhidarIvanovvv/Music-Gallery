const Header = () => {
  return (
    <>
      <div className="nav-animate"></div>
      <header>
        {/* <!-- secondary menu --> */}
        <nav className="secondary-menu">
          <div className="container">
            {/* <!-- secondary menu left link area --> */}
            <div className="sm-left">
              <strong>Phone</strong>:&nbsp; <a href="#">555 555 555</a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <strong>E-mail</strong>:&nbsp;{" "}
              <a href="#">music.site@melodi.com</a>
            </div>
            {/* <!-- secondary menu right link area --> */}
            <div className="sm-right">
              {/* <!-- social link --> */}
              <div className="sm-social-link">
                <a className="h-facebook" href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a className="h-twitter" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a className="h-google" href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a className="h-linkedin" href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
