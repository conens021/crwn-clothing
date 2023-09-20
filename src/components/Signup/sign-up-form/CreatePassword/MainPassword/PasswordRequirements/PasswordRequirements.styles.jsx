import styled from "styled-components";
import { colors } from "../../../../../../styles/colors";


export const PasswordRequirementsContainer = styled.div`
    color : ${props => props.allValid ? colors.success.default : colors.error.default};
    display:flex;
    flex-direction:column;
    row-gap:.5rem;
`

export const PasswordRequirementsList = styled.ul`
    padding-left:3rem;
`


export const PasswordRequirementsItem = styled.li`
    color : ${props => props.valid ? colors.success.default : colors.error.default} ;
`
