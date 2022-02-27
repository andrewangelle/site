import { Form } from 'remix';
import styled from 'styled-components';

export const ContactWrapper = styled.div`
  background: #f0f0f0;
  width: 72%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  > * {
    padding: 1rem;
  }


  @media screen and (max-width: 760px) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;

export const CenterItems = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const StyledContactForm = styled(Form)` 
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: auto;

  label {
    font-family: 'Montserrat', sans-serif;
  }

  input {
    margin-bottom: 1rem;
    border-radius: 5px;
    border-width: 1px;
    padding: 8px;
  }

  input[type='textarea'] {
    padding: 8px 100px 100px 8px;  
  }

  button {
    font-family: 'Montserrat', sans-serif;
    background: transparent;
    border-radius: 8px;
    padding: 8px;
    margin: 10px auto;
    align-self: flex-end;
    cursor: pointer;

    &:active {
      background: lightskyblue;
    }
  }
`;

export const StyledFieldSet = styled.fieldset` 
  display: flex; 
  flex-direction: column; 
  border: none;
`;

export const SuccessMessage = styled.div` 
  width: 100%;
  height: 25px;
  margin: auto;
  background: lightgreen;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  font-weight: 600;
  font-family: Montserrat;
`;

export const ErrorMessage = styled(SuccessMessage)`
  background: indianred;
`

export const SuccessX = styled.div` 
  cursor: pointer;
`