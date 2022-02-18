import styled from "styled-components";


const SectionHomeContent = styled.section`
  width: 100%;;
  display: flex;
  align-items: center;
  gap: 30px;
  flex-direction: column;

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

const ButtonGoogle  = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50px;

  background: #fff;
  border-radius: 8px;
  border: 1px solid #A8A8B3;
  
  font-size: 1.6rem;
  font-weight: 700;

  cursor: pointer;

  transition: filter 1s;

  &:hover {
    filter: brightness(0.97);
  }

  img {
    border-radius: 50%;
    padding: 3px;
    margin-right: 10px;
  }

`


const DivSeparator = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  font-size: 1.4rem;
  color: #A8A8B3;
  white-space: nowrap;
  
  &::before {
    content: "";
    height: 2px;
    width: 100%;

    margin-right: 15px;
    background: #A8A8B3;
  }

  &::after {
    content: "";
    height: 2px;
    width: 100%;

    margin-left: 15px;
    background: #A8A8B3;
    
  }
`
export {ButtonGoogle, SectionHomeContent, DivSeparator, FormEnterInRoom}