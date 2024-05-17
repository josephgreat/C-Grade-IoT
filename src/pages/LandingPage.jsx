import React from "react";
import {
  ContactUs,
  HeroSection,
  Intro,
  Features,
  WhyTrustUs,
  HowToGetStarted,
} from "../components";
import { Box } from "@chakra-ui/react";


const LandingPage = () => {
  return (
    <Box>
      <HeroSection />
      <Intro
        title={"What is IoT?"}
        description={
          "The Internet of Things (IoT) refers to the network of physical objects—“things”—embedded with sensors, software, and other technologies to connect and exchange data with other devices and systems over the internet. Examples include smart thermostats, security cameras, and connected appliances."
        }
      />
      <Intro
        title={"Why Should I Care?"}
        title_right={true}
        description={
          "Your home is becoming smarter with these IoT devices, but they can also be vulnerable to cyber threats. Understanding these vulnerabilities is crucial to keeping your personal information and home safe."
        }
      />
      <Intro
        title={"Our Mission"}
        description={
          "Our platform aims to educate you on the common vulnerabilities found in popular home-grade IoT devices. We provide practical tips and resources to help you secure your smart home."
        }
      />

      <Features />
      <HowToGetStarted />
      <WhyTrustUs />
      <ContactUs />
    </Box>
  );
};

export default LandingPage;
