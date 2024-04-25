import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link as RouteLink } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Img,
  Link,
  List,
  ListIcon,
  ListItem,
  Spinner,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";
import { FaCheckDouble } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState();
  const [loading, setLoading] = useState(true);
  let { product_id, productName } = useParams();

  useEffect(() => {
    const fetchProductDetail = async () => {
      const options = {
        method: "GET",
        url: `https://amazon-scrapper17.p.rapidapi.com/products/${product_id}`,
        params: {
          apiKey: "3c801d11ddb8472ee82c78036719fd15",
        },
        headers: {
          "X-RapidAPI-Key":
            "3212423239msh31eb2c53aad051dp1e7cbcjsn269648a75709",
          "X-RapidAPI-Host": "amazon-scrapper17.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setProductDetail(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductDetail();
  }, []);

  return (
    <Container position={"relative"} pt={28} pb="12" maxW="unset" m="0">
      {loading ? (
        <Grid minH={"15rem"} placeItems={"center"}>
          <Spinner size={"xl"} />
        </Grid>
      ) : (
        <Flex
          flexDir={{ base: "column", md: "row" }}
          maxW={{ base: "90vw", sm: "85vw", md: "80vw", lg: "75vw" }}
          mx="auto"
          justifyContent={"space-between"}
        >
          <Flex
            order={{ base: 2, md: 1 }}
            flexDir="column"
            gap="16"
            w={{ base: "90%", md: "35%" }}
          >
            <Box as={CCarousel} controls indicators dark>
              {productDetail.images.map((imageurl, index) => (
                <Box as={CCarouselItem} key={index}>
                  <Box
                    as={CImage}
                    src={imageurl}
                    maxH="20rem"
                    mx="auto"
                    aspectRatio={{ base: 1, sm: 1 }}
                  />
                </Box>
              ))}
            </Box>
            <Box>
              <Heading as="h4" fontSize={"1.3rem"}>
                Product Category
              </Heading>
              {productDetail.product_category}
            </Box>
            <Box>
              <Heading as="h4" fontSize={"1.3rem"}>
                Features
              </Heading>
              <List spacing={3} paddingLeft={"0"}>
                {productDetail.feature_bullets.map((feature, index) => {
                  return (
                    <ListItem key={index}>
                      <ListIcon as={FaCheckDouble} color="green.500" />
                      {/* <Text as="span" fontWeight={"semibold"} pr="2">
                            {key}:
                          </Text> */}
                      <Text as="span">{feature}</Text>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </Flex>
          <Flex flexDir={"column"} w={{ base: "100%", md: "55%" }} gap="16">
            <Box>
              <Heading>{productDetail.name}</Heading>
              {/* <Text
                fontSize={"1.2rem"}
                fontWeight={"semibold"}
                color="primary"
                opacity={".8"}
              >
                {productDetail.pricing}
              </Text>
              <Text>List Price: {productDetail.list_price}</Text>
              <Text>Shipping Price: {productDetail.shipping_price}</Text> */}
            </Box>
            <Box>
              <Heading as="h4" fontSize={"1.3rem"}>
                Description
              </Heading>
              <Text>{productDetail.full_description}</Text>
            </Box>
            <Box>
              <Link href={productDetail.brand_url} target="_blank">
                {productDetail.brand}
              </Link>
            </Box>
            <Box>
              <Heading as="h4" fontSize={"1.3rem"} mb={2}>
                Product Information
              </Heading>
              <TableContainer>
                <Table
                  variant={"striped"}
                  size={"sm"}
                  boxShadow={"sm"}
                  borderRadius={"1rem"}
                  w="100%"
                  // overflow={"hidden"}
                  style={{tableLayout: "fixed"}}
                >
                  <TableCaption>Product Info</TableCaption>
                  <Tbody>
                    {Object.entries(productDetail.product_information).map(
                      ([key, value], index) => (
                        <Tr key={index}>
                          <Td fontWeight={"semibold"}>{key}</Td>

                          <Td style={{wordWrap: "break-word"}}>{value}</Td>
                        </Tr>
                      )
                    )}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Flex>
          <Box pos="fixed" bottom="3rem" right={"3rem"}>
            <Button
              animation={"blink 1s linear infinite"}
              color={"white"}
              bg="primary"
              _hover={{ animation: "unset" }}
              as={RouteLink}
              to={`/vulnerability/${productName}`}
            >
              Check Vulnerability
            </Button>
          </Box>
        </Flex>
      )}
    </Container>
  );
};

export default ProductDetail;
