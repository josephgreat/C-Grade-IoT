import { Container, Text } from "@chakra-ui/react";
import React from "react";

const Intro = () => {
  return (
    <Container
      maxW={{ base: "90vw", sm: "85vw", md: "80vw", lg: "75vw" }}
      mx={"auto"}
      py="16"
    >
      <Text textAlign={"center"} fontSize={"1rem"}>
        At ConsumerGrade IoT, we're passionate about exploring the potential of
        consumer-grade IoT devices, particularly focusing on two essential
        components of modern home automation: smart doorbells and smart
        thermostats.
      </Text>
      
    </Container>
  );
};

export default Intro;
