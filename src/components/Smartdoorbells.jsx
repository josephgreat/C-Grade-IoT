import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Img,
  Text,
  Link,
} from "@chakra-ui/react";
import { FaBan, FaPadlet, FaShield, FaShieldHalved } from "react-icons/fa6";
import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { Link as RouteLink } from "react-router-dom";

const Smartdoorbells = () => {
  return (
    <Box
      my="16"
      maxW={{ base: "90vw", sm: "85vw", md: "80vw", lg: "75vw" }}
      mx="auto"
    >
      <Flex gap="8" flexDir={{ base: "column", md: "row" }}>
        <Box w={{ base: "100%", md: "50%" }}>
          <Heading as="h3" fontSize={"1.7rem"} mb="8">
            Exploring the World of Smart Doorbells
          </Heading>
          <Img src="images/smart door bell.jpg" alt="smart door bell image" />
        </Box>
        <Box w={{ base: "100%", md: "50%" }} textAlign={"justify"}>
          <Text>
            Smart doorbells offer real-time alerts regardless of your location,
            enhancing security by allowing remote monitoring and communication
            with visitors, thus deterring potential intruders.
          </Text>
          <Link
            as={RouteLink}
            to="/products/smart door bells"
            mt="4"
            color="white"
            bg="primary"
            py=".4rem"
            px=".7rem"
            borderRadius=".5rem"
            fontWeight="semibold"
            _hover={{ bg: "gray.300", color: "primary",  }}
          >
            Explore More
          </Link>
          <Flex
            bg="rgba(126, 255, 254, .4)"
            mt="8"
            borderRadius={".5rem"}
            p="2"
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Text fontSize={"1.5rem"} fontWeight={"bold"}>
              24/7 <br /> Security
            </Text>
            <FaShieldHalved size={"3rem"} />
          </Flex>
          <Text mt="8">
            As we explore smart doorbells, it's vital to acknowledge their
            connectivity vulnerabilities. Data privacy concerns and the risk of
            cyber-attacks underscore the importance of understanding and
            mitigating these risks for safe integration into our homes.
          </Text>
          {/* <Button mt="4">Learn More</Button> */}
        </Box>
      </Flex>
    </Box>
  );
};

export default Smartdoorbells;
