import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Select,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Error, ProductCard } from "../components";
import axios from "axios";
import { useParams, Link as RouteLink } from "react-router-dom";
import { ErrorContext } from "../PageWrapper";
import { BsWifi1, BsWifi2, BsWifiOff } from "react-icons/bs";

const Products = () => {
  let { productName } = useParams();
  let { error, setError } = useContext(ErrorContext);
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteringValue, setFilteringValue] = useState(
    productName || "smart door bell"
  );

  useEffect(() => {
    let fetchData = async (device) => {
      device = device.split(" ").join("_");

      const door_bells_response = await fetch("/assets/products.json");
      let jsonData = await door_bells_response.json();
      setDevices(jsonData[device]);
      console.log(jsonData);
      setLoading(false);
    };
    fetchData(filteringValue);
  }, [filteringValue]);

  const handleFilter = (e) => {
    setFilteringValue(e.target.value);
  };

  return (
    <Container
      position={"relative"}
      px=".8rem"
      maxW="unset"
      pt={28}
      pb="12"
      m="0"
    >
      <Box
        maxW={{ base: "90vw", sm: "85vw", md: "80vw", lg: "75vw" }}
        mx="auto"
      >
        <Flex
          flexDir={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
        >
          <Heading>Products</Heading>
          <Flex gap="4" alignItems={"center"}>
            <Text fontWeight={"semibold"} mb="0">
              Filter:
            </Text>
            <Select
              maxW="20rem"
              cursor={"pointer"}
              onChange={(e) => handleFilter(e)}
            >
              <option value="smart door bells">Smart Door Bells</option>
              <option value="smart thermostats">Smart Thermostats</option>
            </Select>
          </Flex>
        </Flex>
        <Box>
          {loading ? (
            <Grid placeItems={"center"} minH={"10rem"}>
              <Spinner size="xl" />
            </Grid>
          ) : error ? (
            <Error icon={<BsWifiOff />} message={error} />
          ) : (
            <VStack
              // templateColumns={"1fr"}
              gap={6}
              mt={8}
              minH={"10rem"}
            >
              {devices.map((device, index) => (
                <ProductCard key={index} device={device} index={index} />
              ))}
            </VStack>
          )}
        </Box>
        <Box my="4">
          <Text>
            Check out other{" "}
            <Link
              as={RouteLink}
              to={`/vulnerability/${filteringValue}`}
              color={"primary"}
              textDecor={"underline"}
              fontWeight={"semibold"}
            >
              vulnerabilities
            </Link>{" "}
            common among{" "}
            <Text
              as="span"
              fontWeight={"semibold"}
              textTransform={"capitalize"}
              mr="1"
            >
              {filteringValue}
            </Text>
            and their{" "}
            <Link
              as={RouteLink}
              to={`/vulnerability_control/${filteringValue}`}
              color={"primary"}
              textDecor={"underline"}
              fontWeight={"semibold"}
            >
              mitigation measures
            </Link>
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default Products;
