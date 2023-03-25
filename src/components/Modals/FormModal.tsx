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
  Stack,
  useDisclosure,
  Text,
  Alert,
  AlertIcon,
  Box,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import { useOpenAIChat, IChat } from "../../hooks/useOpenAIChat";

interface IModalProps {
  headerText: string;
  buttonToOpenText: string;
  buttonDefaultQuestionText: string;
  handleSetMessage: (value: string) => void;
}

export function FormModal({
  headerText,
  buttonToOpenText,
  buttonDefaultQuestionText,
  handleSetMessage,
}: IModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isLoading,
    messages,
    handleSubmit,
    defaultQuestion,
    clear,
    message,
    setMessage,
  } = useOpenAIChat();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const selectMessage = (value: string) => {
    handleSetMessage(value);
    onClose();
  };

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
          <ModalBody pb={6}>
            <Box>
              <Button
                colorScheme="blue"
                rightIcon={<ArrowForwardIcon />}
                size="sm"
                display={"flex"}
                whiteSpace={"inherit"}
                height={"50px"}
                onClick={() => defaultQuestion(buttonDefaultQuestionText)}
              >
                <Text lineHeight={1}>{buttonDefaultQuestionText}</Text>
              </Button>
            </Box>

            <Stack mt={5}>
              {messages &&
                messages.map((message: IChat, i: any) => (
                  <Box key={i}>
                    <Text key={`prompt-${i}`}> {message.prompt}</Text>
                    <Alert
                      status="info"
                      key={`alert-${i}`}
                      display="flex"
                      justifyContent={"space-between"}
                    >
                      <AlertIcon key={`alertIcon-${i}`} />
                      {message.content}
                      <Button
                        key={`button-${i}`}
                        rightIcon={<ArrowForwardIcon />}
                        onClick={() => selectMessage(message.content)}
                      ></Button>
                    </Alert>
                  </Box>
                ))}
            </Stack>
            <Stack mt={5}>
              <form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                {isLoading && (
                  <Box display={"flex"} justifyContent="center" mt={5}>
                    <Spinner size={"md"}></Spinner>
                  </Box>
                )}

                <Box display="flex" justifyContent={"space-between"} mt="5">
                  <Box>
                    {!isLoading && <Button type="submit">Enviar</Button>}
                  </Box>

                  <Box>
                    <Button
                      type="button"
                      disabled={isLoading}
                      onClick={() => clear()}
                    >
                      Limpiar
                    </Button>
                  </Box>
                </Box>
              </form>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
