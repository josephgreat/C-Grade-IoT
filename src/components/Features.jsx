import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Img,
  Text,
  Link,
  ListItem,
  List,
  ListIcon,
} from "@chakra-ui/react";
import {
  FaBan,
  FaDatabase,
  FaLightbulb,
  FaLock,
  FaPadlet,
  FaShield,
  FaShieldHalved,
  FaUsers,
} from "react-icons/fa6";
import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { Link as RouteLink } from "react-router-dom";
import { BsCheckAll } from "react-icons/bs";
import FeatureCard from "./FeatureCard";

const keyFeatures = [
  {
    category: "Device Vulnerability Database",
    icon: FaDatabase,
    backgroundColor: "#4CAF50",
    features: [
      {
        title: "Easy-to-Understand Reports",
        description:
          "Get detailed yet straightforward information on the security flaws of various IoT devices.",
      },
      {
        title: "Device Ratings",
        description:
          "See how different devices rank in terms of security, helping you make informed purchasing decisions.",
      },
    ],
  },
  {
    category: "Security Tips & Best Practices",
    icon: FaLock,
    backgroundColor: "#2196F3",
    features: [
      {
        title: "Step-by-Step Guides",
        description: "Learn how to secure your devices with our simple guides.",
      },
      {
        title: "Regular Updates",
        description:
          "Stay informed about the latest threats and how to protect against them.",
      },
    ],
  },
  {
    category: "Expert Insights",
    icon: FaLightbulb,
    backgroundColor: "#FFC107", 
    features: [
      {
        title: "Articles & Blogs",
        description:
          "Read articles from cybersecurity experts about emerging trends and threats.",
      },
      {
        title: "Webinars & Tutorials",
        description:
          "Join our live sessions and tutorials to deepen your understanding.",
      },
    ],
  },
  {
    category: "Community Support",
    icon: FaUsers,
    backgroundColor: "#FF5722",
    features: [
      {
        title: "Discussion Forums",
        description: "Connect with other users to share experiences and tips.",
      },
      {
        title: "Q&A Sessions",
        description: "Get your questions answered by experts.",
      },
    ],
  },
];

const Features = () => {
  return (
    <Box
      my="16"
      maxW={{ base: "90vw", sm: "85vw", md: "80vw", lg: "75vw" }}
      mx="auto"
    >
      <Heading as="h3" fontSize={"1.7rem"} mb="8" textAlign={"center"}>
        Key Features of our Platform
      </Heading>
      <Flex
        gap="5%"
        justifyContent="center"
        flexDir={{ base: "column", md: "row" }}
        flexWrap={"wrap"}
      >
        {keyFeatures.map((feature, index) => (
          <FeatureCard feature={feature} index={index} key={index}/>
        ))}
      </Flex>
    </Box>
  );
};

export default Features;
