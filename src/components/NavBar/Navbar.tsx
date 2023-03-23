import { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  useDisclosure,
  useColorModeValue,
  Link,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";

const Links = [
  { name: "Certificados", to: "certificates" },
  { name: "Planes", to: "products" },
];

const NavLink = ({ children, ...props }: any) => (
  <Link
    as={RouterLink}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.100", "gray.700"),
    }}
    {...props}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { logout, isLoggedIn } = useAuth();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("0", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <NavLink
            textAlign={useColorModeValue("center", "center")}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
            to="/certificates"
          >
            <Image
              src="../assets/assurant.png"
              w={10}
              alt="assurant logo"
            ></Image>
          </NavLink>
          <ColorModeSwitcher justifySelf="flex-end" />

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <Stack direction={"row"} spacing={4}>
              {Links.map((link: any, i: number) => (
                <NavLink key={link.name} to={link.to}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {isLoggedIn() && (
            <Button
              variant="solid"
              colorScheme="blue"
              size="md"
              onClick={() => logout()}
            >
              Cerrar sesión
            </Button>
          )}
          {!isLoggedIn() && (
            <Button
              variant="solid"
              colorScheme="blue"
              size="md"
              onClick={() => logout()}
            >
              Iniciar sesión
            </Button>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav Links={Links} />
      </Collapse>
    </Box>
  );
}

const MobileNav = ({ Links }: any) => {
  return (
    <Stack
      bg={useColorModeValue("gray.50", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {Links.map((link: any, i: number) => (
        <NavLink key={link.name} to={link.to}>
          {link.name}
        </NavLink>
      ))}
    </Stack>
  );
};
