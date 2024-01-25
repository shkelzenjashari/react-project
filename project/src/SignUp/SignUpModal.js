import React, { useState } from "react";
import Modal from "../Modal/Modal";
import SignUp from "./SignUp";

const SignUpModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <SignUp />
        </Modal>
      )}
    </>
  );
};
export default SignUpModal;
