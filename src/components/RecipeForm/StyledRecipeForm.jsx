import styled from '@emotion/styled';
import { Form as CustomForm } from 'formik';
import { ErrorMessage as CustomErrorMessage } from 'formik';
// import {Form, Field } from 'formik';

// const StyledForm = Form`

// `

// export default { StyledForm };

const StyledForm = styled(CustomForm)`
  width: 70%;
  padding: 20px;
  display: flex;
  gap: 20px;
  /* border: 2px solid black; */
  justify-content: space-between;
  /* margin: auto; */
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
const StyledLable = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
  padding: 10px;
  border: 2px solid black;

  border-radius: 10px;
  width: 100%;
  box-shadow: 0.3em 0.3em rgba(0.4, 0.4, 0.4, 0.4);

  input {
    padding: 10px;
    font-size: 18px;

    border-radius: 10px;
  }
  select {
    padding: 10px;
    font-size: 18px;

    border-radius: 10px;
  }
`;

const StyledErrorMessage = styled(CustomErrorMessage)`
  color: tomato;
`;
const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: blueviolet;
  border-radius: 10px;
  font-size: 18px;
  color: aliceblue;
`;

export {
  StyledLable,
  StyledButton,
  StyledForm,
  StyledErrorMessage,
};
