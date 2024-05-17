import { Box, Container, Divider, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Intro = ({ title, description, title_right }) => {
  return (
    <Container
      maxW={{ base: "90vw", sm: "85vw", md: "80vw", lg: "75vw" }}
      mx={"auto"}
    >
      <Box pt="12" pb="8">
        <Heading as="h4" textAlign={title_right && "right"}>{title}</Heading>
        <Text
          // mt="12"
          opacity={".8"}
          textAlign={"justify"}
          fontSize={"md"}
          fontWeight={"semibold"}
          lineHeight={"2"}
        >
          {description}
        </Text>
      </Box>
      <Divider
        h={".1rem"}
        bg="rgba(126, 255, 254)"
        mx="auto"
      />
    </Container>
  );
};

export default Intro;
