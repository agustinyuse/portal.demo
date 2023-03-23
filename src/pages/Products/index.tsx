import { SimpleGrid } from "@chakra-ui/react";
import PremiumPlanComponent from "../../components/Products/Premium";

export const Products = () => {
  return (
    <>
      <SimpleGrid column={1} spacing="5">
        <PremiumPlanComponent></PremiumPlanComponent>
      </SimpleGrid>
    </>
  );
};
