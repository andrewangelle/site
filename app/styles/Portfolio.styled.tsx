import styled from 'styled-components';

export const Card = styled.div` 
  position: relative;
  box-sizing: border-box;
  padding: 1rem;
  margin: 1rem;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  -webkit-font-feature-settings: 'tnum';
  font-feature-settings: 'tnum', "tnum";
  position: relative;
  border-radius: 2px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: start;

  h3 {
    margin: 0;
  }  

  p {
    text-align: left;
    width: 100%;
    display: flex;
  }
  
  footer {
    display: flex;
    margin: 0.25rem auto;
    align-items: start;
    width: 100%;

    > * {
      margin-right: 1rem;
    }
  }

  @media screen and (max-height: 675px) {
    padding: 0.25rem;
    margin: 0;
  }

  @media screen and (max-height: 432px) {
    padding: 0 0 0 12px;
    margin: 0;
    font-size: 12px;
  }

  @media screen and (max-width: 768px) {
    padding: 0.25rem 0.5rem;
    margin: 0.5rem;
  }

  @media screen and (max-width: 484px) {
    padding: 0.25rem 0.5rem;
  }
`