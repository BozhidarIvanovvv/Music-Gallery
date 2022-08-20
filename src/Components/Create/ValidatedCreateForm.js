import { useContext } from "react";
import { AlbumContext } from "../../Contexts/AlbumContext";

import { useFormik } from "formik";
import * as Yup from "yup";

import * as albumService from "../../Services/albumService";

import styles from "./ValidatedCreateForm.module.css";

const ValidatedCreateForm = () => {
  const { albumAdd } = useContext(AlbumContext);

  const formik = useFormik({
    initialValues: {
      title: "",
      artist: "",
      songCount: "",
      summary: "",
      imageUrl: "",
      price: "",
    },
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
      albumService.create(values).then((result) => {
        albumAdd(result);
      });
    },
  });

  return (
    <form
      id="create"
      className={styles["create-wrapper"]}
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

export default ValidatedCreateForm;
