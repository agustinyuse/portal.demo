import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { CertificateListComponent } from '../components/certificates/CertificateListComponent';
import { UserPresentationComponent } from '../components/userPresentation/UserPresentationComponent';


export const CertificatesView = () => (
   <>
   <SimpleGrid column={2} spacing={30}>
   <UserPresentationComponent></UserPresentationComponent>
   <CertificateListComponent></CertificateListComponent>
   </SimpleGrid>
   </>
);