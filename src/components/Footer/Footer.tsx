import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Image,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";

export const Footer = () => {
  return (
    <SimpleGrid as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack align="center">
          <Link href="https://www.assurant.com.ar/" isExternal>
            <Image src="../assets/assurant-logo.png" w={200}></Image>
          </Link>
        </Stack>
        <Text fontSize="sm" color="subtle" align="center">
          &copy; {new Date().getFullYear()} Assurant, Inc. All rights reserved.
        </Text>
      </Stack>
    </SimpleGrid>
  );
};
