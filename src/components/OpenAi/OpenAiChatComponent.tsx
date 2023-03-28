import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Input,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IChat, useOpenAIChat } from "../../hooks/useOpenAIChat";

export interface IButtonsDefaultQuestionText {
  id: number;
  value: string;
  valueToShow: string;
}

interface openAIChatComponent {
  buttonsDefaultQuestionText: IButtonsDefaultQuestionText[];
  handleSetMessage: (value: string) => void;
}

export const OpenAIChatComponent = ({
  buttonsDefaultQuestionText,
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
      <SimpleGrid column={1} spacingY="2">
        {buttonsDefaultQuestionText &&
          buttonsDefaultQuestionText.map(
            (buttonDefaultQuestionText: IButtonsDefaultQuestionText) => (
              <Button
                key={buttonDefaultQuestionText.id}
                colorScheme="blue"
                rightIcon={<ArrowForwardIcon />}
                size="sm"
                display={"flex"}
                whiteSpace={"inherit"}
                height={"50px"}
                onClick={() => defaultQuestion(buttonDefaultQuestionText.value)}
              >
                <Text
                  lineHeight={1}
                  key={`text-${buttonDefaultQuestionText.id}`}
                >
                  {buttonDefaultQuestionText.valueToShow}
                </Text>
              </Button>
            )
          )}
      </SimpleGrid>
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
