import { useContext } from "react";
import { AlbumContext } from "../../Contexts/AlbumContext";

import * as albumService from "../../Services/albumService";
import styles from "./Create.module.css";

const Create = () => {
  const { albumAdd } = useContext(AlbumContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const album = Object.fromEntries(new FormData(e.target));

    albumService.create(album).then((result) => {
      albumAdd(result);
    });
  };

  return (
    <section id="create-page">
      <form
        id="create"
        className={styles["create-wrapper"]}
        onSubmit={onSubmit}
      >
        <div className="container">
          <div className="brand-logo" />
          <h1>Create Album</h1>

          <div className="form-group">
            <label className={styles["label"]} htmlFor="title">
              Title:
            </label>
            <input className={styles["input"]} id="title" name="title" />
          </div>

          <div className="form-group">
            <label className={styles["label"]} htmlFor="artist">
              Artist:
            </label>
            <input className={styles["input"]} id="artist" name="artist" />
          </div>

          <div className="form-group">
            <label className={styles["label"]} htmlFor="songCount">
              Songs Count:
            </label>
            <input
              className={styles["input"]}
              id="songCount"
              name="songCount"
            />
          </div>

          <div className="form-group">
            <label className={styles["label"]} htmlFor="summary">
              Summary:
            </label>
            <input className={styles["input"]} id="summary" name="summary" />
          </div>

          <div className="form-group">
            <label className={styles["label"]} htmlFor="imageUrl">
              Image Url:
            </label>
            <input className={styles["input"]} id="imageUrl" name="imageUrl" />
          </div>

          <div className="modal-footer">
            <input
              type="submit"
              className={`btn btn-primary ${styles["btn-submit"]}`}
              value="Create"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Create;
