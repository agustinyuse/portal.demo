import { SimpleGrid } from "@chakra-ui/react";
import ContractFormComponent from "../../components/Contract/ContractFormComponent";

export const Contract = () => {
  return (
    <>
      <SimpleGrid column={1} spacing="5">
        <ContractFormComponent></ContractFormComponent>
      </SimpleGrid>
    </>
  );
};
