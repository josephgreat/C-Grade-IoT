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
      <Box pos={"absolute"} inset={"0"} bg="rgba(0,0,0,.6)" />
      <Box
        maxW={{ base: "90vw", sm: "85vw", md: "80vw", lg: "75vw" }}
        mx={"auto"}
        color={"white"}
        zIndex={"2"}
        pos={"relative"}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Box w={{ base: "100%", md: "50%" }}>
            <Heading fontSize="2.5rem">Welcome To Consumer-Grade IoT</Heading>
            <Text fontSize={"md"} mt="4" fontWeight={"semibold"} opacity={".6"}>
              Discover the Future of Home Automation
            </Text>
            <Text
              mt="12"
              opacity={".8"}
              textAlign={"justify"}
              fontSize={"md"}
              fontWeight={"semibold"}
            >
              In today's rapidly advancing technological landscape, the
              integration of IoT (Internet of Things) devices into our homes has
              become commonplace. These devices offer convenience, efficiency,
              and connectivity like never before, transforming the way we
              interact with our living spaces.
            </Text>
            <Button mt="4" display={{ md: "none" }}>
              Explore Products
            </Button>
            <Flex mt="16" gap="16">
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
          <Box display={{ base: "none", md: "block" }}>
            <Text fontSize={"md"} fontWeight={"semibold"} mb="4">
              Always in control
            </Text>
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
                color: "primary"
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
