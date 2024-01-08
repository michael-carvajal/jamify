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
  if (type === "delete-setlist" || type === "delete-rating")  {
    return (<i className="fa fa-trash" onClick={onClick}></i>)
  }
  if (type === "create-setlist") {
    return (
      <div onClick={onClick}>

        <i className='fa fa-plus' ></i>
        <span id='create-setlist'>CREATE SETLIST</span>
      </div>
    )
  }
  if (type === "edit-setlist") {
    return (
      <i className='fa fa-pencil' onClick={onClick}></i>
    )
  }
  if (type === "login") {
    return (
      <button type='submit' onClick={onClick} className="bg-ug-red w-full hover:bg-ug-yellow text-white font-bold py-2 px-4 border-b-4 border-ug-yellow hover:border-ug-red rounded">
        Login
      </button>
    )
  }
  if (type === "signup") {
    return (
      <button type='submit' onClick={onClick} className="bg-ug-yellow  w-full hover:bg-ug-red text-white font-bold py-2 px-4 border-b-4 border-ug-red hover:border-ug-yellow rounded">
        Sign Up
      </button>
    )
  }
  if (type === "add-to-setlist") {
    return (
      <div className='add-to-setlist' onClick={onClick}><i className='fa fa-plus' ></i><span>Add to Setlist</span></div>
    )
  }
  if (type === "no-account-yet") {
    return(
    <>
        <p className="text-xs">Don't have an account yet? <span id="login-demo" className="font-bold" onClick={onClick}>Sign up</span></p>
    </>)
  }
  switch (type) {
    case 'Artist':

      return <span onClick={onClick}><i className='fa fa-plus'></i> {type}</span>
    case 'Genre':

      return <span onClick={onClick}><i className='fa fa-plus'></i> {type}</span>
    case 'Album':

      return <span onClick={onClick}><i className='fa fa-plus'></i> {type}</span>

    default:
      break;
  }
  return (
    <button onClick={onClick}>{buttonText}</button>
  );
}

export default OpenModalButton;
