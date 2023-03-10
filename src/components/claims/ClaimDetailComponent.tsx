import { Box, Card, CardBody, CardHeader, Flex, FormControl, FormLabel, Heading, Select, Stack, StackDivider } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'
import LoremIpsum from "react-lorem-ipsum";

export const ClaimDetailComponent = () => (
  <Card>  
    <CardBody>
      <Stack divider={<StackDivider />} spacing='4'>
       
      <FormControl isRequired>
        <Flex>
          <Box w={10}>
          <FormLabel>Coberturas: </FormLabel>
          </Box>
          <Box w={40}><Select placeholder='Seleccione cobertura'>
  <option value='option1'>Cobertura 1</option>
  <option value='option2'>Cobertura 2</option>
  <option value='option3'>Cobertura 3</option>
</Select></Box>
        </Flex>
  
</FormControl>
        <Box>
               
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Fecha de ocurrencia
          </Heading>
          <Text pt='2' fontSize='sm'>
            2023/03/10
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Detalle del siniestro
          </Heading>
          <Text pt='2' fontSize='sm'>
          <LoremIpsum p={1} />
          </Text>
        </Box>
      </Stack>
    </CardBody>
  </Card>
);