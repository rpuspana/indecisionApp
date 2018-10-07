import React from 'react';
import Modal from 'react-modal';

// stateless functional component
const OptionModal = (props) => (

    // build-in props for Modal from https://github.com/reactjs/react-modal
    // contentLabel = UX for reading web page tools
    // onRequestClose = hit ESC or press outside the modal => close modal 
    // closeTimeoutMS={Nms} = N ms before taking the Modal div out of the DOM
    // className="modal" - override the default style of React Modal for modal content, with the modal user-made classs in the file_modal.scss
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected option"
        closeTimeoutMS={250}
        className="modal"
    >
        <h3 className="modal__title">Selected option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;