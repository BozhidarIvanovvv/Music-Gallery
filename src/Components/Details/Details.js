import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";

import DeleteModal from "./Modal/DeleteModal";

import * as albumService from "../../Services/albumService";

import styles from "./Details.module.css";

const Details = ({ boughtAlbums, addToCartHandler }) => {
  const { albumId } = useParams();
  const [currentAlbum, setCurrentAlbum] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    albumService.getOne(albumId).then((result) => {
      setCurrentAlbum(result);
    });
  }, [albumId]);

  return (
    <>
      <div className={styles["item"]}>
        <section className={styles.img}>
          <img
            src={currentAlbum.imageUrl}
            alt=""
            className={styles["img-main"]}
          />
        </section>

        <section className={styles["price"]}>
          <h2 className={styles["price-sub__heading"]}>
            {currentAlbum.artist}
          </h2>
          <h1 className={styles["price-main__heading"]}>
            {currentAlbum.title}
          </h1>
          <p className={styles["price-txt"]}>{currentAlbum.summary}</p>
          <div className={styles["price-box"]}>
            <div className={styles["price-box__main"]}>
              <span className={styles["price-box__main-new"]}>
                {currentAlbum.songCount} - songs
              </span>
              {/* <span className={styles["price-box__main-discount"]}> 50%</span> */}
            </div>
          </div>

          <div className={styles["price-btnbox"]}>
            {user._id === currentAlbum._ownerId ? (
              <>
                <button
                  className={`${styles["price-cart__btn"]} ${styles["price-btn"]} ${styles["btn-delete"]}`}
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  Delete
                </button>
                <Link
                  to={`/edit/${albumId}`}
                  className={`${styles["price-cart__btn"]} ${styles["price-btn"]} ${styles["btn-edit"]}`}
                >
                  Edit
                </Link>{" "}
              </>
            ) : (
              <></>
            )}
            {user._id &&
            !boughtAlbums.some((a) => a._id === currentAlbum._id) ? (
              <button
                className={`${styles["price-cart__btn"]} ${styles["price-btn"]} ${styles["btn-buy"]}`}
                onClick={() => {
                  addToCartHandler(currentAlbum);
                }}
              >
                Buy
              </button>
            ) : (
              <div>
                You have already bought this album or you are not logged in!
              </div>
            )}
          </div>
        </section>
      </div>
      {openModal && <DeleteModal closeModal={setOpenModal} />}
    </>
  );
};

export default Details;
