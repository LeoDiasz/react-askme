import styled from "styled-components";


const DivContent = styled.div`
  height: 100vh;
  width: 100vw;
  background: #F8F8F8;
  overflow-x: hidden;

  header {
    display: flex;
    align-items: center;
    justify-content: space-around;

    height: 12%;
    
    border-bottom: 1px solid #E2E2E2;

    img {
      width: 135px;
    }
  }

  main {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 60px;
  }
  

  @media (max-width: 854px) {
    
    main {
      max-width: 600px;
    }
  }

  @media (max-width: 700px) {
    
    header  {
      div div {
        display: none;
      }
      
      img {
        width: 100px;
      }
    }

    main {
      max-width: 500px;

    }

    section div:first-child div:first-child {
      
      h1 {
        font-size: 1.7rem;
        white-space: nowrap;
      }
    }

  }
  
  @media (max-width: 570px) {

    main {
      max-width: 400px;
    }

    section div:first-child div:first-child {
      
      span {
        display: none;
      }
    }
  }

  @media (max-width: 500px) {
    main {
      max-width: 270px;
    }
  
    section div:first-child div:first-child {
      
      h1 {
        font-size: 1.4rem;
      }
    }

    section div:first-child div:last-child {
      
      button {
        font-size: 1.1rem;
      }
    }
  }


`

const SectionListRooms = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

`


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
  

  div {
    display: flex;
    align-items: center;
    gap: 20px;

    margin-right: 20px;

    font-weight: bold;

    img {
      width: 55px;
      border-radius: 50%;
    }
    
    &::after {
      content: " ";
      height: 40px;
      width: 2px;
      background: #E2E2E2;
    
    }
  }

  button {
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
const DivTextsSection = styled.div`
  display: flex;
  align-items: flex-end;

  h1 {
    font: bold 2.4rem "Poppins", sans-serif;

    margin-right: 25px;
  }

  span {
    padding: 7px 20px;
    
    font-size: 1.4rem;
    color: #F8F8F8;

    background: #4AC1AC;
    border-radius: 51px;
  }
`

const DivListRoom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
`




export {DivContent, SectionListRooms, DivListRoom, DivTextsSection, DivHeaderMain, DivUserSignOut}