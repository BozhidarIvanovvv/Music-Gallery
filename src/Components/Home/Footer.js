const Footer = () => {
  return (
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
  );
};

export default Footer;
