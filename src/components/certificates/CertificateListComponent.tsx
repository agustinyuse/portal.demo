import { CertificateDetailCardComponent } from "./CertificateDetailCardComponent";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { CertificateDetailCardAvailableComponent } from "./CertificateDetailCardAvailableComponent";

const certs: any[] = [
  {
    id: 1,
    dealer: "Banco Galicia",
    state: "Activo",
    policyNumber: "190000000012",
    certNumber: "22",
    vigencia: "10/10/2022 - 10/11/2023",
    productName: "Bolso Protegido",
    logo:"galicia.png",
    claimNumber: "20000001",
    coverageCode: "Robo",
    statusClaim: "En espera Documentación"
  },
  {
    id: 2,
    dealer: "Banco BBVA",
    state: "Activo",
    policyNumber: "190000000012",
    certNumber: "22",
    vigencia: "10/10/2022 - 10/11/2023",
    productName: "Bolso Protegido",
    logo:"bbva.png"
  },
];

const certsAvaliable: any[] = [
  {
    id: 5,
    coverageDescription: "Te cubrimos hasta $20.000",
    logo:"bolsoprotegido.png",
    productName: "Bolso Protegido"
  },
];

export const CertificateListComponent = () => (
  <>
    <SimpleGrid spacing={30}>
      <Box>
        <Heading as="h3" size="lg" m={2}>
        Mis Seguros
        </Heading>

        <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 2 }} spacing={2}>
          {certs.map((cert) => (
            <CertificateDetailCardComponent
              key={cert.id}
              {...cert}
            />
          ))}
        </SimpleGrid>
      </Box>

      <Box>
        <Heading as="h3" size="lg" m={2}>
          Solicitar Seguro
        </Heading>

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
