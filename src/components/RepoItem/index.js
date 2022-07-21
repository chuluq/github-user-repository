import { useState } from "react";
import Modal from "../Modal";

import "./styles.css";

const RepoItem = ({ repo }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="card" onClick={() => setModalOpen(true)}>
        <div className="card-details">
          <h1 className="card-name">{repo.name}</h1>
          <div>
            <p className="card-id">ID: {repo.id}</p>
            <p className="card-lang">Language: {repo.lang ?? "-"}</p>
          </div>
        </div>
        <span className="material-symbols-outlined">info</span>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          repo={repo}
          handleClick={handleCloseModal}
        />
      )}
    </>
  );
};

export default RepoItem;
