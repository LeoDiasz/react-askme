import styled from "styled-components";



const HeaderContent = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 6;
  gap: 20px;
  background: #217566;

  position: relative;
  overflow: hidden;

  div {
    display: flex;
    flex-direction: column;
    gap: 6px;

    margin-top: 100px;
    padding: 80px;
  
    text-align: left;

    h1 {
      font: bold 4rem  "Poppins", sans-serif ; 
      color: #fff;
    }

    p {
      font-size: 2.4rem;
      color: #F8F8F8;
    }
  }


  img {
    min-width: 700px;
    width: 100%;
    position: absolute;
    right: -210px;
    bottom: 0px;
    z-index: 1;
  }

`;

const MainContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 8;
  gap: 20px;
  background: #F8F8F8;


  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    width: 30%;
    min-width: 300px;
    margin: 0 auto;
    
    div {
      
      > img {
        width: 250px;
        margin-bottom: 30px;
      }
    }
  }
`;

const DivContent = styled.div`
  display: flex;
  flex-direction: row-reverse;

  height: 100vh;
  width: 100vw;

 

  @media (max-width: 830px) {
    ${HeaderContent} {
      display: none;
    }
  }
`;

export {DivContent, MainContent, HeaderContent};