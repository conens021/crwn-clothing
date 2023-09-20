import { ModalHeadingContainer } from "../AppModal.styles";
import { CloseModalContainer } from "./AppModalHeading.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Typography from "../../UI/Typography/Typography.component";

function AppModalHeading({ title = '', closeModal = () => { } }) {
    return (
        <ModalHeadingContainer>
            <CloseModalContainer onClick={closeModal}>
                <FontAwesomeIcon icon={faXmark} />
            </CloseModalContainer>
            <Typography component="h3" align="center">
                {title}
            </Typography>
        </ModalHeadingContainer>
    );
}

export default AppModalHeading;