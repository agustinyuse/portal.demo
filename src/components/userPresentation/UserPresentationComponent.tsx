import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'


export const UserPresentationComponent = () => (
    <Card align='left'>
  <CardHeader>
    <Heading size='md'> Hola Juan!</Heading>
  </CardHeader>
  <CardBody>
    <Text align={"left"}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam eveniet maiores sequi nobis, explicabo placeat repellat non temporibus aut fugit officia quae harum labore obcaecati ut reiciendis quisquam quaerat reprehenderit.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>
);