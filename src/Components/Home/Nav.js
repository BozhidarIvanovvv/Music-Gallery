const Nav = () => {
  return (
    <nav className="navbar navbar-fixed-top navbar-default">
      <div className="container">
        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          {/* <!-- logo area --> */}
          <a className="navbar-brand" href="#home">
            {/* <!-- logo image --> */}
            <img className="img-responsive" src="img/logo/logo.png" alt="" />
          </a>
        </div>

        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#latestalbum">Latest Album</a>
            </li>
            <li>
              <a href="#featuredalbum">Featured Album</a>
            </li>
            <li>
              <a href="#joinus">Join Us</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        {/* <!-- /.navbar-collapse --> */}
      </div>
      {/* <!-- /.container-fluid --> */}
    </nav>
  );
};

export default Nav;
