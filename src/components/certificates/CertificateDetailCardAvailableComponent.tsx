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
  useColorModeValue,
} from "@chakra-ui/react";
import { Text, Image } from "@chakra-ui/react";

interface CertificateCardDetailAvailable {
  productName: string;
  coverageDescription: string;
  logo: string;
}

export const CertificateDetailCardAvailableComponent = ({
  ...props
}: CertificateCardDetailAvailable) => {
  let mainText = useColorModeValue("gray.500", "#ffffffeb");

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={"../assets/" + props.logo}
        alt={props.logo}
      />

      <Stack>
        <CardBody>
          <Heading
            size="md"
            color={mainText}
            lineHeight="24px"
            pe="40px"
            fontWeight="500"
          >
            {props.productName}
          </Heading>
          <Text
            fontSize="md"
            color={mainText}
            lineHeight="24px"
            pe="40px"
            fontWeight="500"
            mb="auto"
            py={1}
            textAlign={"left"}
          >
            {props.coverageDescription}
          </Text>
        </CardBody>
        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Ver Condiciones
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
