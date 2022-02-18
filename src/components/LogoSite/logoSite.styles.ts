import styled from "styled-components";

type LogoProps = {
    isBig?:  boolean;
};

const Button = styled.button`
    border: none;
    background: none;

    margin-bottom: 10px;
    cursor: pointer;

    :hover {
        filter: brightness(0.97);
    }
`;

const Logo = styled.img<LogoProps>`
    width: ${props => props.isBig ? "187px" : "135px"};
`;

export {Logo, Button};