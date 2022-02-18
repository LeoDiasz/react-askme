import styled from "styled-components";

const SectionContent = styled.section`
  width: 100%;;
  display: flex;
  align-items: center;
  gap: 30px;
  flex-direction: column;

  h1 {
    font-size: 2.4rem;
    font-family: "Poppins", sans-serif;
    margin-bottom: 20px;
    text-align: center;
  }

  a {
    align-self: flex-end;
    
    font-size: 1.5rem;
    font-weight: bold;
    color: #A24BD8;

    transition: filter 1s;

    &:hover {
      filter: brightness(0.9)
    }
  }
`


const FormEnterInRoom = styled.form`
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

    text-align: left;
    font-size: 1.6rem;
    color: #A8A8B3;
  }

`

export {FormEnterInRoom, SectionContent}