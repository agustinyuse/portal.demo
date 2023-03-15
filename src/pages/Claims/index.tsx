import { ClaimSteps } from "../../components/StepsComponents/StepsComponent";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { AccordionFAQSComponent } from "../../components/Accordion/AccordionComponent";

export const ClaimCreatedView = () => {
  return (
    <>
      <SimpleGrid column={1} spacing="5">
        <ClaimSteps></ClaimSteps>
        <AccordionFAQSComponent></AccordionFAQSComponent>
      </SimpleGrid>
    </>
  );
};
