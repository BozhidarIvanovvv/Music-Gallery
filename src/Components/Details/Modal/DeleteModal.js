import { useContext } from "react";
import { useParams } from "react-router-dom";

import { AlbumContext } from "../../../Contexts/AlbumContext";

const DeleteModal = ({ closeModal }) => {
  const { albumRemove } = useContext(AlbumContext);
  const { albumId } = useParams();

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure?</h1>
        </div>
        <div className="body">
          <p>Do you really want to delete this album?</p>
          <p>This process cannot be undone!</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              closeModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={() => albumRemove(albumId)}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
