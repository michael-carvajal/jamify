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
    return (<i className="" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 md:w-6 h-4 md:h-6 hover:text-ug-red cursor-pointer">
        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
      </svg>

    </i>)
  }
  if (type === "delete-setlist" || type === "delete-rating")  {
    return (<i className="fa fa-trash p-0" onClick={onClick}></i>)
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
      <button type='submit' onClick={onClick} className="bg-ug-red w-full hover:bg-ug-yellow text-white font-bold py-2 px-4 border-b-4 border-ug-yellow hover:border-ug-red rounded text-sm md:text-base">
        Login
      </button>
    )
  }
  if (type === "signup") {
    return (
      <button type='submit' onClick={onClick} className="bg-ug-yellow  w-full hover:bg-ug-red text-white font-bold py-2 px-4 border-b-4 border-ug-red hover:border-ug-yellow rounded text-sm md:text-base">
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
  } else if (type === "has-account-login") {
    return (
      <>
        <p className="text-xs">Already have an account? <span id="login-demo" className="font-bold" onClick={onClick}>Login</span></p>
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
