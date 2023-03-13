import {
  CloseIcon,
  DownloadIcon,
  InfoIcon,
  SmallAddIcon,
} from "@chakra-ui/icons";
import {
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
}

export const CertificateDetailCardComponent = (cert: CertificateDetail) => (
  <Card
    direction={{ base: "column", sm: "row" }}
    overflow="hidden"
    variant="outline"
    size={"sm"}
    width={{ base: "700px", xs: "100%" }}
  >
    <Image
      objectFit="cover"
      src="../assets/galicia.png"
      alt="Banco Galicia"
      sizes="sm"
    />

    <Stack>
      <CardBody>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
          <Box justifyContent={"left"}>
            <Heading size="md" textAlign={"left"}>
              Banco Galicia
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
          <Box display={"flex"} justifyContent={{ base: "left", md: "right" }}>
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
            <Link as={RouterLink} to="/create-claim">
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
      </CardBody>
    </Stack>
  </Card>
);
