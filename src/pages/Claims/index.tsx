import { SimpleGrid } from "@chakra-ui/react";
import { AccordionFAQSComponent } from "../../components/Accordion/AccordionComponent";
import { ClaimCreateStepComponent } from "../../components/claims/ClaimCreateStepComponent";

export const ClaimCreatedView = () => {
  return (
    <>
      <SimpleGrid column={1} spacing="5">
        <ClaimCreateStepComponent/>
        <AccordionFAQSComponent></AccordionFAQSComponent>
      </SimpleGrid>
    </>
  );
};
