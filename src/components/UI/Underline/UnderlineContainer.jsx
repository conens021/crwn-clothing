import styled from "styled-components";

export const UnderlineContainer = styled.div`
    position:relative;
    display:inline;
    width:100%;
    height:100%;
    &::after {
        content: '';
        width: 100%;
        height: ${props => props.height};
        border-bottom-left-radius : ${props => props.first ? '15px' : '' };
        border-top-right-radius : ${props => props.last ? '15px' : '' };
        position: absolute;
        bottom: 3px;
        left: 0;
        background-color: ${props => props.color};
        opacity: .45;
      }
    }
`