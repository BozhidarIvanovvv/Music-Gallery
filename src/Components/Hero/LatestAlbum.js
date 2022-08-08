import { lazy } from "react";

const LatestAlbum = () => {
  return (
    <div id="latestalbum" className="hero pad">
      <div className="container">
        {/* <!-- hero content --> */}
        <div className="hero-content ">
          {/* <!-- heading --> */}
          <h2>Latest Album</h2>
          <hr />
          {/* <!-- paragraph --> */}
          <p>
            We sing the best <strong className="theme-color">Songs</strong> and
            now we control the world best{" "}
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
                <img className="img-responsive" src="img/album/1.jpg" alt="" />
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
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since 1500.
                </p>
                {/* <!-- button --> */}
                <a href="#" className="btn btn-lg btn-theme" id="playNowBtn">
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
  );
};

export default LatestAlbum;
