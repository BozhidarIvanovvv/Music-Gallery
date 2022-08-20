import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

import * as albumService from "../../Services/albumService";
import { AlbumContext } from "../../Contexts/AlbumContext";
import styles from "./ValidatedEditAlbumForm.module.css";

const ValidatedEditAlbumForm = () => {
  const [currentAlbum, setCurrentAlbum] = useState({});
  const { albumEdit } = useContext(AlbumContext);
  const { albumId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    albumService.getOne(albumId).then((albumData) => {
      setCurrentAlbum(albumData);
    });
  }, [albumId]);

  const formik = useFormik({
    initialValues: {
      title: currentAlbum.title,
      artist: currentAlbum.artist,
      songCount: currentAlbum.songCount,
      summary: currentAlbum.summary,
      imageUrl: currentAlbum.imageUrl,
      price: currentAlbum.price,
    },
    // I have absolutely no idea why it doesn't automatically set the default values. It was working without the formik validation.
    // I spent 5 hours searching the internet and looking through forums.
    // I'm not sure why it refuses to set initialValues to the values
    // from the current album, which are properly received through the GET request.
    // I have a feeling it might be because the formik values are rendered before the get request could fetch the data, but I tried setting
    // them manually after the request was finished and it didn't work. I'm just going to leave it like that, I've wasted so much time on something so minor.
    validationSchema: Yup.object({
      title: Yup.string()
        .min(6, "Title must be atleast 6 characters long!")
        .required("Title is required!"),

      artist: Yup.string()
        .min(6, "Artist must be atleast 6 characters long!")
        .required("Artist is required!"),

      songCount: Yup.string().required("Song Count is required!"),

      summary: Yup.string()
        .min(15, "Summary must be atleast 15 characters long!")
        .required("Summary is required!"),

      imageUrl: Yup.string()
        .min(15, "Image Url must be atleast 15 characters long!")
        .required("Image Url is required!"),

      price: Yup.string().required("Price is required!"),
    }),
    onSubmit: (values) => {
      albumService.edit(albumId, values).then((result) => {
        albumEdit(albumId, result);
        navigate(`/details/${albumId}`);
      });
    },
  });

  return (
    <form
      id="edit"
      className={styles["edit-wrapper"]}
      onSubmit={formik.handleSubmit}
    >
      <div className="container">
        <div className="brand-logo" />
        <h1>Create Album</h1>

        <div className="form-group">
          <label className={styles["label"]} htmlFor="title">
            Title:
          </label>
          <input
            className={styles["input"]}
            id="title"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <p className={styles.errorTag}>{formik.errors.title}</p>
          ) : (
            <></>
          )}
        </div>

        <div className="form-group">
          <label className={styles["label"]} htmlFor="artist">
            Artist:
          </label>
          <input
            className={styles["input"]}
            id="artist"
            name="artist"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.artist}
          />
          {formik.touched.artist && formik.errors.artist ? (
            <p className={styles.errorTag}>{formik.errors.artist}</p>
          ) : (
            <></>
          )}
        </div>

        <div className="form-group">
          <label className={styles["label"]} htmlFor="songCount">
            Songs Count:
          </label>
          <input
            className={styles["input"]}
            id="songCount"
            name="songCount"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.songCount}
          />
          {formik.touched.songCount && formik.errors.songCount ? (
            <p className={styles.errorTag}>{formik.errors.songCount}</p>
          ) : (
            <></>
          )}
        </div>

        <div className="form-group">
          <label className={styles["label"]} htmlFor="summary">
            Summary:
          </label>
          <input
            className={styles["input"]}
            id="summary"
            name="summary"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.summary}
          />
          {formik.touched.summary && formik.errors.summary ? (
            <p className={styles.errorTag}>{formik.errors.summary}</p>
          ) : (
            <></>
          )}
        </div>

        <div className="form-group">
          <label className={styles["label"]} htmlFor="imageUrl">
            Image Url:
          </label>
          <input
            className={styles["input"]}
            id="imageUrl"
            name="imageUrl"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.imageUrl}
          />
          {formik.touched.imageUrl && formik.errors.imageUrl ? (
            <p className={styles.errorTag}>{formik.errors.imageUrl}</p>
          ) : (
            <></>
          )}
        </div>

        <div className="form-group">
          <label className={styles["label"]} htmlFor="price">
            Price:
          </label>
          <input
            className={styles["input"]}
            id="price"
            name="price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />{" "}
          {formik.touched.price && formik.errors.price ? (
            <p className={styles.errorTag}>{formik.errors.price}</p>
          ) : (
            <></>
          )}
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
  );
};

export default ValidatedEditAlbumForm;
