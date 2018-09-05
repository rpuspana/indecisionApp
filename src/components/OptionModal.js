import React from 'react';
import Modal from 'react-modal';

// stateless functional component
const OptionModal = (props) => (

    // build-in props for Modal from https://github.com/reactjs/react-modal
    // contentLabel = UX for reading web page tools
    // onRequestClose = hit ESC or press outside the modal => close modal 
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected option"
        onRequestClose={props.handleClearSelectedOption}
    >
        <h3>Selected option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;