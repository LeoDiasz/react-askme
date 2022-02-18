import styled from "styled-components";

const SectionCreateRoomContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  h1 {
    font-size: 2.4rem;
    font-family: "Poppins", sans-serif;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin-top: 15px;
  }

  a  {
    align-self: flex-end;

    font-size: 1.4rem;
    font-weight: bold;
    color: #A24BD8;

    transition: filter 1s;
    
    &:hover {
      filter: brightness(0.9)
    }
  }

`;


const FormCreateRoom = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  input {
    height: 50px;
    width: 100%;
    padding: 0px 20px;

    background: transparent;
    border-radius: 8px;
    border: 1px solid #A8A8B3;

    ::placeholder {
      text-align: left;
      font-size: 1.6rem;
      color: #A8A8B3;
    }
    
  }   
`
const ButtonRoomWithPassword = styled.button`
  display: flex;
  align-items: center;
  align-self: end;
  gap: 12px;

  background: transparent;
  border: none;

  font-size: 1.2rem;
  color: #737380;

  cursor: pointer;

  :hover {
    filter: brightness(0.95);
  }

`

export {FormCreateRoom, SectionCreateRoomContent, ButtonRoomWithPassword}