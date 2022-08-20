const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* <!-- social media links --> */}
        <div className="social">
          <a className="h-facebook" href="#">
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </div>
        {/* <!-- copy right --> */}
        <p className="copy-right">
          &copy; Copyright {new Date().getFullYear()}, All rights are reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
