/* eslint-disable */

function App() {
  return (
    <div>
      {/* // <!-- modal for booking ticket form --> */}

      <div>
        <div
          className="modal fade"
          id="bookTicket"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="BookTicket"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="myModalLabel">
                  Name of The Event &nbsp;{" "}
                  <small>
                    <span className="label label-success">Available</span>{" "}
                    &nbsp;{" "}
                    <span className="label label-danger">Not Available</span>
                  </small>
                </h4>
              </div>
              {/* <!-- form for events ticket booking --> */}
              <form>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="example@mail.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputContact">Contact</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputContact"
                      placeholder="+91 55 5555 5555"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputSeats">Number of Tickets</label>
                    <select className="form-control" id="exampleInputSeats">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> I accept the Terms of Service
                    </label>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  {/* <!-- link to payment gatway here --> */}
                  <button type="button" className="btn btn-primary">
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <!-- wrapper --> */}

        <div className="wrapper" id="home">
          {/* <!-- header area --> */}
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
            {/* <!-- primary menu --> */}
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
                    <img
                      className="img-responsive"
                      src="img/logo/logo.png"
                      alt=""
                    />
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
          </header>
          {/* <!--/ header end --> */}

          {/* <!-- banner area --> */}
          <div className="banner">
            <div
              id="carousel-example-generic"
              className="carousel slide"
              data-ride="carousel"
            >
              {/* <!-- Wrapper for slides --> */}
              <div className="carousel-inner" role="listbox">
                <div className="item active">
                  <img src="img/banner/b1.jpg" alt="..." />
                  <div className="container">
                    {/* <!-- banner caption --> */}
                    <div className="carousel-caption slide-one">
                      {/* <!-- heading --> */}
                      <h2 className="animated fadeInLeftBig">
                        <i className="fa fa-music"></i> Melodi For You!
                      </h2>
                      {/* <!-- paragraph --> */}
                      <h3 className="animated fadeInRightBig">
                        Find More Innovative &amp; Creative Music Albums.
                      </h3>
                      {/* <!-- button --> */}
                      <a href="#" className="animated fadeIn btn btn-theme">
                        Download Here
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="img/banner/b2.jpg" alt="..." />
                  <div className="container">
                    {/* <!-- banner caption --> */}
                    <div className="carousel-caption slide-two">
                      {/* <!-- heading --> */}
                      <h2 className="animated fadeInLeftBig">
                        <i className="fa fa-headphones"></i> Listen It...
                      </h2>
                      {/* <!-- paragraph --> */}
                      <h3 className="animated fadeInRightBig">
                        Lorem ipsum dolor sit amet, consectetur elit.
                      </h3>
                      {/* <!-- button --> */}
                      <a href="#" className="animated fadeIn btn btn-theme">
                        Listen Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Controls --> */}
              <a
                className="left carousel-control"
                href="#carousel-example-generic"
                role="button"
                data-slide="prev"
              >
                <span className="fa fa-arrow-left" aria-hidden="true"></span>
              </a>
              <a
                className="right carousel-control"
                href="#carousel-example-generic"
                role="button"
                data-slide="next"
              >
                <span className="fa fa-arrow-right" aria-hidden="true"></span>
              </a>
            </div>
          </div>
          {/* <!--/ banner end --> */}

          {/* <!-- block for animate navigation menu --> */}
          <div className="nav-animate"></div>

          {/* <!-- Hero block area --> */}
          <div id="latestalbum" className="hero pad">
            <div className="container">
              {/* <!-- hero content --> */}
              <div className="hero-content ">
                {/* <!-- heading --> */}
                <h2>Latest Album</h2>
                <hr />
                {/* <!-- paragraph --> */}
                <p>
                  We sing the best{" "}
                  <strong className="theme-color">Songs</strong> and now we
                  control the world best{" "}
                  <strong className="theme-color">Music</strong>.
                </p>
              </div>
              {/* <!-- hero play list --> */}
              <div className="hero-playlist">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    {/* <!-- music album image --> */}
                    <div className="figure">
                      {/* <!-- image --> */}
                      <img
                        className="img-responsive"
                        src="img/album/1.jpg"
                        alt=""
                      />
                      {/* <!-- disk image --> */}
                      <img
                        className="img-responsive disk"
                        src="img/album/disk.png"
                        alt=""
                      />
                    </div>
                    {/* <!-- album details --> */}
                    <div className="album-details">
                      {/* <!-- title --> */}
                      <h4>Perfect Melodi</h4>
                      {/* <!-- composed by --> */}
                      <h5>By Himanshu</h5>
                      {/* <!-- paragraph --> */}
                      <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since 1500.
                      </p>
                      {/* <!-- button --> */}
                      <a
                        href="#"
                        className="btn btn-lg btn-theme"
                        id="playNowBtn"
                      >
                        <i className="fa fa-play"></i>&nbsp; Play Now
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    {/* <!-- play list --> */}
                    <div className="playlist-content">
                      <ul className="list-unstyled">
                        <li className="playlist-number">
                          {/* <!-- song information --> */}
                          <div className="song-info">
                            {/* <!-- song title --> */}
                            <h4>Melodi Song Track One</h4>
                            <p>
                              <strong>Album</strong>: Title &nbsp;|&nbsp;{" "}
                              <strong>Type</strong>: Rock &nbsp;|&nbsp;{" "}
                              <strong>Singer</strong>: Dawn
                            </p>
                          </div>
                          {/* <!-- music icon --> */}
                          <div className="music-icon">
                            <a href="#">
                              <i className="fa fa-play"></i>
                            </a>
                            <a href="#">
                              <i className="fa fa-pause"></i>
                            </a>
                          </div>
                          <div className="clearfix"></div>
                        </li>
                        <li className="playlist-number">
                          {/* <!-- song information --> */}
                          <div className="song-info">
                            {/* <!-- song title --> */}
                            <h4>Melodi Song Track Two</h4>
                            <p>
                              <strong>Album</strong>: Title &nbsp;|&nbsp;{" "}
                              <strong>Type</strong>: Rock &nbsp;|&nbsp;{" "}
                              <strong>Singer</strong>: Dawn
                            </p>
                          </div>
                          {/* <!-- music icon --> */}
                          <div className="music-icon">
                            <a href="#">
                              <i className="fa fa-play"></i>
                            </a>
                            <a href="#">
                              <i className="fa fa-pause"></i>
                            </a>
                          </div>
                          <div className="clearfix"></div>
                        </li>
                        <li className="playlist-number">
                          {/* <!-- song information --> */}
                          <div className="song-info">
                            {/* <!-- song title --> */}
                            <h4>Melodi Song Track Three</h4>
                            <p>
                              <strong>Album</strong>: Title &nbsp;|&nbsp;{" "}
                              <strong>Type</strong>: Rock &nbsp;|&nbsp;{" "}
                              <strong>Singer</strong>: Dawn
                            </p>
                          </div>
                          {/* <!-- music icon --> */}
                          <div className="music-icon">
                            <a href="#">
                              <i className="fa fa-play"></i>
                            </a>
                            <a href="#">
                              <i className="fa fa-pause"></i>
                            </a>
                          </div>
                          <div className="clearfix"></div>
                        </li>
                        <li className="playlist-number">
                          {/* <!-- song information --> */}
                          <div className="song-info">
                            {/* <!-- song title --> */}
                            <h4>Melodi Song Track Four</h4>
                            <p>
                              <strong>Album</strong>: Title &nbsp;|&nbsp;{" "}
                              <strong>Type</strong>: Rock &nbsp;|&nbsp;{" "}
                              <strong>Singer</strong>: Dawn
                            </p>
                          </div>
                          {/* <!-- music icon --> */}
                          <div className="music-icon">
                            <a href="#">
                              <i className="fa fa-play"></i>
                            </a>
                            <a href="#">
                              <i className="fa fa-pause"></i>
                            </a>
                          </div>
                          <div className="clearfix"></div>
                        </li>
                        <li className="playlist-number">
                          {/* <!-- song information --> */}
                          <div className="song-info">
                            {/* <!-- song title --> */}
                            <h4>Melodi Song Track Five</h4>
                            <p>
                              <strong>Album</strong>: Title &nbsp;|&nbsp;{" "}
                              <strong>Type</strong>: Rock &nbsp;|&nbsp;{" "}
                              <strong>Singer</strong>: Dawn
                            </p>
                          </div>
                          {/* <!-- music icon --> */}
                          <div className="music-icon">
                            <a href="#">
                              <i className="fa fa-play"></i>
                            </a>
                            <a href="#">
                              <i className="fa fa-pause"></i>
                            </a>
                          </div>
                          <div className="clearfix"></div>
                        </li>
                        <li className="playlist-number">
                          {/* <!-- song information --> */}
                          <div className="song-info">
                            {/* <!-- song title --> */}
                            <h4>Melodi Song Track Six</h4>
                            <p>
                              <strong>Album</strong>: Title &nbsp;|&nbsp;{" "}
                              <strong>Type</strong>: Rock &nbsp;|&nbsp;{" "}
                              <strong>Singer</strong>: Dawn
                            </p>
                          </div>
                          {/* <!-- music icon --> */}
                          <div className="music-icon">
                            <a href="#">
                              <i className="fa fa-play"></i>
                            </a>
                            <a href="#">
                              <i className="fa fa-pause"></i>
                            </a>
                          </div>
                          <div className="clearfix"></div>
                        </li>
                        <li className="playlist-number">
                          {/* <!-- song information --> */}
                          <div className="song-info">
                            {/* <!-- song title --> */}
                            <h4>Melodi Song Track Seven</h4>
                            <p>
                              <strong>Album</strong>: Title &nbsp;|&nbsp;{" "}
                              <strong>Type</strong>: Rock &nbsp;|&nbsp;{" "}
                              <strong>Singer</strong>: Dawn
                            </p>
                          </div>
                          {/* <!-- music icon --> */}
                          <div className="music-icon">
                            <a href="#">
                              <i className="fa fa-play"></i>
                            </a>
                            <a href="#">
                              <i className="fa fa-pause"></i>
                            </a>
                          </div>
                          <div className="clearfix"></div>
                        </li>
                        <li className="playlist-number">
                          {/* <!-- song information --> */}
                          <div className="song-info">
                            {/* <!-- song title --> */}
                            <h4>Melodi Song Track Eight</h4>
                            <p>
                              <strong>Album</strong>: Title &nbsp;|&nbsp;{" "}
                              <strong>Type</strong>: Rock &nbsp;|&nbsp;{" "}
                              <strong>Singer</strong>: Dawn
                            </p>
                          </div>
                          {/* <!-- music icon --> */}
                          <div className="music-icon">
                            <a href="#">
                              <i className="fa fa-play"></i>
                            </a>
                            <a href="#">
                              <i className="fa fa-pause"></i>
                            </a>
                          </div>
                          <div className="clearfix"></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/ hero end --> */}

          {/* <!-- promo --> */}
          <div className="promo parallax-one pad">
            <div className="container">
              {/* <!-- promo element --> */}
              <div className="promo-element ">
                {/* <!-- heading --> */}
                <h3>Music An Art...</h3>
                {/* <!-- paragraph --> */}
                <p>
                  Music is an art form and cultural activity whose medium is
                  sound organized in time. The common elements of music are{" "}
                  <strong>pitch</strong>, <strong>rhythm</strong>,{" "}
                  <strong>dynamics</strong> and the sonic qualities of{" "}
                  <strong>timbre</strong> and <strong>texture</strong>.
                </p>
                {/* <!-- link --> */}
                <a className="promo-link" href="#">
                  <i className="fa fa-play-circle"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <!--/ promo end --> */}

          {/* <!-- featured abbum --> */}
          <div className="featured pad" id="featuredalbum">
            <div className="container">
              {/* <!-- default heading --> */}
              <div className="default-heading">
                {/* <!-- heading --> */}
                <h2>Featured Album</h2>
              </div>
              {/* <!-- featured album elements --> */}
              <div className="featured-element">
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    {/* <!-- featured item --> */}
                    <div className="featured-item ">
                      {/* <!-- image container --> */}
                      <div className="figure">
                        {/* <!-- image --> */}
                        <img
                          className="img-responsive"
                          src="img/featured/1.jpg"
                          alt=""
                        />
                        {/* <!-- paragraph --> */}
                        <p>
                          There are many variations of passages available, but
                          the majority have suffered Lorem alteration in some
                          form, by injected look even slightly believable.
                        </p>
                      </div>
                      {/* <!-- featured information --> */}
                      <div className="featured-item-info">
                        {/* <!-- featured title --> */}
                        <h4>Power Pop</h4>
                        {/* <!-- horizontal line --> */}
                        <hr />
                        {/* <!-- some responce from social medial or web likes --> */}
                        <p>
                          1024+ <span className="label label-theme">Like</span>{" "}
                          &nbsp;&nbsp; 825+{" "}
                          <span className="label label-theme">Love</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    {/* <!-- featured item --> */}
                    <div className="featured-item ">
                      {/* <!-- image container --> */}
                      <div className="figure">
                        {/* <!-- image --> */}
                        <img
                          className="img-responsive"
                          src="img/featured/2.jpg"
                          alt=""
                        />
                        {/* <!-- paragraph --> */}
                        <p>
                          There are many variations of passages available, but
                          the majority have suffered Lorem alteration in some
                          form, by injected look even slightly believable.
                        </p>
                      </div>
                      {/* <!-- featured information --> */}
                      <div className="featured-item-info">
                        {/* <!-- featured title --> */}
                        <h4>Bad Brains</h4>
                        {/* <!-- horizontal line --> */}
                        <hr />
                        {/* <!-- some responce from social medial or web likes --> */}
                        <p>
                          1024+ <span className="label label-theme">Like</span>{" "}
                          &nbsp;&nbsp; 825+{" "}
                          <span className="label label-theme">Love</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    {/* <!-- featured item --> */}
                    <div className="featured-item ">
                      {/* <!-- image container --> */}
                      <div className="figure">
                        {/* <!-- image --> */}
                        <img
                          className="img-responsive"
                          src="img/featured/3.jpg"
                          alt=""
                        />
                        {/* <!-- paragraph --> */}
                        <p>
                          There are many variations of passages available, but
                          the majority have suffered Lorem alteration in some
                          form, by injected look even slightly believable.
                        </p>
                      </div>
                      {/* <!-- featured information --> */}
                      <div className="featured-item-info">
                        {/* <!-- featured title --> */}
                        <h4>The Mars Volta</h4>
                        {/* <!-- horizontal line --> */}
                        <hr />
                        {/* <!-- some responce from social medial or web likes --> */}
                        <p>
                          1024+ <span className="label label-theme">Like</span>{" "}
                          &nbsp;&nbsp; 825+{" "}
                          <span className="label label-theme">Love</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    {/* <!-- featured item --> */}
                    <div className="featured-item ">
                      {/* <!-- image container --> */}
                      <div className="figure">
                        {/* <!-- image --> */}
                        <img
                          className="img-responsive"
                          src="img/featured/4.jpg"
                          alt=""
                        />
                        {/* <!-- paragraph --> */}
                        <p>
                          There are many variations of passages available, but
                          the majority have suffered Lorem alteration in some
                          form, by injected look even slightly believable.
                        </p>
                      </div>
                      {/* <!-- featured information --> */}
                      <div className="featured-item-info">
                        {/* <!-- featured title --> */}
                        <h4>Dirty Dancing</h4>
                        {/* <!-- horizontal line --> */}
                        <hr />
                        {/* <!-- some responce from social medial or web likes --> */}
                        <p>
                          1024+ <span className="label label-theme">Like</span>{" "}
                          &nbsp;&nbsp; 825+{" "}
                          <span className="label label-theme">Love</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    {/* <!-- featured item --> */}
                    <div className="featured-item ">
                      {/* <!-- image container --> */}
                      <div className="figure">
                        {/* <!-- image --> */}
                        <img
                          className="img-responsive"
                          src="img/featured/5.jpg"
                          alt=""
                        />
                        {/* <!-- paragraph --> */}
                        <p>
                          There are many variations of passages available, but
                          the majority have suffered Lorem alteration in some
                          form, by injected look even slightly believable.
                        </p>
                      </div>
                      {/* <!-- featured information --> */}
                      <div className="featured-item-info">
                        {/* <!-- featured title --> */}
                        <h4>Hotel California</h4>
                        {/* <!-- horizontal line --> */}
                        <hr />
                        {/* <!-- some responce from social medial or web likes --> */}
                        <p>
                          1024+ <span className="label label-theme">Like</span>{" "}
                          &nbsp;&nbsp; 825+{" "}
                          <span className="label label-theme">Love</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    {/* <!-- featured item --> */}
                    <div className="featured-item ">
                      {/* <!-- image container --> */}
                      <div className="figure">
                        {/* <!-- image --> */}
                        <img
                          className="img-responsive"
                          src="img/featured/6.jpg"
                          alt=""
                        />
                        {/* <!-- paragraph --> */}
                        <p>
                          There are many variations of passages available, but
                          the majority have suffered Lorem alteration in some
                          form, by injected look even slightly believable.
                        </p>
                      </div>
                      {/* <!-- featured information --> */}
                      <div className="featured-item-info">
                        {/* <!-- featured title --> */}
                        <h4>Punk Compilation</h4>
                        {/* <!-- horizontal line --> */}
                        <hr />
                        {/* <!-- some responce from social medial or web likes --> */}
                        <p>
                          1024+ <span className="label label-theme">Like</span>{" "}
                          &nbsp;&nbsp; 825+{" "}
                          <span className="label label-theme">Love</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- features end --> */}

          {/* <!-- call to action --> */}
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim sectetur adipiscing elit, sed do eiusmod
                      tempoad minim veniam consequat.
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
          {/* <!--/ cta end --> */}

          {/* <!-- work with us --> */}
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
                  It would be a great pleasure to have you in our team, follow
                  these steps to join us.
                </p>
                <div className="row">
                  <div className="col-md-3 col-sm-6">
                    {/* <!-- why work with us item --> */}
                    <div className="why-item  delay-one">
                      <span className="why-number">1</span>
                      {/* <!-- paragraph --> */}
                      <p>
                        Sed ut perspi ciatis unde omnis iste natus error sit vol
                        uptatem accus antium totam rem aperiam, eaque ipsa quae
                        ab illo inventore veritatisnatus.
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
                        uptatem accu santium totam rem aperiam, eaque ipsa quae
                        ab illo inventore veritatisnatus.
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
                        uptatem accus antium totam rem aperiam, eaque ipsa quae
                        ab illo inventore veritatisnatus.
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
                        uptatem accus antium totam rem aperiam, eaque ipsa quae
                        ab illo inventore veritatisnatus.
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
          {/* <!--/ end work with us --> */}

          {/* <!-- news letter --> */}
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
          {/* <!-- news letter end --> */}

          <div className="portfolio pad" id="portfolio">
            <div>
              {/* <!-- default heading --> */}
              <div className="default-heading">
                {/* <!-- heading --> */}
                <h2>Portfolio</h2>
              </div>
            </div>
            {/* <!-- portfolio --> */}
            <div className="portfolio-content" id="portfolioOwl">
              <div className="item">
                {/* <!-- item image --> */}
                <img
                  className="img-responsive"
                  src="img/portfolio/1.jpg"
                  alt=""
                />
                {/* <!-- transparent background --> */}
                <div className="p-transparent"></div>
                {/* <!-- on mouse hover details --> */}
                <div className="p-hover">
                  {/* <!-- heading /title --> */}
                  <h3>Album Title</h3>
                  <hr />
                  {/* <!-- project details --> */}
                  <p>Some details about album.</p>
                  {/* <!-- icon --> */}
                  <a href="#">
                    <i className="fa fa-share"></i>
                  </a>
                </div>
              </div>
              <div className="item">
                {/* <!-- item image --> */}
                <img
                  className="img-responsive"
                  src="img/portfolio/2.jpg"
                  alt=""
                />
                {/* <!-- transparent background --> */}
                <div className="p-transparent"></div>
                {/* <!-- on mouse hover details --> */}
                <div className="p-hover">
                  {/* <!-- heading /title --> */}
                  <h3>Album Title</h3>
                  <hr />
                  {/* <!-- project details --> */}
                  <p>Some details about album.</p>
                  {/* <!-- icon --> */}
                  <a href="#">
                    <i className="fa fa-share"></i>
                  </a>
                </div>
              </div>
              <div className="item">
                {/* <!-- item image --> */}
                <img
                  className="img-responsive"
                  src="img/portfolio/3.jpg"
                  alt=""
                />
                {/* <!-- transparent background --> */}
                <div className="p-transparent"></div>
                {/* <!-- on mouse hover details --> */}
                <div className="p-hover">
                  {/* <!-- heading /title --> */}
                  <h3>Album Title</h3>
                  <hr />
                  {/* <!-- project details --> */}
                  <p>Some details about album.</p>
                  {/* <!-- icon --> */}
                  <a href="#">
                    <i className="fa fa-share"></i>
                  </a>
                </div>
              </div>
              <div className="item">
                {/* <!-- item image --> */}
                <img
                  className="img-responsive"
                  src="img/portfolio/4.jpg"
                  alt=""
                />
                {/* <!-- transparent background --> */}
                <div className="p-transparent"></div>
                {/* <!-- on mouse hover details --> */}
                <div className="p-hover">
                  {/* <!-- heading /title --> */}
                  <h3>Album Title</h3>
                  <hr />
                  {/* <!-- project details --> */}
                  <p>Some details about album.</p>
                  {/* <!-- icon --> */}
                  <a href="#">
                    <i className="fa fa-share"></i>
                  </a>
                </div>
              </div>
              <div className="item">
                {/* <!-- item image --> */}
                <img
                  className="img-responsive"
                  src="img/portfolio/5.jpg"
                  alt=""
                />
                {/* <!-- transparent background --> */}
                <div className="p-transparent"></div>
                {/* <!-- on mouse hover details --> */}
                <div className="p-hover">
                  {/* <!-- heading /title --> */}
                  <h3>Album Title</h3>
                  <hr />
                  {/* <!-- project details --> */}
                  <p>Some details about album.</p>
                  {/* <!-- icon --> */}
                  <a href="#">
                    <i className="fa fa-share"></i>
                  </a>
                </div>
              </div>
              <div className="item">
                {/* <!-- item image --> */}
                <img
                  className="img-responsive"
                  src="img/portfolio/6.jpg"
                  alt=""
                />
                {/* <!-- transparent background --> */}
                <div className="p-transparent"></div>
                {/* <!-- on mouse hover details --> */}
                <div className="p-hover">
                  {/* <!-- heading /title --> */}
                  <h3>Album Title</h3>
                  <hr />
                  {/* <!-- project details --> */}
                  <p>Some details about album.</p>
                  {/* <!-- icon --> */}
                  <a href="#">
                    <i className="fa fa-share"></i>
                  </a>
                </div>
              </div>
              <div className="item">
                {/* <!-- item image --> */}
                <img
                  className="img-responsive"
                  src="img/portfolio/7.jpg"
                  alt=""
                />
                {/* <!-- transparent background --> */}
                <div className="p-transparent"></div>
                {/* <!-- on mouse hover details --> */}
                <div className="p-hover">
                  {/* <!-- heading /title --> */}
                  <h3>Album Title</h3>
                  <hr />
                  {/* <!-- project details --> */}
                  <p>Some details about album.</p>
                  {/* <!-- icon --> */}
                  <a href="#">
                    <i className="fa fa-share"></i>
                  </a>
                </div>
              </div>
              <div className="item">
                {/* <!-- item image --> */}
                <img
                  className="img-responsive"
                  src="img/portfolio/8.jpg"
                  alt=""
                />
                {/* <!-- transparent background --> */}
                <div className="p-transparent"></div>
                {/* <!-- on mouse hover details --> */}
                <div className="p-hover">
                  {/* <!-- heading /title --> */}
                  <h3>Album Title</h3>
                  <hr />
                  {/* <!-- project details --> */}
                  <p>Some details about album.</p>
                  {/* <!-- icon --> */}
                  <a href="#">
                    <i className="fa fa-share"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a href="#" className="btn btn-lg btn-theme">
                View more
              </a>
            </div>
            {/* <!-- portfolio end --> */}
          </div>
          {/* <!-- work with us end --> */}

          {/* <!-- events --> */}
          <div className="events parallax-three pad" id="events">
            <div className="container">
              {/* <!-- default heading --> */}
              <div className="default-heading-shadow">
                {/* <!-- heading --> */}
                <h2>Coming Events</h2>
              </div>
              {/* <!-- events element --> */}
              <div className="events-element">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    {/* <!-- event item --> */}
                    <div className="events-item ">
                      {/* <!-- image container --> */}
                      <div className="figure">
                        {/* <!-- event date --> */}
                        <div className="event-date">
                          24 <span className="emonth">Jan</span>
                          <div className="clearfix"></div>
                          {/* <!-- time --> */}
                          <span className="etime">06:30 pm</span>
                        </div>
                        {/* <!-- event location --> */}
                        <span className="event-location">
                          <i className="fa fa-map-marker"></i> New York
                        </span>
                        {/* <!-- image --> */}
                        <img
                          className="img-responsive"
                          src="img/event/1.jpg"
                          alt=""
                        />
                        {/* <!-- image hover --> */}
                        <div className="img-hover">
                          {/* <!-- hover icon --> */}
                          <a href="#">
                            <i className="fa fa-play-circle"></i>
                          </a>
                        </div>
                      </div>
                      {/* <!-- event information --> */}
                      <div className="event-info">
                        {/* <!-- event title --> */}
                        <h3>Sound Of melodi In Instrumesnts</h3>
                        {/* <!-- horizontal line --><hr /> */}
                        {/* <!-- paragraph --> */}
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua, sed doconsect etur eiusmod teme
                          et dolore magna aliqua... <a href="#">more</a>
                        </p>
                        {/* <!-- buy ticket button link --> */}
                        <button
                          href="#bookTicket"
                          className="btn btn-lg btn-theme"
                          data-toggle="modal"
                        >
                          Book Ticket
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    {/* <!-- event item --> */}
                    <div className="events-item ">
                      {/* <!-- image container --> */}
                      <div className="figure">
                        {/* <!-- event date --> */}
                        <div className="event-date">
                          31 <span className="emonth">Jan</span>
                          <div className="clearfix"></div>
                          {/* <!-- time --> */}
                          <span className="etime">09:45 pm</span>
                        </div>
                        {/* <!-- event location --> */}
                        <span className="event-location">
                          <i className="fa fa-map-marker"></i> Romania
                        </span>
                        {/* <!-- image --> */}
                        <img
                          className="img-responsive"
                          src="img/event/2.jpg"
                          alt=""
                        />
                        {/* <!-- image hover --> */}
                        <div className="img-hover">
                          {/* <!-- hover icon --> */}
                          <a href="#">
                            <i className="fa fa-play-circle"></i>
                          </a>
                        </div>
                      </div>
                      {/* <!-- event information --> */}
                      <div className="event-info">
                        {/* <!-- event title --> */}
                        <h3>Rock Music Festival at City Life Mall</h3>
                        {/* <!-- horizontal line --><hr /> */}
                        {/* <!-- paragraph --> */}
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua, sed doconsect etur eiusmod teme
                          et dolore magna aliqua... <a href="#">more</a>
                        </p>
                        {/* <!-- buy ticket button link --> */}
                        <button
                          href="#bookTicket"
                          className="btn btn-lg btn-theme"
                          data-toggle="modal"
                        >
                          Book Ticket
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    {/* <!-- event item --> */}
                    <div className="events-item ">
                      {/* <!-- image container --> */}
                      <div className="figure">
                        {/* <!-- event date --> */}
                        <div className="event-date">
                          14 <span className="emonth">Feb</span>
                          <div className="clearfix"></div>
                          {/* <!-- time --> */}
                          <span className="etime">10:30 am</span>
                        </div>
                        {/* <!-- event location --> */}
                        <span className="event-location">
                          <i className="fa fa-map-marker"></i> New Delhi
                        </span>
                        {/* <!-- image --> */}
                        <img
                          className="img-responsive"
                          src="img/event/3.jpg"
                          alt=""
                        />
                        {/* <!-- image hover --> */}
                        <div className="img-hover">
                          {/* <!-- hover icon --> */}
                          <a href="#">
                            <i className="fa fa-play-circle"></i>
                          </a>
                        </div>
                      </div>
                      {/* <!-- event information --> */}
                      <div className="event-info">
                        {/* <!-- event title --> */}
                        <h3>Fashion Show Light At Hollywood</h3>
                        {/* <!-- horizontal line --><hr /> */}
                        {/* <!-- paragraph --> */}
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua, sed doconsect etur eiusmod teme
                          et dolore magna aliqua... <a href="#">more</a>
                        </p>
                        {/* <!-- buy ticket button link --> */}
                        <button
                          href="#bookTicket"
                          className="btn btn-lg btn-theme"
                          data-toggle="modal"
                        >
                          Book Ticket
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    {/* <!-- event item --> */}
                    <div className="events-item ">
                      {/* <!-- image container --> */}
                      <div className="figure">
                        {/* <!-- event date --> */}
                        <div className="event-date">
                          31 <span className="emonth">Mar</span>
                          <div className="clearfix"></div>
                          {/* <!-- time --> */}
                          <span className="etime">10:00 pm</span>
                        </div>
                        {/* <!-- event location --> */}
                        <span className="event-location">
                          <i className="fa fa-map-marker"></i> New Delhi
                        </span>
                        {/* <!-- image --> */}
                        <img
                          className="img-responsive"
                          src="img/event/4.jpg"
                          alt=""
                        />
                        {/* <!-- image hover --> */}
                        <div className="img-hover">
                          {/* <!-- hover icon --> */}
                          <a href="#">
                            <i className="fa fa-play-circle"></i>
                          </a>
                        </div>
                      </div>
                      {/* <!-- event information --> */}
                      <div className="event-info">
                        {/* <!-- event title --> */}
                        <h3>Fashion Show Light At Hollywood</h3>
                        {/* <!-- horizontal line --><hr /> */}
                        {/* <!-- paragraph --> */}
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua, sed doconsect etur eiusmod teme
                          et dolore magna aliqua... <a href="#">more</a>
                        </p>
                        {/* <!-- buy ticket button link --> */}
                        <button
                          href="#bookTicket"
                          className="btn btn-lg btn-theme"
                          data-toggle="modal"
                        >
                          Book Ticket
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- events end --> */}

          {/* <!-- about --> */}
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
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit occaecat cupidatat non
                        id est laborum.
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
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit occaecat cupidatat non
                        id est laborum.
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
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit occaecat cupidatat non
                        id est laborum.
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
          {/* <!-- about end --> */}

          {/* <!-- meet --> */}
          <div className="meet parallax-four pad" id="meet">
            <div className="container">
              {/* <!-- default heading --> */}
              <div className="default-heading-shadow">
                <h2>Upcoming Meets</h2>
              </div>
              {/* <!-- meet location image --> */}
              <div className="meet-map">
                <img
                  className="img-responsive img-map"
                  src="img/flat/map.png"
                  alt=""
                />
                {/* <!-- map marker for India  --> */}
                <a
                  href="#"
                  className="map-marker india "
                  data-toggle="tooltip"
                  data-placement="top"
                  title="India"
                >
                  <img
                    className="img-responsive"
                    src="img/flat/map-marker.png"
                    alt=""
                  />
                </a>
                {/* <!-- map marker for United States  --> */}
                <a
                  href="#"
                  className="map-marker usa "
                  data-toggle="tooltip"
                  data-placement="top"
                  title="United States"
                >
                  <img
                    className="img-responsive"
                    src="img/flat/map-marker.png"
                    alt=""
                  />
                </a>
                {/* <!-- map marker for South Africa  --> */}
                <a
                  href="#"
                  className="map-marker sa "
                  data-toggle="tooltip"
                  data-placement="top"
                  title="South Africa"
                >
                  <img
                    className="img-responsive"
                    src="img/flat/map-marker.png"
                    alt=""
                  />
                </a>
                {/* <!-- map marker for Russia  --> */}
                <a
                  href="#"
                  className="map-marker russia "
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Russia"
                >
                  <img
                    className="img-responsive"
                    src="img/flat/map-marker.png"
                    alt=""
                  />
                </a>
                {/* <!-- map marker for Brazil  --> */}
                <a
                  href="#"
                  className="map-marker brazil "
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Brazil"
                >
                  <img
                    className="img-responsive"
                    src="img/flat/map-marker.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          {/* <!-- meet end --> */}

          {/* <!-- contact --> */}
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
                    <span className="contact-details">
                      music.site@melodi.com
                    </span>
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
          {/* <!-- contact end --> */}

          {/* <!-- footer --> */}
          <footer>
            <div className="container">
              {/* <!-- social media links --> */}
              <div className="social">
                <a className="h-facebook" href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a className="h-google" href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a className="h-linkedin" href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a className="h-twitter" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
              {/* <!-- copy right --> */}
              <p className="copy-right">
                &copy; copyright 2018, All rights are reserved.
              </p>
            </div>
          </footer>
          {/* <!-- footer end --> */}

          {/* <!-- Scroll to top --> */}
          <span className="totop">
            <a href="#">
              <i className="fa fa-chevron-up"></i>
            </a>
          </span>
        </div>
      </div>

      {/* <!-- Javascript files --> */}
      {/* <!-- jQuery --> */}
      <script src="js/jquery.js"></script>
      {/* <!-- Bootstrap JS --> */}
      <script src="js/bootstrap.min.js"></script>
      {/* <!-- WayPoints JS --> */}
      <script src="js/waypoints.min.js"></script>
      {/* <!-- Include js plugin --> */}
      <script src="js/owl.carousel.min.js"></script>
      {/* <!-- One Page Nav --> */}
      <script src="js/jquery.nav.js"></script>
      {/* <!-- Respond JS for IE8 --> */}
      <script src="js/respond.min.js"></script>
      {/* <!-- HTML5 Support for IE --> */}
      <script src="js/html5shiv.js"></script>
      {/* <!-- Custom JS --> */}
      <script src="js/custom.js"></script>
    </div>
  );
}

export default App;
