import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
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
      {props.overlay && (
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
      )}
      <ModalContent bgColor="dashboardBg.light">
        <StyledBox>
          <ModalHeader>
            <Heading variant="modalHeader">{props.title}</Heading>
          </ModalHeader>
          <ModalBody maxH="70vh" overflow="auto">
            {props.children}
          </ModalBody>
          <ModalFooter>{props.button}</ModalFooter>
        </StyledBox>
      </ModalContent>
    </Modal>
  );
}

export default ModalComponent;

const StyledBox = styled(Box)`
  background: white;
  border-radius: 10px;
  box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.03),
  0px 20px 24px -4px rgba(16, 24, 40, 0.08);
`;
