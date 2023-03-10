import styled from "@emotion/styled";
const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  height: calc(100vh - 20px);
  background-color: #fdfdea;

  z-index: 30;

  img {
    width: 100%;
    height: 100%;

    object-fit: contain;
  }
`;
const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  opacity: 1;
  background: rgba(243, 110, 230, 0.2);
  transition: visibility 250ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 20;
`;

const StyledModalCloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    display: inline-block;
    width: 2em;
    height: 2em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
    &:hover,
    &:focus {
      fill: #5b034c;
      stroke: #5b0341;
      font-weight: 700;
    }
  }
`;

export { StyledBackdrop, StyledModal, StyledModalCloseBtn };

// .modal {
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 280px;
//   max-height: calc(100vh - 20px);
//   background-color: white;
//   padding: 40px 20px;
//   visibility: hidden;
//   opacity: 0;
//   z-index: 30;
//   &.active {
//     visibility: visible;
//     opacity: 1;
//   }
// }
// .modal-close-btn {
//   position: absolute;
//   top: 8px;
//   right: 8px;
//   background-color: transparent;
//   border: none;
//   width: 30px;
//   height: 30px;
//   padding: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
// }

// .icon-close {
//   display: inline-block;
//   width: 1em;
//   height: 1em;
//   stroke-width: 0;
//   stroke: currentColor;
//   fill: currentColor;
//   &:hover,
//   &:focus {
//     fill: #ff6b01;
//     stroke: #ff6b01;
//   }
// }
