import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
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
import axios from "axios";
import React, { useState } from "react";

interface message {
  prompt: string;
  content: string;
}

export function FormModal({ onSetMessage }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setMessage("");
    setIsLoading(true);
    axios
      .post("https://portalautogestionapi.azurewebsites.net/chat", { message })
      .then((response) => {
        console.log(response);
        setMessages([...messages, response.data]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const clear = () => {
    setMessages([]);
  };

  const button1 = (message: string) => {
    setMessage("");
    setIsLoading(true);
    axios
      .post("https://portalautogestionapi.azurewebsites.net/chat", { message })
      .then((response) => {
        console.log(response);
        setMessages([...messages, response.data]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const selectMessage = (value: string) => {
    onSetMessage(value);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Necesita alguna sugerencia ?</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"md"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sugerencias para detallar un siniestro</ModalHeader>
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
                onClick={() =>
                  button1(
                    "Sugerencia de como detallar el reclamo de un siniestro"
                  )
                }
              >
                <Text lineHeight={1}>
                  Sugerencia de como detallar el reclamo de un siniestro
                </Text>
              </Button>
            </Box>

            <Stack mt={5}>
              {messages &&
                messages.map((message: message, i: any) => (
                  <>
                    <Text> {message.prompt}</Text>
                    <Alert
                      status="info"
                      key={i}
                      display="flex"
                      justifyContent={"space-between"}
                    >
                      <AlertIcon />
                      {message.content}
                      <Button
                        rightIcon={<ArrowForwardIcon />}
                        onClick={() => selectMessage(message.content)}
                      ></Button>
                    </Alert>
                  </>
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
