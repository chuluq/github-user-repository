import "./styles.css";

const Modal = ({ isOpen, handleClick }) => {
  return (
    <div className={`modal ${isOpen ? "modal-show" : "modal-hidden"}`}>
      <div className="modal-content">
        <span
          className="material-symbols-outlined modal-close"
          onClick={handleClick}
        >
          close
        </span>
        <p>some text...</p>
      </div>
    </div>
  );
};

export default Modal;
