import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { CertificateDetailCardComponent } from "./CertificateDetailCardComponent";

const certs: any[] = [
  {
    id: 1,
    dealer: "Banco Galicia",
    state: "Activo",
    policyNumber: "190000000012",
    certNumber: "22",
    vigencia: "10/10/2022 - 10/11/2023",
    productName: "Bolso Protegido",
    logo: "galicia.png",
    claimNumber: "20000001",
    coverageCode: "Robo",
    statusClaim: "En espera Documentación",
  },
  {
    id: 2,
    dealer: "Banco BBVA",
    state: "Activo",
    policyNumber: "190000000012",
    certNumber: "22",
    vigencia: "10/10/2022 - 10/11/2023",
    productName: "Bolso Protegido",
    logo: "bbva.png",
  },
];

export const CertificateListComponent = ({ ...props }) => (
  <>
    <SimpleGrid spacing={30}>
      <Box>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 2 }} spacing={2}>
          {certs.map((cert) => (
            <CertificateDetailCardComponent key={cert.id} {...cert} />
          ))}
        </SimpleGrid>
      </Box>
    </SimpleGrid>
  </>
);
