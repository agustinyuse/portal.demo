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
  useColorModeValue,
} from "@chakra-ui/react";

export const AccordionFAQSComponent = () => {
  let headingAccordionBg = useColorModeValue("gray.50", "0");
  let headdingAccordionTextColor = useColorModeValue("gray.700", "#ffffffeb");
  let headingAccordionHoverBg = useColorModeValue("gray.100", "whiteAlpha.100");

  const accordionHeading = {
    backgroundColor: headingAccordionBg,
  };

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
        <Stack spacing="4">
          <Accordion defaultIndex={[0]}>
            <AccordionItem
              p={5}
              sx={accordionHeading}
              _hover={{ backgroundColor: headingAccordionHoverBg }}
            >
              {" "}
              <h2>
                <AccordionButton
                  _hover={{
                    background: "",
                    color: "",
                  }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    <Heading size="md" color={headdingAccordionTextColor}>
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

            <AccordionItem
              p={5}
              sx={accordionHeading}
              _hover={{ backgroundColor: headingAccordionHoverBg }}
            >
              <h2>
                <AccordionButton
                  p={3}
                  _hover={{
                    background: "",
                    color: "",
                  }}
                >
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
            <AccordionItem
              p={5}
              sx={accordionHeading}
              _hover={{
                background: headingAccordionHoverBg,
              }}
            >
              <h2>
                <AccordionButton
                  p={3}
                  _hover={{
                    background: "",
                    color: "",
                  }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    <Heading size="md" color={headdingAccordionTextColor}>
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
