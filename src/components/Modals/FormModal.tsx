import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { Children } from "react";

interface IModalProps {
  headerText: string;
  buttonToOpenText: string;
  children: any;
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
}

export function FormModal({
  headerText,
  buttonToOpenText,
  children,
  isOpen,
  onClose,
  onOpen,
}: IModalProps) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button onClick={onOpen}>{buttonToOpenText}</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"md"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{headerText}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
