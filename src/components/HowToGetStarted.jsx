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
import Steps from "./Steps";

const HowToGetStarted = () => {
  const howToGetStarted = [
    {
      step_title: "Explore Our Database",
      bg: "/images/steps/explore database.jpg",
      description:
        "Search for your device to see if there are any known vulnerabilities and learn how to mitigate them.",
    },
    {
      bg: "/images/steps/security tips.webp",
      step_title: "Implement Security Tips",
      description:
        "Follow our easy guides to enhance the security of your devices.",
    },
    {
      bg: "/images/steps/stay updated.webp",
      step_title: "Stay Updated",
      description:
        "Subscribe to our newsletter to receive the latest updates on IoT security.",
    },
  ];
  return (
    <Container maxW="unset" p="0" bg="rgba(126, 255, 254, .2)">
      <Box
        my="10"
        maxW={{ base: "90vw", sm: "85vw", md: "80vw", lg: "75vw" }}
        mx="auto"
        py="16"
      >
        <Heading as="h3" fontSize="1.7rem" mb="8" textAlign={"center"}>
          How to Get Started
        </Heading>
        <Flex
          gap="8"
          flexDir={{ base: "column", md: "row" }}
          flexWrap={"wrap"}
          alignItems="center"
          justifyContent={"center"} // Center items vertically
        >
          {howToGetStarted.map((step, index) => (
            <Steps key={index} step={step} index={index} />
          ))}
        </Flex>
      </Box>
    </Container>
  );
};

export default HowToGetStarted;
