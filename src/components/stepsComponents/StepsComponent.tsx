import { Box, Button, Flex } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import LoremIpsum from "react-lorem-ipsum";
import { ClaimCoverageDocComponent } from "../Claims/ClaimCoverageDocComponent";
import { ClaimCreateComponent } from "../Claims/ClaimCreateComponent";
import { ClaimDetailComponent } from "../Claims/ClaimDetailComponent";

const claimCreateComponent = (
  <Box mt={5}>
    <ClaimCreateComponent></ClaimCreateComponent>
  </Box>
);

const claimCoverageDocComponent = (
  <Box mt={5}>
    <ClaimCoverageDocComponent></ClaimCoverageDocComponent>
  </Box>
);

const claimDetailComponent = (
  <Box mt={5}>
    <ClaimDetailComponent></ClaimDetailComponent>
  </Box>
);

const content = (
  <Flex py={4}>
    <LoremIpsum p={1} />
  </Flex>
);

const steps = [
  { label: "Detalle del siniestro", content: claimCreateComponent },
  { label: "Completar documentación", content: claimCoverageDocComponent },
  { label: "Resúmen siniestro", content: claimDetailComponent },
];

export const ClaimSteps = () => {
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <Flex flexDir="column" width="100%">
      <Steps activeStep={activeStep}>
        {steps.map(({ label, content }) => (
          <Step label={label} key={label}>
            {content}
          </Step>
        ))}
      </Steps>
      {activeStep === steps.length ? (
        <Flex p={4}>
          <Button mx="auto" size="sm" onClick={reset}>
            Volver
          </Button>
        </Flex>
      ) : (
        <Flex width="100%" justify="flex-end" mt={10}>
          <Button
            isDisabled={activeStep === 0}
            mr={4}
            onClick={prevStep}
            size="sm"
            variant="ghost"
          >
            Atras
          </Button>
          <Button size="sm" onClick={nextStep}>
            {activeStep === steps.length - 1 ? "Final" : "Siguiente"}
          </Button>
        </Flex>
      )}
    </Flex>
  );
};
