import {
  Box,
  GridItem,
  Image,
  Text,
  Link,
  Heading,
  List,
  ListItem,
  ListIcon,
  VStack,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { BsCheck2All } from "react-icons/bs";

const ProductCard = ({ device, index }) => {
  let {
    name,
    image_url,
    details,
    mitigation_measures,
    vulnerabilities,
  } = device;
  let { resolution, features } = details;
  return (
    <VStack
      w="100%"
      // cursor={"pointer"}
      // _hover={{ backdropFilter: "contrast(.95)" }}
      transition={"all .3s linear"}
      p={5}
      borderBottom={"1px solid rgba(20,20,20,.2)"}
    >
      <Heading as="h5" fontSize="2xl" className="product_title">
        {name}
      </Heading>
      <Flex w="100%" gap="4" flexDir={{ base: "column", md: "row" }}>
        <Box
          bg={`url("${image_url}") no-repeat center`}
          bgSize={"contain"}
          w={{ base: "100%", md: "50%" }}
          h="8rem"
          mb={4}
          order={index % 2 === 0 ? 1 : 2}
        />

        <Box w={{ base: "100%", md: "50%" }}
          order={index % 2 === 0 ? 2 : 1}
          >
          {resolution && <Text><Text as="span" fontWeight={"semibold"}>Resolution:</Text> {resolution}</Text>}
          <Heading as="h6" fontSize={"md"}>
            Features
          </Heading>
          <List pl="0">
            {features.map((feature, index) => (
              <ListItem key={index}>
                <ListIcon as={BsCheck2All} color={"primary"} />
                {feature}
              </ListItem>
            ))}
          </List>
        </Box>
      </Flex>
      <Tabs variant={"soft-rounded"} isFitted w="100%">
        <TabList>
          <Tab>Vulnerabilities</Tab>
          <Tab>Mitigation Measures</Tab>
        </TabList>
        <TabPanels>
          <TabPanel display={"flex"} flexDir={"column"} gap="2">
            {vulnerabilities.map((vulnerability, index) => (
              <Flex key={index} alignItems={"center"} gap="2" flexWrap={"wrap"}>
                <Icon as={BsCheck2All} />
                <Text as="span" fontWeight={"semibold"}>
                  {vulnerability.name}:
                </Text>
                <Text as="span">{vulnerability.description}</Text>
              </Flex>
            ))}
          </TabPanel>
          <TabPanel bg="rgba(200,200,200,.3)" roundedBottom="2rem" display={"flex"} flexDir={"column"} gap="2">
            {mitigation_measures.map((mitigation_measure, index) => (
              <Flex key={index} alignItems={"center"} gap="2">
                <Icon as={BsCheck2All} />
                <Text as="span">{mitigation_measure}</Text>
              </Flex>
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

export default ProductCard;
