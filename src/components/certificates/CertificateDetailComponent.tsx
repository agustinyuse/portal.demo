import { CloseIcon, DownloadIcon, InfoIcon, SmallAddIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, FormControl, FormLabel, Heading, IconButton, Select, SimpleGrid, Stack, StackDivider } from "@chakra-ui/react";
import { Text, Image } from '@chakra-ui/react'
import LoremIpsum from "react-lorem-ipsum";

interface CertificateDetail {
  dealer: string;
  policyNumber: string;
  productName: string;
  vigencia: string,
  state: string
  certNumber: string
}

export const CertificateDetailComponent = (cert: CertificateDetail) => (
 
  <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    size={'sm'}
  >
    <Image
      src='../assets/galicia.png'
      alt='Banco Galicia'
    />
   <Stack>
    <CardBody>
    <SimpleGrid columns={2} spacing={1}>
  <Box>
  <Heading size='md' textAlign={"left"}>Banco Galicia</Heading>

<Text py={1} textAlign={"left"}>
Producto: {cert.productName}
  </Text>
  <Text py={1} textAlign={"left"}>
Poliza: {cert.policyNumber} Certificado: {cert.certNumber}

  </Text>
  <Text py={1} textAlign={"left"}>
  <Badge colorScheme='green'>{cert.state}</Badge> Vigencia: {cert.vigencia}
  </Text>
  </Box>
<Box display={"flex"} justifyContent={"right"}>
    
  <IconButton
ml={2}
  variant='outline'
  colorScheme='teal'
  aria-label='Call Sage'
  fontSize='20px'
  icon={<InfoIcon />}
/>
  <IconButton ml={2}
  variant='outline'
  colorScheme='teal'
  aria-label='Call Sage'
  fontSize='20px'
  icon={<CloseIcon />}
/>
<IconButton
ml={2}
  variant='outline'
  colorScheme='teal'
  aria-label='Call Sage'
  fontSize='20px'
  icon={<SmallAddIcon />}
/>
  </Box>
  
</SimpleGrid>
      
    </CardBody>

  
  </Stack>
  
  </Card>
);