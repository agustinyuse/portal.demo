import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Stack,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaSearchengin } from "react-icons/fa";

interface IDrawerProps {
  headerText: string;
  buttonToOpenText: string;
  children: any;
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  size: string;
}

export function DrawerComponent({
  headerText,
  buttonToOpenText,
  children,
  onOpen,
  onClose,
  isOpen,
  size,
}: IDrawerProps) {
  const firstField = React.useRef<any>();

  return (
    <>
      <Button leftIcon={<FaSearchengin />} colorScheme="blue" onClick={onOpen}>
        {buttonToOpenText}
      </Button>
      <Drawer
        size={size}
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">{headerText}</DrawerHeader>

          <DrawerBody>{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
