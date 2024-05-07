import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Select,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Error, ProductCard } from "../components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ErrorContext } from "../PageWrapper";
import { BsWifi1, BsWifi2, BsWifiOff } from "react-icons/bs";

const Products = () => {
  let { productName } = useParams();
  let { error, setError } = useContext(ErrorContext);
  const [devices, setDevices] = useState([]);
  const [doorBells, setDoorBells] = useState([]);
  const [thermostats, setThermostats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteringValue, setFilteringValue] = useState(
    productName || "smart door bells"
  );
  // console.log(productName);
  function removeDuplicates(array, property) {
    return array.filter(
      (obj, index, self) =>
        index === self.findIndex((t) => t[property] === obj[property])
    );
  }
  const fetchDoorBellsData = async () => {
    if (doorBells.length > 0) {
      // setFilteringValue("smart door bells");
      setDevices(removeDuplicates(doorBells, "asin"));
      setLoading(false);
      return;
    }
    try {
      setLoading(true);

      const door_bells_options = {
        method: "GET",
        url:
          "https://h-amazon-data-scraper2.p.rapidapi.com/search/smart%20door%20bells",
        params: {
          api_key: "69fa81e8482d59c2da9d196b27999911",
        },
        headers: {
          "X-RapidAPI-Key":
            "3212423239msh31eb2c53aad051dp1e7cbcjsn269648a75709",
          "X-RapidAPI-Host": "h-amazon-data-scraper2.p.rapidapi.com",
        },
      };

      const door_bells_response = await axios.request(door_bells_options);
      setDoorBells(door_bells_response.data.results);
      console.log(door_bells_response.data.results);
      setDevices(removeDuplicates(door_bells_response.data.results, "asin"));
      setLoading(false);
      // console.log(door_bells_response);
    } catch (err) {
      if (err.message === "Network Error")
        setError("Check your internet connection");
      else setError("Error fetching data");
      setLoading(false);
    }
  };
  const fetchThermostatData = async () => {
    setLoading(true);

    if (thermostats.length > 0) {
      console.log(thermostats);
      setDevices(thermostats);
      setLoading(false);
      return;
    }

    try {
      const thermostat_options = {
        method: "GET",
        url:
          "https://h-amazon-data-scraper2.p.rapidapi.com/search/smart%20thermostat",
        params: {
          api_key: "69fa81e8482d59c2da9d196b27999911",
        },
        headers: {
          "X-RapidAPI-Key":
            "3212423239msh31eb2c53aad051dp1e7cbcjsn269648a75709",
          "X-RapidAPI-Host": "h-amazon-data-scraper2.p.rapidapi.com",
        },
      };

      const thermostat_response = await axios.request(thermostat_options);

      setThermostats(thermostat_response.data.results);

      setDevices(removeDuplicates(thermostat_response.data.results, "asin"));
      setLoading(false);
      // console.log(door_bells_response);
    } catch (err) {
      if (err.message === "Network Error")
        setError("Check your internet connection");
      else setError("Error fetching data");
      setLoading(false);
    }
  };
  useEffect(() => {
    if (filteringValue === "smart door bells") fetchDoorBellsData();
    else if (filteringValue === "smart thermostat") fetchThermostatData();
  }, [filteringValue]);

  const handleFilter = (e) => {
    // console.log();
    setFilteringValue(e.target.value);
  };

  return (
    <Container position={"relative"} px=".8rem" maxW="unset" pt={28} pb="12" m="0">
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
              <option value="smart thermostat">Smart Thermostat</option>
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
            <Grid
              templateColumns={{
                base: "repeat(1, 0.8fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              justifyContent={"center"}
              alignItems={"center"}
              placeItems={"center"}
              gap={6}
              mt={8}
              minH={"10rem"}
            >
              {devices.map((device) => (
                <ProductCard
                  key={device.asin}
                  device={device}
                  productName={filteringValue}
                />
              ))}
            </Grid>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Products;
