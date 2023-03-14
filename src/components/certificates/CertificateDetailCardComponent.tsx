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
  claimNumber?: string;
  coverageCode?: string;
  statusClaim?: string;
}

export const CertificateDetailCardComponent = ({...children}: CertificateDetail ) => (
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
                  src={"../assets/" + children.logo}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  w={100}
                  textAlign="center"
                />
              </Heading>
              <Text fontSize="md" py={1} textAlign={"left"}>
                Producto: {children.productName}
              </Text>
              <Text fontSize="md" py={1} textAlign={"left"}>
                Poliza: {children.policyNumber} Certificado: {children.certNumber}
              </Text>
              <Text fontSize="md" py={1} textAlign={"left"}>
                <Badge colorScheme="green">{children.state}</Badge> Vigencia:{" "}
                {children.vigencia}
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
              <Link as={RouterLink} to={`${children.certNumber}/createclaim`}>
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

        {children.claimNumber && (
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
                      Nro Reclamo: <Link color={"blue.400"}>#{children.claimNumber}</Link>
                    </Text>
                    <Text
                      fontSize="md"
                      py={1}
                      textAlign={"left"}
                      fontStyle={"italic"}
                    >
                      Cobertura: {children.coverageCode}
                    </Text>
                  </SimpleGrid>
                  <SimpleGrid spacing={1}>
                    <Text
                      fontSize="md"
                      py={1}
                      textAlign={"left"}
                      fontStyle={"italic"}
                    >
                      Estado: {children.statusClaim}
                    </Text>
                  </SimpleGrid>
                </SimpleGrid>
              </Alert>
            </Stack>
          </SimpleGrid>
        )}
        </SimpleGrid>
      </CardBody>
    </Stack>
  </Card>
);
