import {
  CloseIcon,
  DownloadIcon,
  InfoIcon,
  SmallAddIcon,
} from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Link,
  Select,
  SimpleGrid,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { Text, Image } from "@chakra-ui/react";

interface CertificateCardDetailAvailable {
  productName: string;
  coverageDescription: string;
  logo: string;
}

export const CertificateDetailCardAvailableComponent = ({...children}: CertificateCardDetailAvailable ) => (
  <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={"../assets/" + children.logo}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{children.productName}</Heading>
      <Text py='2'>
      {children.coverageDescription}
      </Text>
    </CardBody>
    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
       Ver Condiciones
      </Button>
    </CardFooter>
  </Stack>
</Card>
);
