import {
  Box,
  Button,
  Container,
  Flex,
  Img,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link as RouteLink } from "react-router-dom";
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <Container
      pos="fixed"
      top="0"
      left="0"
      zIndex="10"
      right={"0"}
      p="0"
      backdropFilter={"blur(10px)"}
      maxW={"unset"}
      bg={"rgba(0, 85, 94, .7)"}
    >
      <Flex
        py={4}
        color="white"
        alignItems={"center"}
        maxW={{ base: "90vw", sm: "85vw", md: "80vw", lg: "75vw" }}
        mx="auto"
      >
        <Link as={RouteLink} to="/" fontSize="xl" fontWeight="bold">
          <Img src="/internet-of-things.png" w="1.5rem" display="inline-block" mr="1" />
          C-Grade IoT
        </Link>
        <Spacer />
        <Box>
          <Button
            bg="transparent"
            p="0"
            flexDir={"column"}
            gap="1"
            alignItems={"flex-end"}
            _hover={{
              background: "unset",
              opacity: ".6",
              transform: "scale(1.1)",
            }}
            display={{ base: "flex", md: "none" }}
            onClick={() => setOpenNav(!openNav)}
          >
            <Text
              as="span"
              w="6"
              h="1"
              borderRadius={"1rem"}
              transition={"all .3s linear"}
              bg="white"
              transform={
                openNav ? "rotate(45deg) translateY(5px)" : "rotate(0)"
              }
            />
            <Text
              as="span"
              w={openNav ? "6" : "3"}
              transition={"all .3s linear"}
              h="1"
              borderRadius={"1rem"}
              bg="white"
              transform={
                openNav ? "rotate(-45deg) translateY(-5px)" : "rotate(0)"
              }
            />
          </Button>
          <Flex
            gap="4"
            pos={{ base: "absolute", md: "unset" }}
            zIndex={"11"}
            w={{ base: "45%", sm: "35%", md: "fit-content" }}
            flexDir={{ base: "column", md: "row" }}
            transition={"all .3s linear"}
            right={{ base: openNav ? "0" : "-100%", md: "unset" }}
            top={{ base: "100%", md: "unset" }}
            bg={{ base: "rgba(0, 85, 94, 1)", md: "transparent" }}
            backdropFilter={{ base: "blur(30px)", md: "unset" }}
            p={{ base: "6", md: "unset" }}
          >
            <Link
              as={RouteLink}
              onClick={() => setOpenNav(false)}
              to="/"
              fontFamily={"'DM Sans', sans-serif"}
            >
              Home
            </Link>
            <Link
              as={RouteLink}
              onClick={() => setOpenNav(false)}
              to="/products/smart door bells"
              fontFamily={"'DM Sans', sans-serif"}
            >
              Products
            </Link>
            {/* <Link
              as={RouteLink}
              onClick={() => setOpenNav(false)}
              to="/vulnerability/smart door bells"
              fontFamily={"'DM Sans', sans-serif"}
            >
              Vulnerabilities
            </Link> */}
            <Link
              as={RouteLink}
              to="/contact"
              onClick={() => setOpenNav(false)}
              fontFamily={"'DM Sans', sans-serif"}
            >
              Contact
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Navbar;
