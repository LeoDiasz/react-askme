import styled from "styled-components";

export const ButtonDelete = styled.button`
  align-self: center;
  max-width: 131px;
  widtH: 100%;
  height: 43px;
  padding: 0 10px;

  background: transparent;
  border-radius: 8px;
  border: 2px solid #55D193;

  font-size: 1.4rem;
  font-weight: bold;
  color: #4AC1AC;
  text-align: center;

  cursor: pointer;

  :hover {
    filter: brightness(0.95)
  }

  @media(max-width: 854px) {
    width: 40%;
    height: 30px;
    margin-right: 10px;

    font-size: 1rem;

  }

 
`