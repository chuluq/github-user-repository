import moment from "moment";

import "./styles.css";

const Modal = ({ isOpen, repo, handleClick }) => {
  const createdDate = moment(repo.created_at).format("MMMM Do YYYY");
  const updatedDate = moment(repo.updated_at).format("MMMM Do YYYY");

  return (
    <div className={`modal ${isOpen ? "modal-show" : "modal-hidden"}`}>
      <div className="modal-content">
        <span
          className="material-symbols-outlined modal-close"
          onClick={handleClick}
        >
          close
        </span>
        <div className="modal-details">
          <div className="modal-name">
            <h1>{repo.name}</h1>
            <p>{repo.id}</p>
          </div>
          <div className="modal-details-content">
            <div className="modal-language">
              <h3>Language</h3>
              <p>{repo.language ?? "-"}</p>
            </div>
            <div className="modal-desc">
              <h3>Description</h3>
              <p>{repo.description ?? "No description"}</p>
            </div>
            <div className="modal-created">
              <h3>Created Date</h3>
              <p>{createdDate}</p>
            </div>
            <div className="modal-updated">
              <h3>Last updated</h3>
              <p>{updatedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
