import styled from 'styled-components'

export const NotificationCircleContainer = styled.div`
    color: white;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    font-size: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color:${props => props.backgroundColor};
    color : ${props => props.textColor};
`