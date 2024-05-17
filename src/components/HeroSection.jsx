import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouteLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <Container
      position={"relative"}
      maxW="unset"
      pt={28}
      pb="12"
      m="0"
      bg={"url('images/hero_bg2.jpg') center  no-repeat"}
      backgroundColor={"primary"}
      bgSize={"cover"}
    >
      <Box pos={"absolute"} inset={"0"} w="100%" bg="rgba(0,0,0,.6)" />
      <Box
        maxW={{ base: "90vw", sm: "85vw", md: "80vw", lg: "75vw" }}
        mx={"auto"}
        color={"white"}
        zIndex={"2"}
        pos={"relative"}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"} flexWrap={"wrap"} gap="4">
          <Box w={{ base: "100%", md: "50%" }}>
            <Heading fontSize="2.5rem">Welcome to Your IoT Safety Hub</Heading>
            <Text fontSize={"md"} mt="4" fontWeight={"semibold"} opacity={".6"}>
              Protecting Your Home, One Device at a Time
            </Text>

            <Button mt="4" display={{ md: "none" }}>
              Explore Products
            </Button>
            <Flex mt="16" gap={{ base: "10", md: "16" }} flexWrap={"wrap"}>
              <Box>
                <Text fontSize={"2rem"} fontWeight={"bold"}>
                  2
                </Text>
                <Text fontSize={"sm"} fontWeight={"semibold"} opacity={".6"}>
                  IoT <br />
                  products
                </Text>
              </Box>
              <Box>
                <Text fontSize={"2rem"} fontWeight={"bold"}>
                  40+
                </Text>
                <Text fontSize={"sm"} fontWeight={"semibold"} opacity={".6"}>
                  Product <br /> Models
                </Text>
              </Box>
              <Box>
                <Text fontSize={"2rem"} fontWeight={"bold"}>
                  10+
                </Text>
                <Text fontSize={"sm"} fontWeight={"semibold"} opacity={".6"}>
                  Vulnerability <br />
                  Checks
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Link
              as={RouteLink}
              to="/products/smart door bells"
              border={"1px solid white"}
              px=".7rem"
              py=".5rem"
              borderRadius={".5rem"}
              fontWeight={"semibold"}
              _hover={{
                textDecor: "unset",
                bg: "white",
                color: "primary",
              }}
            >
              Explore Products
            </Link>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default HeroSection;
