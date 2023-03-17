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
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { Text, Image } from "@chakra-ui/react";
import { FaFilePdf, FaPlus, FaTimes } from "react-icons/fa";
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

export const CertificateDetailCardComponent = ({
  ...children
}: CertificateDetail) => {
  let mainText = useColorModeValue("gray.500", "#ffffffeb");
  let boxBg = useColorModeValue("gray.50", "whiteAlpha.100");
  return (
    <Card
      direction={{ base: "column" }}
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
                  Producto: {children.productName}
                </Text>
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
                  Poliza: {children.policyNumber} Certificado:{" "}
                  {children.certNumber}
                </Text>
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
                  <Badge colorScheme="green">{children.state}</Badge> Vigencia:{" "}
                  {children.vigencia}
                </Text>
              </Box>
              <Box
                display={"flex"}
                justifyContent={{ base: "left", md: "right" }}
              >
                  <Tooltip label="Descargar Certificado">
                <IconButton
                  size={"sm"}
                  ml={2}
                  variant="outline"
                  colorScheme="blue"
                  aria-label="Call Sage"
                  fontSize="20px"
                  icon={<FaFilePdf />}
                />
                </Tooltip>
                <Link as={RouterLink} to={`${children.certNumber}/cancelation`}>
                <Tooltip label="Cancelar Certificado">
                  <IconButton
                    size={"sm"}
                    ml={2}
                    variant="outline"
                    colorScheme="blue"
                    aria-label="Call Sage"
                    fontSize="20px"
                    icon={<FaTimes />}
                  />
                  </Tooltip>
                </Link>
                <Link as={RouterLink} to={`${children.certNumber}/createclaim`}>
                  <Tooltip label="Crear Siniestro">
                  <IconButton
                    size={"sm"}
                    ml={2}
                    variant="outline"
                    colorScheme="blue"
                    aria-label="Call Sage"
                    fontSize="20px"
                    icon={<FaPlus />}
                  />
                  </Tooltip>

                </Link>
              </Box>
            </SimpleGrid>

            {children.claimNumber && (
              <SimpleGrid>
                <Stack spacing={3}>
                  <Alert bg={boxBg}>
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
                          color={mainText}
                          lineHeight="24px"
                          pe="40px"
                          fontWeight="500"
                          mb="auto"
                        >
                          Nro Reclamo:{" "}
                          <Link color={"blue.400"}>
                            #{children.claimNumber}
                          </Link>
                        </Text>
                        <Text
                          fontSize="md"
                          py={1}
                          textAlign={"left"}
                          fontStyle={"italic"}
                          color={mainText}
                          lineHeight="24px"
                          pe="40px"
                          fontWeight="500"
                          mb="auto"
                        >
                          Cobertura: {children.coverageCode}
                        </Text>
                      </SimpleGrid>
                      <SimpleGrid spacing={1}>
                        <Text
                          fontSize="md"
                          textAlign={"left"}
                          fontStyle={"italic"}
                          color={mainText}
                          lineHeight="24px"
                          pe="40px"
                          fontWeight="500"
                          mb="auto"
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
};
