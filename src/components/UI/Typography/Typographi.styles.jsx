import styled from "styled-components";

export const TypographyContainer = styled.p`
    font-size : ${props => props.fontSize};
    color : ${props => props.color};
    font-weight:${props => props.fontWeight};
    font-style : ${props => props.fontStyle};
    margin-bottom:${props => props.marginBottom};
    text-align : ${props => props.align};
    position:relative;
`