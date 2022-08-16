import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DeleteModal from "./Modal/DeleteModal";

import * as albumService from "../../Services/albumService";

import styles from "./Details.module.css";

const Details = () => {
  const { albumId } = useParams();
  const [currentAlbum, setCurrentAlbum] = useState({});
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    albumService.getOne(albumId).then((result) => {
      setCurrentAlbum(result);
    });
  }, []);

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
            <button
              className={`${styles["price-cart__btn"]} ${styles["price-btn"]} ${styles["btn-delete"]}`}
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Delete
            </button>
            <button
              className={`${styles["price-cart__btn"]} ${styles["price-btn"]} ${styles["btn-edit"]}`}
            >
              Edit
            </button>
          </div>
        </section>
      </div>
      {openModal && <DeleteModal closeModal={setOpenModal} />}
    </>
  );
};

export default Details;
