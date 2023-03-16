import {
  Box,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { AccordionFAQSComponent } from "../../components/Accordion/AccordionComponent";
import { CertificateListComponent } from "../../components/certificates/CertificateListComponent";
import { CertificateListAvailableComponent } from "../../components/certificates/certificateListAvailableComponent";

import { UserPresentationComponent } from "../../components/userPresentation/UserPresentationComponent";

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

const certsAvaliable: any[] = [
  {
    id: 5,
    coverageDescription: "Te cubrimos hasta $20.000",
    logo:"bolsoprotegido.png",
    productName: "Bolso Protegido"
  },
];

export const CertificatesView = () => (
  <>
    <SimpleGrid spacing={20}>
      <Box>
        <UserPresentationComponent></UserPresentationComponent>
        <Tabs isFitted variant="enclosed" mt={5}>
          <TabList mb="1em">
            <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Mis Seguros</Tab>
            <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Solicitar Seguro</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <CertificateListComponent/>
            </TabPanel>
            <TabPanel>
              <CertificateListAvailableComponent />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      <AccordionFAQSComponent></AccordionFAQSComponent>
    </SimpleGrid>
  </>
);
