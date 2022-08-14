import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthContext";

import { Link } from "react-router-dom";
import Album from "./Album";

import styles from "./FeaturedAlbums.module.css";

const FeaturedAlbums = ({ albums }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="featured pad" id="Featured" name="Featured">
      <div className="container">
        {/* <!-- default heading --> */}
        <div className="default-heading">
          {/* <!-- heading --> */}
          <h2>Featured Albums</h2>
        </div>
        {/* <!-- featured album elements --> */}
        {user.accessToken ? (
          <Link
            to="/create"
            className={`btn btn-lg btn-theme ${styles["create"]}`}
            id="CreateAlbum"
          >
            Create Album
          </Link>
        ) : (
          <></>
        )}
        <div className="featured-element">
          <div className="row">
            {
              albums ? (
                albums.map((x) => <Album key={x._id} album={x} />)
              ) : (
                <></>
              )
              // TODO: Add a span for when there are no albums
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedAlbums;
