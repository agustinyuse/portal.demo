import { Box, Card, CardBody, CardHeader, Flex, FormControl, FormLabel, Heading, Input, Select, Stack, StackDivider, Textarea } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'
import LoremIpsum from "react-lorem-ipsum";

export const ClaimDetailComponent = () => (
  <Card>  
    <CardBody>
      <Stack divider={<StackDivider />} spacing='4'>   
     
      <FormControl>
  <FormLabel htmlFor='coverageId'>Cobertura</FormLabel>
  <Select id='coverageId' placeholder='Selecciona una cobertura'>
    <option>Coverage 1</option>
    <option>Coverage 2</option>
  </Select>
</FormControl>
<FormControl>
  <FormLabel htmlFor='dateTimeId'>Fecha de ocurrencia</FormLabel>
  <Input placeholder='Fecha de ocurrencia' type='date' size='xs' />
</FormControl>
<FormControl>
  <FormLabel htmlFor='observation'>Detalle del siniestro</FormLabel>
  <Textarea placeholder='Ingrese detalle sobre el siniestro' size='xs' />
</FormControl>
      </Stack>
    </CardBody>
  </Card>
);