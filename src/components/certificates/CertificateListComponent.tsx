import { CertificateDetailComponent } from "./CertificateDetailComponent";
import { Box, SimpleGrid } from '@chakra-ui/react'

const certs: any[] = [
    {
      id: 1,
      dealer: 'Banco Galicia',
      state: 'Activo',
      policyNumber: '190000000012',
      certNumber: '22',
      vigencia: '10/10/2022 - 10/11/2023',
      productName: 'Bolso Protegido'
    },
    {
        id: 1,
        dealer: 'Banco Galicia',
        state: 'Activo',
        policyNumber: '190000000012',
        certNumber: '22',
        vigencia: '10/10/2022 - 10/11/2023',
        productName: 'Bolso Protegido'
      },
      {
        id: 1,
        dealer: 'Banco Galicia',
        state: 'Activo',
        policyNumber: '190000000012',
        certNumber: '22',
        vigencia: '10/10/2022 - 10/11/2023',
        productName: 'Bolso Protegido'
      },
      {
        id: 1,
        dealer: 'Banco Galicia',
        state: 'Activo',
        policyNumber: '190000000012',
        certNumber: '22',
        vigencia: '10/10/2022 - 10/11/2023',
        productName: 'Bolso Protegido'
      },
  ];

export const CertificateListComponent = () => (
    <>  
             <SimpleGrid columns={2} spacing={4}>

    {certs.map((cert) => (
         <CertificateDetailComponent key={cert.id} dealer={cert.dealer} state={cert.state} policyNumber={cert.policyNumber} certNumber={cert.certNumber} vigencia={cert.vigencia} productName={cert.productName} />
    ))}
             </SimpleGrid>

    </>
);