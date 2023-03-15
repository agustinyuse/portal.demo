import { ClaimSteps } from "../../components/stepsComponents/StepsComponent";
import { SimpleGrid } from "@chakra-ui/react";
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
