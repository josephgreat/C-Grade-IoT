import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Img,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouteLink } from "react-router-dom";

const SmartThermostats = () => {
  return (
    <Container maxW="unset" p="0" bg="rgba(126, 255, 254, .2)">
      <Box
        my="10"
        maxW={{ base: "90vw", sm: "85vw", md: "80vw", lg: "75vw" }}
        mx="auto"
        py="16"
      >
        <Flex
          gap="8"
          flexDir={{ base: "column", md: "row" }}
          alignItems="center" // Center items vertically
        >
          <Box w={{ base: "100%", md: "50%" }}>
            <Heading as="h3" fontSize="1.7rem" mb="8">
              Redefining Comfort with Smart Thermostats
            </Heading>
          </Box>
          <Box w={{ base: "100%", md: "50%" }} textAlign="justify">
            <Text>
              Smart thermostats revolutionize home climate control by learning
              preferences, optimizing energy usage, and providing remote access
              for ultimate convenience, replacing manual temperature
              adjustments.
            </Text>
            <Link
              as={RouteLink}
              to="/products/smart thermostat"
              mt="4"
              color="white"
              bg="primary"
              py=".4rem"
              px=".7rem"
              borderRadius=".5rem"
              fontWeight="semibold"
              _hover={{ bg: "gray.300", color: "primary" }}
            >
              Explore More
            </Link>
          </Box>
        </Flex>
        <Flex
          justifyContent={{ base: "center", md: "space-between" }} // Center images on mobile, space-between on larger screens
          flexWrap="wrap"
          mt="8"
          gap="4"
        >
          <Img
            src="images/smart thermo1.jpg"
            borderRadius={".5rem"}
            boxShadow={"lg"}
            width="100%"
            maxW="300px"
            alt="smart thermostats"
          />
          <Img
            src="images/smart thermo2.jpg"
            borderRadius={".5rem"}
            boxShadow={"lg"}
            width="100%"
            maxW="300px"
            alt="smart thermostats"
          />
          <Img
            src="images/smart thermo3.jpg"
            borderRadius={".5rem"}
            boxShadow={"lg"}
            width="100%"
            maxW="300px"
            alt="smart thermostats"
          />
        </Flex>
      </Box>
    </Container>
  );
};

export default SmartThermostats;
