import { Button, Flex } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";


export const StepsComponent = ({props}: any) => {
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <Flex flexDir="column" width="100%">
      <Steps activeStep={activeStep}>
      {props.map(({ label, content }: any) => (
          <Step label={label} key={label}>
            {content}
          </Step>
        ))}
      </Steps>
      {activeStep === props.length ? (
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
            {activeStep === props.length - 1 ? "Final" : "Siguiente"}
          </Button>
        </Flex>
      )}
    </Flex>
  );
};
