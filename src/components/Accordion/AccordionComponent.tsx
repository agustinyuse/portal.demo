import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

export const AccordionFAQSComponent = () => {
  return (
    <Card boxShadow={0}>
      <CardHeader>
        <Heading size="lg" textAlign={"center"}>
          FAQS
        </Heading>
        <Text textAlign={"center"}>
          <strong>¿ Dudas ?</strong> Mira las consultas más frecuentes que
          podrán ayudarte
        </Text>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Accordion defaultIndex={[0]}>
            <AccordionItem p={5}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Heading size="md">
                      {" "}
                      ¿Cuanto demora la resolución del Sinietro?
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem p={5}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Heading size="md">
                      ¿En donde se me va a acreditar la indemnización en caso
                      que sea favorable?
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem p={5}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Heading size="md">
                      ¿Que pasa sino tengo toda la documentación en este
                      momento?
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                ¿A donde me puedo contactar si tengo dudas?
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
      </CardBody>
    </Card>
  );
};
