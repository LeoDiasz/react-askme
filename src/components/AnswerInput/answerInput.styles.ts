import styled from "styled-components";

const FormAnswer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 95%;
  height: 64px;
  
  margin-top: 8px;
  padding: 20px;

  background: #FEFEFE;
  border-radius: 8px;

  @media (max-width: 570px) {
    height: 50px;

    input {
      
      ::placeholder {
        font-size: 1.2rem;
      }
    }

    Button {
      min-width: 80px;
    }
  }

  input {
    height: 50px;
    width: 77%;
    
    background: transparent;
    border: none;
    
    font-size: 1.6rem;
    color: #737380;

    &:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }
  }

  Button {
    width: 50px;
    height: 27px;

    text-align: center;
    font-size: 1.2rem;
  }

`;

export {FormAnswer};