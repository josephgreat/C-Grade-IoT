import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Img,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Container bg="primary" maxW="unset" px="0" py="8">
      <Box
        maxW={{ base: "90vw", sm: "85vw", md: "80vw", lg: "75vw" }}
        mx="auto"
        color={"white"}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Heading fontSize={"1.4rem"}>
            <Img
              src="/internet-of-things.png"
              w="1.5rem"
              display="inline-block"
              mr="1"
            />
           IoT INFOR HUB
          </Heading>
          <Flex gap={"4"}>
            <Link href="#">About</Link>
            <Link href="#">Products</Link>
          </Flex>
        </Flex>
        <Divider color={"white"} my="4" h="1" opacity={".6"} />
        <Text
          fontSize={".7rem"}
          textAlign={"center"}
          opacity={".7"}
          fontWeight={"semibold"}
        >
          Copyright &copy; 2024IoT INFOR HUB
        </Text>
      </Box>
    </Container>
  );
};

export default Footer;
