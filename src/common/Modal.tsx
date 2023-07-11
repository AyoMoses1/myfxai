import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Heading,
  Box,
} from '@chakra-ui/react';
import styled from 'styled-components';

type Props = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  button?: JSX.Element;
  size?: string;
  overlay?: boolean;
};
function ModalComponent(props: Props) {
  return (
    <Modal
      size={props?.size ?? 'md'}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      {props.overlay && <ModalOverlay />}
      <StyledModalContent bgColor="dashboardBg.light">
        <StyledBox>
          <ModalHeader>
            <Heading variant="modalHeader">{props.title}</Heading>
          </ModalHeader>
          <ModalBody maxH="70vh" overflow="auto">
            {props.children}
          </ModalBody>
          <ModalFooter>{props.button}</ModalFooter>
        </StyledBox>
      </StyledModalContent>
    </Modal>
  );
}

export default ModalComponent;

const StyledModalContent = styled(ModalContent)`
  margin-top: 10% !important;
  border-left: 1px solid #000;
  border-bottom: 1px solid #003566;
  padding-left: 10px;
  padding-bottom: 10px;
  background: ${(props) => props.bgColor} !important;
`;

//  // box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.03),
  //   0px 20px 24px -4px rgba(16, 24, 40, 0.08);
const StyledBox = styled(Box)`
  background: white;
  border-radius: 10px;
`;
