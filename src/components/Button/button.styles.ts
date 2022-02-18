import styled from "styled-components";

export const ButtonStyle  = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #4AC1AC;
  min-width: 160px;
  width: 100%;
  height: 50px;

  border-radius: 8px;
  border: none;

  font-size: 1.6rem;
  color: #F8F8F8;

  > img {
    margin-right: 10px;
  }

  cursor: pointer;

  transition: filter 0.5s;

  &:hover {
    filter: brightness(0.97);
  }

`;