import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

const SmartDoorBellsVul = () => {
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVulnerabilities = async () => {
      const options = {
        method: "GET",
        url: "https://google-search74.p.rapidapi.com/",
        params: {
          query: "smart doorbell vulnerabilities",
          limit: "20",
          related_keywords: "true",
        },
        headers: {
          "X-RapidAPI-Key":
            "3212423239msh31eb2c53aad051dp1e7cbcjsn269648a75709",
          "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setResults(response.data.results);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchVulnerabilities();
  }, []);
  const links = [
    { title: "‘Smart’ Doorbell Vulnerabilities",
      image:
        "https://cyberhoot.com/wp-content/uploads/2020/11/ring-doorbell-hack.jpg",
      link: "https://cyberhoot.com/blog/smart-doorbell-vulnerabilities/",
    },
    {
      image:
        "https://documents.trendmicro.com/images/TEx/articles/20190213231245113-632-d74bpia-800.jpg",
      link:
        "https://www.trendmicro.com/vinfo/us/security/news/internet-of-things/amazon-patches-ring-video-doorbell-pro-vulnerability-that-threatens-network-security",
    },
    {
      image:
        "https://article.images.consumerreports.org/image/upload/w_652,f_auto,q_auto,ar_16:9,c_lfill/v1708955430/prod/content/dam/CRO-Images-2024/Electronics/CR-Tech-Inlinehero-generic-video-doorbell-security-0224",
      link:
        "https://www.consumerreports.org/home-garden/home-security-cameras/video-doorbells-sold-by-major-retailers-have-security-flaws-a2579288796/",
    },
    {
      image:
        "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1323514886.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
      link:
        "https://edition.cnn.com/2024/03/09/tech/smart-home-cameras-hackers-security/index.html#:~:text=Less%20than%20two%20weeks%20after,footage%20stored%20on%20the%20app.",
    },
    "",
  ];

  return (
    <Container
      position={"relative"}
      pt={28}
      pb="12"
      maxW={{ base: "90vw", sm: "85vw", md: "80vw", lg: "75vw" }}
      mx="auto"
    >
      <Heading mb="8">Smart Door Bell Vulnerability</Heading>
      {loading ? (
        <Grid minH={"15rem"} placeItems={"center"}>
          <Spinner size={"xl"} />
        </Grid>
      ) : (
        <Flex flexDir={"column"} gap="4">
          {results.map(({ position, url, title, description }) => (
            <Box key={position}>
              <Link href={url} fontWeight={"semibold"} target="_blank" color={"primary"} fontSize={"1.2rem"}>
                {title}
              </Link>
              <Text>{description}</Text>
            </Box>
          ))}
        </Flex>
      )}
    </Container>
  );
};

export default SmartDoorBellsVul;
