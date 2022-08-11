import Album from "./Album";

const FeaturedAlbums = ({ albums }) => {
  return (
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
