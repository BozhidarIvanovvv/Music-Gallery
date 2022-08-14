import { Link } from "react-router-dom";
import styles from "./Album.module.css";

const Album = ({ album }) => {
  return (
    <div className="col-md-4 col-sm-6">
      {/* <!-- featured item --> */}
      <div className="featured-item ">
        {/* <!-- image container --> */}
        <div className="figure">
          {/* <!-- image --> */}
          <img className="img-responsive" src={album.imageUrl} alt="" />
          {/* <!-- paragraph --> */}
          <p>
            {album.summary.length > 500
              ? `${album.summary.substring(0, 300)}...`
              : album.summary}
            <Link
              to={`/details/${album._id}`}
              className={`label label-theme ${styles["details-button"]}`}
            >
              Learn More
            </Link>
          </p>
        </div>
        {/* <!-- featured information --> */}
        <div className="featured-item-info">
          {/* <!-- featured title --> */}
          <h4>
            {album.title} - {album.songCount} songs
          </h4>
          {/* <!-- horizontal line --> */}
          <hr />
          {/* <!-- some responce from social medial or web likes --> */}
          <p>
            1024+ <span className="label label-theme">Like</span> &nbsp;&nbsp;
            825+ <span className="label label-theme">Love</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Album;
