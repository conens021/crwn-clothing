import HorizontalDivider from "../UI/HorizontalDivider/HorizontalDivider.component";
import { Modal } from "../UI/Modal/Modal.component";
import { AppModalBody, AppModalFooter, ModalBackdropContainer, ModalContainer } from "./AppModal.styles";
import AppModalHeading from "./AppModalHeading/AppModalHeading.component";

function AppModal({ children, isOpen, onModalCLose = () => { }, width, height, backgroundColor, modalTitle, modalFooter }) {
    return (
        <Modal isOpen={isOpen} onModalCLose={onModalCLose}>
            <ModalBackdropContainer>
                <ModalContainer
                    width={width}
                    height={height}
                    backgroundColor={backgroundColor}>
                    <AppModalHeading title={modalTitle} closeModal={onModalCLose} />
                    <HorizontalDivider />
                    <AppModalBody>
                        {children}
                    </AppModalBody>
                    <HorizontalDivider />
                    {
                        modalFooter &&
                        <AppModalFooter>
                            {modalFooter}
                        </AppModalFooter>
                    }

                </ModalContainer>
            </ModalBackdropContainer>
        </Modal>
    );
}

export default AppModal;