import {
  Box,
  Heading,
  HStack,
  Icon,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsCheckAll } from "react-icons/bs";

const FeatureCard = ({ feature, index }) => {
  let { category, features, icon, backgroundColor } = feature;
  return (
    <HStack
      pb="8"
      flexDir={{ base: "column", sm: "row" }}
      gap="max(1rem, 5%)"
      w={{ base: "100%", md: "45%" }}
      textAlign={"justify"}
    >
      <Box
        bg={backgroundColor}
        p="4"
        rounded={{ base: "full", md: "none" }}
        roundedLeft={{ md: "full" }}
      >
        <Icon as={icon} fontSize="min(10vw, 3rem)" color={"white"} />
      </Box>
      <Box>
        <Heading as="h5" fontSize={"1.2rem"}>
          {category}
        </Heading>
        <List pl="0">
          {features.map(({ title, description }, index) => (
            <ListItem
              display={"flex"}
              //   gap="2%"
              alignItems={"center"}
              flexWrap={"wrap"}
            >
              <ListIcon as={BsCheckAll} color={"primary"} />
              <Text mb="0">{title}:</Text>
              {/* <Text mb="0">{description}</Text> */}
            </ListItem>
          ))}
        </List>
      </Box>
    </HStack>
  );
};

export default FeatureCard;
