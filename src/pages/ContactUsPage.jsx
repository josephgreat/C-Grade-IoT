import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ContactUsPage = () => {
  return (
    <VStack
      textAlign={"center"}
      py="16"
      pt="20"
      maxW={{ base: "90vw", sm: "85vw", md: "80vw", lg: "75vw" }}
      mx="auto"
      h="100%"
      justifyContent={"center"}
    >
      <Box>
        <Heading as="h3" fontSize={"1.7rem"}>
          Contact Us
        </Heading>
        <Text mt="8">
          Have questions or need further assistance? <br />
          Reach out to our support team at
          [support@iotsafetyhub.com](mailto:support@iotsafetyhub.com).
        </Text>
      </Box>
    </VStack>
  );
};

export default ContactUsPage;
