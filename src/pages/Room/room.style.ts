import styled from "styled-components";

const DivRoomContent =  styled.div`
  height: 100vh;
  width: 100vw;
  
  background: #F8F8F8;
  overflow-x: hidden;

  header {
    display: flex;
    justify-content: space-around;
    align-items: center;

    height: 12%;

    border-bottom: 1px solid #E2E2E2; 

    div {
      display: flex;
      gap: 20px;
    }
    
  }

  main {
    display: flex;
    flex-direction: column;
    
    max-width: 800px;
    margin: 0 auto;
    margin-top: 60px;
    
    section {
      width: 100%;
    }
  }

  @media (max-width: 1000px) {
    header div div {
      button {
        right: -35px;
        width: 50px;
      }
    }
  }

  @media (max-width: 854px) {
    main {
      max-width: 600px;
    }

    header {

      div {
        gap: 10px;
      }
      img {
        width: 90px;
      }

      div div {
        p {
          display: none;
        }

        img {
          width: 35px;
        }
      }
    }
  }

  @media (max-width: 700px) {
    
    main {
      max-width: 500px;

    }

  }
  
  @media (max-width: 570px) {

    header div div {

      img {
        display: none;
      }
      
      button {
        left: 0;
        font-size: 1rem;
      }

    }
    main {
      max-width: 400px;
    }
    

    section div:first-child div:first-child {
      
      h1 {
        font-size: 1.4rem;
      }
    }

    section div:first-child div:first-child {
      
      span {
        display: none;
      }
      
    }

    form {

      div div {
        img {
          width: 25px;
        }
        span {
          font-size: 1.2rem;
        }
      }

      textarea {

        height: 80px;

        ::placeholder {
          font-size: 1.2rem;
        }
      }

      Button {
        font-size: 1.1rem;
        height: 30px;
      }

    }
  }

  @media (max-width: 500px) {
    main {
      max-width: 270px;
    }

    form div {
      Button {
        width: 20px;
      }
    }
  }
`

const SectionNewQuestion = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;

`;

const DivHeaderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div:last-child {
    margin-right: 25px;

    button {
      height: 27px;
      width: 140px;

      background: #ECECEC;
      border: none;
      border-radius: 8px;

      color: #7C7C88;
      font: bold 1.4rem "Poppins", sans-serif;

      cursor: pointer;
      transition: filter 1s;

      :hover {
        filter: brightness(0.97)
      }
    }
  }
`
const DivUserSignOut = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  position: relative;
  

  div {
    cursor: pointer;
    margin-right: 20px;

    img {
      width: 55px;
      border-radius: 50%;
     
      transition: filter 1s;
      :hover {
        filter: brightness(0.9)
      }
    }
    
   
  }

  button {
    position: absolute;
    right: -80px;
    border: none;
    height: 27px;
    width: 79px;

    background: #E4E4E4;
    border-radius: 8px;
  
    color: #4E4E58;

    cursor: pointer;

    transition: filter 1s;

    :hover {
      filter: brightness(0.95)
    }
  }
`

const DivRoomInfoText = styled.div`
  display: flex;
  align-items: flex-end;
  align-self: flex-start;
  
  h1 {
    font-size: 2.4rem;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    text-transform: capitalize;

    margin-right: 25px;
  }

  span {
    padding: 7px 20px;

    font-size: 1.4rem;
    color: #F8F8F8;

    background: #4AC1AC;
    border-radius: 51px;
  }
`;

const FormNewQuestion = styled.form`
  display: flex;
  flex-direction: column;

  textarea {
    width: 100%;
    height: 133px;
    padding: 20px;

    border-radius: 8px;
    border: none;

    font-size: 1.6rem;
    color: #737380;
  }

`;

const DivFormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
      
  div {
    display: flex;
    align-items: center;

    font-size: 1.4rem;
    font-weight: bold;

    img {
      border-radius: 50%;
      width: 32px;
      margin-right: 10px;
    }
  }

  Button {
    width: 25%;
  }
`;

const DivLoginUser = styled.div`
  margin-top: 10px;
  font-size: 1.4rem;

  button {
    cursor: pointer;
    background: transparent;
    border: none;
    font-weight: bold;
    
    color: #A24BD8;
    text-decoration: underline;
  }
`
const SectionListQuestions = styled.section`
  margin-bottom: 100px;
`

export {SectionNewQuestion, DivRoomContent, DivRoomInfoText, FormNewQuestion, DivFormFooter, SectionListQuestions, DivLoginUser, DivHeaderMain, DivUserSignOut}