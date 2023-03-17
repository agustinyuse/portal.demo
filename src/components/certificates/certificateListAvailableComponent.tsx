import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { CertificateDetailCardAvailableComponent } from "./CertificateDetailCardAvailableComponent";

const certsAvaliable: any[] = [
  {
    id: 5,
    coverageDescription: "Te cubrimos hasta $20.000",
    logo:"bolsoprotegido.png",
    productName: "Bolso Protegido"
  },
];

export const CertificateListAvailableComponent = ({...props}) => (
  <>
    <SimpleGrid spacing={30}>
      <Box>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 2 }} spacing={2}>
          {certsAvaliable.map((cert) => (
            <CertificateDetailCardAvailableComponent
              key={cert.id}
              {...cert}
            />
          ))}
        </SimpleGrid>
      </Box>
    </SimpleGrid>
  </>
);
