import { Box } from "@chakra-ui/react";
import { Step } from "chakra-ui-steps";
import { StepsComponent } from "../stepsComponents/StepsComponent";
import { ClaimCoverageDocComponent } from "./ClaimCoverageDocComponent";
import { ClaimCreateComponent } from "./ClaimCreateComponent";
import { ClaimDetailComponent } from "./ClaimDetailComponent";

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


const steps = [
  { label: "Detalle del siniestro", content: claimCreateComponent },
  { label: "Completar documentación", content: claimCoverageDocComponent },
  { label: "Resúmen siniestro", content: claimDetailComponent },
];

export const ClaimCreateStepComponent = () => {
  return (
    <>
      <StepsComponent props={steps}></StepsComponent>
    </>
  );
};
