import React from 'react';
import { useModal } from '../../context/Modal';

function OpenModalButton({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // optional: callback function that will be called once the modal is closed
  type
}) {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(modalComponent);
    if (onButtonClick) onButtonClick();
  };
  if (type === "delete-songsheet") {
    return (<i className="fa fa-trash" onClick={onClick}></i>)
  }
  if (type === "delete-setlist") {
    return (<i className="fa fa-trash" onClick={onClick}></i>)
  }
  if (type === "create-setlist") {
    return (
      <i className='fa fa-plus' onClick={onClick}>Create Setlist</i>
    )
  }
  if (type === "edit-setlist") {
    return (
      <i className='fa fa-pen' onClick={onClick}></i>
    )
  }
  if (type === "login") {
    return (
        <p onClick={onClick} id="login-btn">LOGIN</p>
    )
  }
  if (type === "signup") {
    return (
        <p onClick={onClick} id="signup-btn">SIGN UP</p>
    )
  }
  if (type === "add-to-setlist") {
    return <i className='fa fa-plus' onClick={onClick}>Add Songsheet to your setlist</i>
  }
  return (
    <button onClick={onClick}>{buttonText}</button>
  );
}

export default OpenModalButton;
