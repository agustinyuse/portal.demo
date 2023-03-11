import { CertificateDetailCardComponent } from "./CertificateDetailCardComponent";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";

const certs: any[] = [
  {
    id: 1,
    dealer: "Banco Galicia",
    state: "Activo",
    policyNumber: "190000000012",
    certNumber: "22",
    vigencia: "10/10/2022 - 10/11/2023",
    productName: "Bolso Protegido",
  },
  {
    id: 2,
    dealer: "Banco Galicia",
    state: "Activo",
    policyNumber: "190000000012",
    certNumber: "22",
    vigencia: "10/10/2022 - 10/11/2023",
    productName: "Bolso Protegido",
  },
  {
    id: 2,
    dealer: "Banco Galicia",
    state: "Activo",
    policyNumber: "190000000012",
    certNumber: "22",
    vigencia: "10/10/2022 - 10/11/2023",
    productName: "Bolso Protegido",
  },
  {
    id: 3,
    dealer: "Banco Galicia",
    state: "Activo",
    policyNumber: "190000000012",
    certNumber: "22",
    vigencia: "10/10/2022 - 10/11/2023",
    productName: "Bolso Protegido",
  },
];

const certsAvaliable: any[] = [
  {
    id: 5,
    dealer: "Banco Galicia",
    state: "Activo",
    policyNumber: "190000000012",
    certNumber: "22",
    vigencia: "10/10/2022 - 10/11/2023",
    productName: "Bolso Protegido",
  },
  {
    id: 6,
    dealer: "Banco Galicia",
    state: "Activo",
    policyNumber: "190000000012",
    certNumber: "22",
    vigencia: "10/10/2022 - 10/11/2023",
    productName: "Bolso Protegido",
  },
  {
    id: 7,
    dealer: "Banco Galicia",
    state: "Activo",
    policyNumber: "190000000012",
    certNumber: "22",
    vigencia: "10/10/2022 - 10/11/2023",
    productName: "Bolso Protegido",
  },
  {
    id: 8,
    dealer: "Banco Galicia",
    state: "Activo",
    policyNumber: "190000000012",
    certNumber: "22",
    vigencia: "10/10/2022 - 10/11/2023",
    productName: "Bolso Protegido",
  },
];

export const CertificateListComponent = () => (
  <>
    <SimpleGrid spacing={30}>
      <Box>
        <Text fontSize={30} align={"left"} m={2}>
          Seguros contratados
        </Text>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} spacing={2}>
          {certs.map((cert) => (
            <CertificateDetailCardComponent
              key={cert.id}
              dealer={cert.dealer}
              state={cert.state}
              policyNumber={cert.policyNumber}
              certNumber={cert.certNumber}
              vigencia={cert.vigencia}
              productName={cert.productName}
            />
          ))}
        </SimpleGrid>
      </Box>

      <Box>
        <Text fontSize={30} align={"left"} m={2}>
          Seguros disponibles de contratar
        </Text>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} spacing={2}>
          {certsAvaliable.map((cert) => (
            <CertificateDetailCardComponent
              key={cert.id}
              dealer={cert.dealer}
              state={cert.state}
              policyNumber={cert.policyNumber}
              certNumber={cert.certNumber}
              vigencia={cert.vigencia}
              productName={cert.productName}
            />
          ))}
        </SimpleGrid>
      </Box>
    </SimpleGrid>
  </>
);
