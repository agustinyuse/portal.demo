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
import React, { useEffect, useState } from "react";
import { FiCommand } from "react-icons/fi";
import io from "socket.io-client";

const backendSite: string | undefined = process.env
  .REACT_APP_BACKENDSITE_URL as string;
const socket = io("https://portalautogestionapi.azurewebsites.net");

interface message {
  prompt: string;
  content: string;
}

export function FormModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    socket.on("chat message", function (msg: message) {
      setMessages([...messages, msg]);
      setIsLoading(false);
    });
  }, [messages]);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    socket.emit("chat message", message);
    setMessage("");
    setIsLoading(true);
  };

  const clear = () => {
    setMessages([]);
  };

  const button1 = (message: string) => {
    socket.emit("chat message", message);
    setMessage("");
    setIsLoading(true);
  };

  return (
    <>
      <Button onClick={onOpen}>Necesita alguna sugerencia ?</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"lg"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sugerencias para detallar un siniestro</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <ButtonGroup variant="outline" spacing="6">
              <Button
                colorScheme="blue"
                rightIcon={<ArrowForwardIcon />}
                onClick={() =>
                  button1(
                    "Sugerencia de como detallar el reclamo de un siniestro"
                  )
                }
              >
                Sugerencia de como detallar el reclamo de un siniestro
              </Button>
            </ButtonGroup>

            <Stack mt={5}>
              {messages &&
                messages.map((message: message, i: any) => (
                  <>
                    <Text> {message.prompt}</Text>
                    <Alert status="info" key={i}>
                      <AlertIcon />
                      {message.content}
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

                <Stack
                  direction={["column", "row"]}
                  display="flex"
                  justifyContent={"space-between"}
                >
                  <Box>
                    {!isLoading && (
                      <Button type="submit" mt={5}>
                        Enviar
                      </Button>
                    )}
                  </Box>

                  <Box>
                    <Button type="button" mt={5} onClick={() => clear()}>
                      Limpiar
                    </Button>
                  </Box>
                </Stack>
              </form>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Guardar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}