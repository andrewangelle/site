import { Form } from 'remix';
import styled from 'styled-components';

export const ContactWrapper = styled.div`
  background: #f0f0f0;
  width: 72%;
  /* height: 100%; */
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

export const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  }

  input[type='textarea'] {
    padding: 0px 100px 100px 0px;  
  }

  button {
    font-family: 'Montserrat', sans-serif;
    background: transparent;
    border-radius: 8px;
    padding: 8px;
    margin: 10px auto;
    align-self: flex-end;
  }
`;

export const SuccessMessage = styled.div` 
  width: 100%;
  height: 25px;
  margin: auto;
  background: lightgreen;
  padding: 8px;
  display: flex;
  justify-content: space-between;
`

export const SuccessX = styled.div` 
  cursor: pointer;
`