import styled from 'styled-components';

export const ContactWrapper = styled.div`
  background: #f0f0f0;
  width: 72%;
  height: 100%;
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
`