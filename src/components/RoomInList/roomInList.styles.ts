import styled from "styled-components";


const DivRoomInfo = styled.div`
  display: flex;
  min-width: 330px;
  width: 40%;

  color: #737380;
  font-size: 1.4rem;
  
  p {
    width: 100%;
  }
  

`;


const ButtonContent = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  
  height: 76px;
  width: 100%;
  padding: 20px;

  background: #FEFEFE;
  border: none;
  border-radius: 8px;

  cursor: pointer;

  :hover {
    filter: brightness(0.98);
    border: 2px solid #4AC1AC;
  }
  

  @media (max-width: 700px) {
    height: 50px;

    ${DivRoomInfo} {
      display: none;
    }

  }

  @media (max-width: 570px) {
    
    div:first-child p {
      font-size: 1.2rem;
      
    }

    div:last-child input {
      width: 90px;
      height: 12px;
      padding: 10px 1px;
    

      ::placeholder {
        font-size: 1rem;
      }
      
    }

  }

  @media (max-width: 500px) {
  
    div:first-child img {
      display: none;
    }
  }

`;

const ListRoom = styled.li`
  list-style: none;
  margin-top: 20px;
`;

const DivUser = styled.div`
  display: flex;
  align-items: center;
  max-width: 150px;
  width: 100%;

  img {
    width: 32px;
    margin-right: 10px;
    border-radius: 50%;
    
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2px;

    word-wrap: break-word;
    text-align: start;
    color: #737380;

    p {
      font-size: 1.4rem;
      font-weight: bold;
    }

    span {
      font-size: 1rem;
    }

  }
`;


const DivRoomPrivate = styled.div`
  display: flex;
  justify-content: end;
  gap: 20px;
  width: 20%;
`;

const FormPassword = styled.form`
  input {
    width: 130px;
    height: 21px;
    padding: 11px 15px;
    
    border-radius: 8px;
    border: 2px solid #A8A8B3;

    ::placeholder {
      text-align: center;
      color: #737380;
      font-size: 1.2rem;
    }

  }

`;

export {DivUser, DivRoomInfo, ListRoom, DivRoomPrivate, ButtonContent, FormPassword};