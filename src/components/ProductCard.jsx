import { Box, GridItem, Image, Text, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouteLink } from "react-router-dom";

const ProductCard = ({ device }) => {
  let { name, image, stars, price_string, asin } = device;
  return (
    <Link as={RouteLink} to={`/product_detail/${asin}`}>
      <GridItem
        cursor={"pointer"}
        _hover={{ transform: "scale(1.05)", backdropFilter: "contrast(.95)" }}
        transition={"all .3s linear"}
      >
        <Box p={5} borderWidth="1px" borderRadius="md" shadow="md">
          <Box
            bg={`url(${image}) no-repeat center`}
            bgSize={"contain"}
            w="100%"
            h="12rem"
            mb={4}
          />
          <Text fontSize="lg" className="product_title">
            {name}
          </Text>
          {/* <Text>{device.description}</Text> */}
          <Text fontSize="md" fontWeight="bold" mt={2}>
            Price:{" "}
            {/* <Text as="del" color={"red"}>
            {price_string}
          </Text>{" "} */}
            {price_string}
          </Text>
          <Text>{stars}</Text>
        </Box>
      </GridItem>
    </Link>
  );
};

export default ProductCard;
