import React, { useState } from "react";
import Modal from "../Modal/Modal";

const CongratulationsModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <div>“Congratulations! You have successfully logged in!</div>
        </Modal>
      )}
      <button onClick={() => setIsModalOpen(true)}>OK</button>
    </>
  );
};

export default CongratulationsModal;
