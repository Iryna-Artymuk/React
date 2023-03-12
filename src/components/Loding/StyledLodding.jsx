import { ImSpinner } from 'react-icons/im';
import styled from '@emotion/styled';
const StyledSpinner = styled(ImSpinner)`
  margin-right: 10px;
  animation: icon-spin 2s infinite linear;

  @keyframes icon-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`;
export { StyledSpinner };
