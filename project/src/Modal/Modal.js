import React from "react";
import "./modal.css";

const Modal = ({ children, setIsModalOpen }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div className="x-icon" onClick={() => setIsModalOpen(false)}>
          X
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
