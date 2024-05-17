import { Box, Container, Divider, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import TrustPoint from "./TrustPoint";

const whyTrustUs = [
  {
    point: "Expertise",
    description:
      "Our team consists of cybersecurity professionals dedicated to helping you stay safe.",
  },
  {
    point: "Comprehensive Resources",
    description:
      "We offer a wide range of information tailored to all levels of understanding.",
  },
  {
    point: "User-Focused",
    description:
      "Our platform is designed with you in mind, making complex information accessible and actionable.",
  },
];

const WhyTrustUs = () => {
  return (
    <Container maxW="unset" p="0">
      <Box
        my="10"
        maxW={{ base: "90vw", sm: "85vw", md: "80vw", lg: "75vw" }}
        mx="auto"
        py="8"
      >
        <Heading as="h3" fontSize="1.7rem" mb="8" textAlign={"center"}>
          Why Trust Us
        </Heading>
        <Flex
          gap="8"
          flexDir={{ base: "column", md: "row" }}
          flexWrap={"wrap"}
          alignItems="center"
          justifyContent={"center"} // Center items vertically
        >
          {whyTrustUs.map((trust_point, index) => (
            <TrustPoint key={index} trust_point={trust_point} index={index} />
          ))}
        </Flex>
      </Box>
        <Divider h={".1rem"} bg="rgba(126, 255, 254)" mx="auto" />
    </Container>
  );
};

export default WhyTrustUs;
