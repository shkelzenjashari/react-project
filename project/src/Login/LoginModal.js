import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Login from "./Login";

const LoginModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <Login />
        </Modal>
      )}
    </>
  );
};
export default LoginModal;
