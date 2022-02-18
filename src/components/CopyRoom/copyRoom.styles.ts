import styled from "styled-components";

export const ButtonCopy = styled.button`
  display: grid;
  grid-template-columns: 30px 1fr;
  align-items: center;
  align-self: center;
  overflow: hidden;

  height: 43px;
  width: 230px;

  border: 2px solid #68ED66;
  border-radius: 8px;
  background: transparent;
  
  font-size: 1.4rem;
  font-weight: bold;
  color: #52525B;

  cursor: pointer;
  
  &:hover {
    filter: brightness(0.96)
  }
  
  div {
    align-items: center;
    justify-content: center;
    
    height: 100%;
    
    background: linear-gradient(130deg, #68ED66 0%, #4AC1AC 100%)
  }
  

  img {
    height: 40%;
  }



  @media(max-width: 854px) {
    width: 50%;
    height: 30px;
    grid-template-columns: 12px 1fr;
    font-size: 0.7rem;
    

    img {
      display: none;
      height: 40%;
    }
  
    span {
      flex: 20;
    }

  }

  
`;