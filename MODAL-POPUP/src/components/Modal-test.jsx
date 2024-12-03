/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import Modal from "./Modal";
import "./Modal.css";

const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
          id={"custom-id"}
          header={<h1>Modal Header</h1>}
          footer={<h1>Modal Footer</h1>}
          onClose={onClose}
          body={<div>Modal body</div>}
        />
      )}
    </div>
  );
};

export default ModalTest;
