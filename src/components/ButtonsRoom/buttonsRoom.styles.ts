import styled from "styled-components";

type ClickAnswerProps = {
  clickAnswer?: boolean;
  
}

type ClickLikeProps ={
  likeId: string | undefined
}

const DivButtons = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  button {
    background: transparent;
    border: none;
    height: 27px;
    cursor: pointer;

    :hover {
      filter: brightness(0.5);
    }

    svg {
      height: 27px;
      width: 20px;
    }
  }

  @media (max-width: 570px) {
    margin-left: 5px;
    button {
      font-size: 1rem;
      svg {
        width: 15px;
      }
    }
  }
`



const ButtonLike = styled.button<ClickLikeProps>`
  display: flex;
  align-items: center;
 
  gap: 7px;
  font-size: 1.4rem;
  color: #737380;
  
  svg path {
    stroke: ${props => props.likeId && "#5DCE5B"};
  }
`

const ButtonAnswer = styled.button<ClickAnswerProps>`
  display: flex;
  align-items: center;

  gap: 7px;
  font-size: 1.4rem;
  color: #737380;
  
  svg path{
    stroke: ${props => props.clickAnswer && "#5DCE5B"};   
  }
`

const ButtonDelete = styled.button`
  display: flex;
  align-items: center;

  :active {
    svg path {
      stroke: #E73F5D; 
    }
  }
`
export {DivButtons, ButtonDelete, ButtonLike, ButtonAnswer}
