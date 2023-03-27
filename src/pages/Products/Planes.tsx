import { SimpleGrid } from "@chakra-ui/react";
import PremiumPlanComponent from "../../components/Products/PremiumPlanComponent";

export const Planes = () => {
  return (
    <>
      <SimpleGrid column={1} spacing="5">
        <PremiumPlanComponent></PremiumPlanComponent>
      </SimpleGrid>
    </>
  );
};
