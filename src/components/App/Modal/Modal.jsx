import { Component } from "react";
import {
  StyledModal,
  StyledBackdrop,
  StyledModalCloseBtn,
} from "./ModalStyled";
import { AiOutlineClose } from "react-icons/ai";
class Modal extends Component {
  render() {
    return (
      <StyledBackdrop>
        <StyledModal>
          <img src={this.props.selectedImg} alt=""></img>
          <StyledModalCloseBtn onClick={this.props.toggleModal}>
            <AiOutlineClose />
          </StyledModalCloseBtn>
        </StyledModal>
      </StyledBackdrop>
    );
  }
}

export default Modal;
