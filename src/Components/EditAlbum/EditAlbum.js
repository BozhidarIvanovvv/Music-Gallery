import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as albumService from "../../Services/albumService";
import { AlbumContext } from "../../Contexts/AlbumContext";
import styles from "./EditAlbum.module.css";

const EditAlbum = () => {
  const [currentAlbum, setCurrentAlbum] = useState({});
  const { albumEdit } = useContext(AlbumContext);
  const { albumId } = useParams();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const albumData = Object.fromEntries(new FormData(e.target));

    albumService.edit(albumId, albumData).then((result) => {
      albumEdit(albumId, result);
      navigate(`/details/${albumId}`);
    });
  };

  useEffect(() => {
    albumService.getOne(albumId).then((albumData) => {
      setCurrentAlbum(albumData);
    });
  }, [albumId]);

  return (
    <section id="edit-page">
      <form id="edit" className={styles["edit-wrapper"]} onSubmit={onSubmit}>
        <div className="container">
          <div className="brand-logo" />
          <h1>Edit Album</h1>

          <div className="form-group">
            <label className={styles["label"]} htmlFor="title">
              Title:
            </label>
            <input
              className={styles["input"]}
              id="title"
              name="title"
              defaultValue={currentAlbum.title}
            />
          </div>

          <div className="form-group">
            <label className={styles["label"]} htmlFor="artist">
              Artist:
            </label>
            <input
              className={styles["input"]}
              id="artist"
              name="artist"
              defaultValue={currentAlbum.artist}
            />
          </div>

          <div className="form-group">
            <label className={styles["label"]} htmlFor="songCount">
              Songs Count:
            </label>
            <input
              className={styles["input"]}
              id="songCount"
              name="songCount"
              defaultValue={currentAlbum.songCount}
            />
          </div>

          <div className="form-group">
            <label className={styles["label"]} htmlFor="summary">
              Summary:
            </label>
            <input
              className={styles["input"]}
              id="summary"
              name="summary"
              defaultValue={currentAlbum.summary}
            />
          </div>

          <div className="form-group">
            <label className={styles["label"]} htmlFor="imageUrl">
              Image Url:
            </label>
            <input
              className={styles["input"]}
              id="imageUrl"
              name="imageUrl"
              defaultValue={currentAlbum.imageUrl}
            />
          </div>

          <div className="form-group">
            <label className={styles["label"]} htmlFor="price">
              Price:
            </label>
            <input
              className={styles["input"]}
              id="price"
              name="price"
              defaultValue={currentAlbum.price}
            />
          </div>

          <div className="modal-footer">
            <input
              type="submit"
              className={`btn btn-primary ${styles["btn-submit"]}`}
              value="Edit"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default EditAlbum;
