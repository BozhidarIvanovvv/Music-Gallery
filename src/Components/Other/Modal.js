const Modal = () => {
  return (
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
                <span className="label label-success">Available</span> &nbsp;{" "}
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
  );
};

export default Modal;
