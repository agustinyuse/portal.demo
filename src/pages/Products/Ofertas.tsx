import { SimpleGrid } from "@chakra-ui/react";
import OfertasComponent from "../../components/Products/OfertasComponent";

export const Ofertas = () => {
  return (
    <>
      <SimpleGrid column={1} spacing="5">
        <OfertasComponent></OfertasComponent>
      </SimpleGrid>
    </>
  );
};
