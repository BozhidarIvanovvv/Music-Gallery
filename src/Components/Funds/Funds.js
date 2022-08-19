import styles from "./Funds.module.css";

const Funds = ({ funds, setFunds }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

    if (Number(data.funds) <= 0) {
      console.log("Wrong input!");
      return;
    }

    if (isNaN(data.funds)) {
      console.log("Please enter a valid number!");
      return;
    }

    setFunds({
      fundsState: Number(funds.fundsState) + Number(data.funds),
    });
  };

  return (
    <section id="funds-page">
      <form id="funds" className={styles["funds-wrapper"]} onSubmit={onSubmit}>
        <div className="container">
          <div className="brand-logo" />
          <h1>Enter the amount of funds you want to add to your account!</h1>

          <div className="form-group">
            <label className={styles["label"]} htmlFor="funds">
              Amount:
            </label>
            <input className={styles["input"]} id="funds" name="funds" />
          </div>

          <div className="modal-footer">
            <input
              type="submit"
              className={`btn btn-primary ${styles["btn-submit"]}`}
              value="Proceed"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Funds;
