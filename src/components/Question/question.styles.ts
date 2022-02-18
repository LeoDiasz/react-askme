import styled from "styled-components";

const ListQuestion = styled.li`
  list-style: none;
  margin-top: 20px;
`;

const SectionQuestion = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  word-wrap: break-word;
  
  width: 100%;
  height: 152px;
  padding: 10px 30px;
 
  background: #FEFEFE;
  border-radius: 8px;
  
  p {
    font-size: 1.6rem;
    width: 100%;
 
  }

  > div {
    display: flex;
    justify-content: space-between;

    margin-top: 5px;
   
    > img {
      cursor: pointer;
    }
    
  }

  @media (max-width: 570px) {
    height: 120px;
    padding: 5px 20px;

    p {
      font-size: 1.2rem;
    }

    div {

      img {
        width: 25px;
      }

      span {
        font-size: 1rem;
      }
    }
  }



`;

const DivUser = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    border-radius: 50%;
    margin-right: 10px;
  }

  span {
    font-size: 1.4rem;
    color: #737380;
  }
`;

const SectionAnswer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: end;

`;

export {DivUser, SectionQuestion, ListQuestion, SectionAnswer};