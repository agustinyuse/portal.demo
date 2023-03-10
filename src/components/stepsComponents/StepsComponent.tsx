import { Box, Button, Container, Flex } from '@chakra-ui/react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import LoremIpsum from 'react-lorem-ipsum';
import { ClaimDetailComponent } from '../claims/ClaimDetailComponent';

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
  { label: 'Detalle del siniestro', content: claimDetailComponent},
  { label: 'Completar documentación', content },
  { label: 'Resúmen siniestro', content },
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
            Reset
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
            Prev
          </Button>
          <Button size="sm" onClick={nextStep}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Flex>
      )}
    </Flex>
  );
};