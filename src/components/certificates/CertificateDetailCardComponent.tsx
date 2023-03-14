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
import LoremIpsum from "react-lorem-ipsum";
import { Link as RouterLink } from "react-router-dom";

interface CertificateDetail {
  dealer: string;
  policyNumber: string;
  productName: string;
  vigencia: string;
  state: string;
  certNumber: string;
  logo: string;
}

export const CertificateDetailCardComponent = (cert: CertificateDetail) => (
  <Card
    direction={{ base: "column"}}
    overflow="hidden"
    variant="outline"
    size={"sm"}
    width={{ base: "700px", xs: "100%" }}
  >
    <Stack>
      <CardBody>
        <SimpleGrid spacing={2}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
            <Box justifyContent={"left"}>
              <Heading size="md" textAlign={"left"}>
                <Image
                  objectFit="cover"
                  src={"../assets/" + cert.logo}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  w={100}
                  textAlign="center"
                />
              </Heading>
              <Text fontSize="md" py={1} textAlign={"left"}>
                Producto: {cert.productName}
              </Text>
              <Text fontSize="md" py={1} textAlign={"left"}>
                Poliza: {cert.policyNumber} Certificado: {cert.certNumber}
              </Text>
              <Text fontSize="md" py={1} textAlign={"left"}>
                <Badge colorScheme="green">{cert.state}</Badge> Vigencia:{" "}
                {cert.vigencia}
              </Text>
            </Box>
            <Box
              display={"flex"}
              justifyContent={{ base: "left", md: "right" }}
            >
              <IconButton
                size={"sm"}
                ml={2}
                variant="outline"
                colorScheme="teal"
                aria-label="Call Sage"
                fontSize="20px"
                icon={<InfoIcon />}
              />
              <IconButton
                size={"sm"}
                ml={2}
                variant="outline"
                colorScheme="teal"
                aria-label="Call Sage"
                fontSize="20px"
                icon={<CloseIcon />}
              />
              <Link as={RouterLink} to={`${cert.certNumber}/createclaim`}>
                <IconButton
                  size={"sm"}
                  ml={2}
                  variant="outline"
                  colorScheme="teal"
                  aria-label="Call Sage"
                  fontSize="20px"
                  icon={<SmallAddIcon />}
                />
              </Link>
            </Box>
          </SimpleGrid>

          <SimpleGrid>
            <Stack spacing={3}>
              <Alert status="warning">
                <AlertIcon />
                <SimpleGrid>
                  <SimpleGrid
                    display="flex"
                    justifyContent={"left"}
                    spacing="2"
                  >
                    <Text
                      fontSize="md"
                      py={1}
                      textAlign={"left"}
                      fontStyle={"italic"}
                    >
                      Nro Reclamo: <Link color={"blue.400"}>#20000001</Link>
                    </Text>
                    <Text
                      fontSize="md"
                      py={1}
                      textAlign={"left"}
                      fontStyle={"italic"}
                    >
                      Cobertura: Robo
                    </Text>
                  </SimpleGrid>
                  <SimpleGrid spacing={1}>
                    <Text
                      fontSize="md"
                      py={1}
                      textAlign={"left"}
                      fontStyle={"italic"}
                    >
                      Estado: En espera Documentación
                    </Text>
                  </SimpleGrid>
                </SimpleGrid>
              </Alert>
            </Stack>
          </SimpleGrid>
        </SimpleGrid>
      </CardBody>
    </Stack>
  </Card>
);
