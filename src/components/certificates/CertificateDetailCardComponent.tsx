import {
  Alert,
  AlertIcon,
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  IconButton,
  Link,
  SimpleGrid,
  Stack,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { Text, Image } from "@chakra-ui/react";
import {
  FaFileDownload,
  FaFilePdf,
  FaShieldAlt,
  FaTimes,
} from "react-icons/fa";
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
  ...props
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
                    src={"../assets/" + props.logo}
                    alt={props.logo}
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
                  Producto: {props.productName}
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
                  Poliza: {props.policyNumber} Certificado: {props.certNumber}
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
                  <Badge colorScheme="green">{props.state}</Badge> Vigencia:{" "}
                  {props.vigencia}
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
                <Link as={RouterLink} to={`${props.certNumber}/cancelation`}>
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
                <Link as={RouterLink} to={`${props.certNumber}/createclaim`}>
                  <Tooltip label="Crear Siniestro">
                    <IconButton
                      size={"sm"}
                      ml={2}
                      variant="outline"
                      colorScheme="red"
                      aria-label="Call Sage"
                      fontSize="20px"
                      icon={<FaShieldAlt />}
                    />
                  </Tooltip>
                </Link>
              </Box>
            </SimpleGrid>

            {props.claimNumber && (
              <SimpleGrid>
                <Stack spacing={3}>
                  <Alert bg={boxBg}>
                    <AlertIcon />
                    <SimpleGrid>
                      <SimpleGrid columns={{ sm: 1, md: 3, lg: 3 }}>
                        <Box
                          fontSize="md"
                          py={1}
                          textAlign={"left"}
                          fontStyle={"italic"}
                          color={mainText}
                          lineHeight="24px"
                          fontWeight="500"
                          paddingInline={"0"}
                        >
                          Reclamo:
                          <Link
                            as={RouterLink}
                            color={"blue.400"}
                            to={`/claims/${props.claimNumber}`}
                          >
                            #{props.claimNumber}
                          </Link>
                        </Box>
                        <Box
                          fontSize="md"
                          py={1}
                          textAlign={"left"}
                          fontStyle={"italic"}
                          color={mainText}
                          lineHeight="24px"
                          pe="40px"
                          fontWeight="500"
                          paddingInline={"0"}
                        >
                          <Text>Cobertura: {props.coverageCode}</Text>
                        </Box>
                        <Box
                          fontSize="md"
                          py={1}
                          textAlign={"left"}
                          fontStyle={"italic"}
                          color={mainText}
                          lineHeight="24px"
                          pe="40px"
                          fontWeight="500"
                          paddingInline={"0"}
                        >
                          Descargar liquidación
                          <Tooltip label="Descargar Liquidación">
                            <IconButton
                              size={"sm"}
                              ml={2}
                              variant="outline"
                              colorScheme="blue"
                              aria-label="Call Sage"
                              fontSize="20px"
                              icon={<FaFileDownload />}
                            />
                          </Tooltip>
                        </Box>
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
                          Estado: {props.statusClaim}
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
