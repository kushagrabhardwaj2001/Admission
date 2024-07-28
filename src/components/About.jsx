import React from "react";
// import img9 from "./about-thumbnail.5b39fc29b2d94540d419.jpg";
import img9 from "./abouts.avif";


import {
  Box,
  background,
  position,
  button,
  Image,
  Stack,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import {
  HStack,
  Flex,
  Icon,
  Divider,
  Button,
  Heading,
  VStack,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Box>
      <Box
        className="container4"
        // width="100vw"
        height={{ base: "180vh", md: "100vh", lg: "50vh", xl: "100vh" }}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        backgroundColor="#CFEBFD"
        py={5}
        marginTop={"16vh"}
      >
        <h2 style={{ fontSize: "2rem", marginTop: "10px" }}>
          About Us
          <br />
          <span style={{ color: "#023B7D", fontWeight: "200" }}>
            {" "}
            About Admission Possibility
          </span>
        </h2>

        <Stack
          height={{ base: "160vh", md: "90vh", lg: "50vh", xl: "160vh" }}
          width={"94%"}
          margin={"auto"}
          flexDirection={{ base: "column", md: "column", lg: "row" }}
          gap={6}
        >
          <Box
            width={{ base: "90%", sm: "90%", md: "80%", xl: "50%" }}
            margin="auto"
            height={{ base: "0vh", md: "auto" }}
          >
            <Image
              src={img9}
              w={{ base: "90%", md: "60vw" }}
              margin={"auto"}
              h="auto"
            />
          </Box>

          <Box
            width={{ base: "90%", sm: "90%", md: "80%", xl: "50%" }}
            margin={"auto"}
          >
            <Box
              style={{
                fontSize: "1rem",

                color: "rgba(0,0,0,0.6)",
              }}
              textAlign={"start"}
            >
              Welcome to Admission Possibility. We are a dedicated team of
              educators and technology enthusiasts, on a mission to empower
              students like you in finding the perfect college match. With a
              wealth of experience in education and technology, we've crafted an
              intuitive, innovative, and efficient platform to streamline your
              college search journey. Join us, and let's embark on the path to
              academic and personal growth!
              <br />
              Our commitment goes beyond listings; it's about guiding you
              towards your ideal educational destination and future success.
              Explore the world of higher education possibilities that await you
              at Admission Possibility."
              <Box marginTop={"3vh"}>
                <Flex>
                  <Icon as={StarIcon} w={25} h={25} color="#01B4EC" />
                  <Text marginLeft={"10px"}>Comprehensive Listings</Text>
                </Flex>
              </Box>
              <Box marginTop={"3vh"}>
                <Flex>
                  <Icon as={StarIcon} w={25} h={25} color="#01B4EC" />
                  <Text marginLeft={"10px"}>User-Friendly Interface</Text>
                </Flex>
              </Box>
              <Box marginTop={"3vh"}>
                <Flex>
                  <Icon as={StarIcon} w={25} h={25} color="#01B4EC" />
                  <Text marginLeft={"10px"}>Accurate Information</Text>
                </Flex>
              </Box>
              <Box marginTop={"3vh"}>
                <Flex>
                  <Icon as={StarIcon} w={25} h={25} color="#01B4EC" />
                  <Text marginLeft={"10px"}>Personalized Recommendations</Text>
                </Flex>
              </Box>
              <Box marginTop={"3vh"}>
                <Flex>
                  <Icon as={StarIcon} w={25} h={25} color="#01B4EC" />
                  <Text marginLeft={"10px"}>Feedback Integration</Text>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default About;
