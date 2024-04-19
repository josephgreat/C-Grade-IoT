import React, { useContext, useEffect, useState } from "react";
import {
  Conclusion,
  Error,
  HeroSection,
  Intro,
  ProductCard,
  Smartdoorbells,
  SmartThermostats,
} from "../components";
import {
  Box,
  Button,
  Divider,
  Grid,
  Heading,
  Spinner,
  Link,
} from "@chakra-ui/react";
import axios from "axios";
import { Link as RouteLink } from "react-router-dom";
import { BsWifiOff } from "react-icons/bs";
import { ErrorContext } from "../PageWrapper";

const LandingPage = () => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const {error, setError} = useContext(ErrorContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          url:
            "https://amazon-scraper-api11.p.rapidapi.com/search/smart%20door%20bell",
          params: {
            api_key: "a6b524dc87ad22814fe57302cea9cc20",
          },
          headers: {
            "X-RapidAPI-Key":
              "3212423239msh31eb2c53aad051dp1e7cbcjsn269648a75709",
            "X-RapidAPI-Host": "amazon-scraper-api11.p.rapidapi.com",
          },
        };
        const response = await axios.request(options);
        console.log(response.data);
        setDevices(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        if (error.message === "Network Error") {
          setError("Please check your Internet ");
        }
        console.log(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <Box>
      <HeroSection />
      <Intro />
      <Divider
        h={".1rem"}
        bg="rgba(126, 255, 254)"
        maxW={{ base: "90vw", sm: "85vw", md: "80vw", lg: "75vw" }}
        mx="auto"
      />

      <Smartdoorbells />
      <SmartThermostats />
      <Box
        my="16"
        maxW={{ base: "90vw", sm: "85vw", md: "80vw", lg: "75vw" }}
        mx="auto"
      >
        <Heading as="h3" fontSize="1.7rem" textAlign={"center"} mb="8">
          Range of Innovative Smart Products
        </Heading>

        {loading ? (
          <Grid placeItems={"center"} minH={"10rem"}>
            <Spinner size="xl" />
          </Grid>
        ) : error ? (
          <Error message={error} icon={<BsWifiOff />} />
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
            {devices.splice(0, 6).map((device) => (
              <ProductCard key={device.asin} device={device} />
            ))}
          </Grid>
        )}
        <Link
          as={RouteLink}
          to="/products/smart door bells"
          mt="8"
          w="fit-content"
          mx="auto"
          display={"flex"}
        >
          See All Products
        </Link>
      </Box>
      <Divider
        h={".1rem"}
        bg="rgba(126, 255, 254)"
        maxW={{ base: "90vw", sm: "85vw", md: "80vw", lg: "75vw" }}
        mx="auto"
      />
      <Conclusion />
    </Box>
  );
};

export default LandingPage;
