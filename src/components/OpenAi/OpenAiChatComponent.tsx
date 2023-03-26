import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Input,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IChat, useOpenAIChat } from "../../hooks/useOpenAIChat";

interface openAIChatComponent {
  buttonDefaultQuestionText: string;
  handleSetMessage: (value: string) => void;
}

export const OpenAIChatComponent = ({
  buttonDefaultQuestionText,
  handleSetMessage,
}: openAIChatComponent) => {
  const {
    isLoading,
    messages,
    handleSubmit,
    defaultQuestion,
    clear,
    message,
    setMessage,
  } = useOpenAIChat();

  return (
    <>
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
                  onClick={() => handleSetMessage(message.content)}
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
            <Box>{!isLoading && <Button type="submit">Enviar</Button>}</Box>

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
    </>
  );
};
