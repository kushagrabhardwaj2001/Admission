import React from "react";
import { CircularProgress, Divider } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
// Import navigate

import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { MdPlace } from "react-icons/md";

function UniversityCard({ university }) {
  console.log("check", university);
  const navigate = useNavigate();
  // const {image1,collegename} = university
  console.log("test", university);
  const handleclick = () => {
    const cleanedUniversityName = university._id;
    navigate(`/universities/state/${cleanedUniversityName}`);
    console.log("testing", cleanedUniversityName);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      marginBottom={"4vh"}
      marginLeft={{ lg: "1vw" }}
      marginTop={4}
    >
      <Box
        borderWidth="1px"
        border={"2px solid #01B4EC"}
        borderRadius="35px"
        overflow="hidden"
        p={4}
        // boxShadow="md"
        bg="white"
        width={{ base: "100vw", lg: "70vw" }}
        margin={"auto"}
        // height={"35vh"}
        // m="auto"
        position={"relative"}
        fontFamily={"Lato"}
        cursor={"pointer"}
        boxShadow="rgba(0, 0, 0, 0.7) 5px 7px 8px"
        transition="transform 0.3s ease"
        _hover={{
          transform: "translate(15px, 15px)",
        }}
      >
        <HStack>
          <VStack ml={{ base: "1vw", lg: "3vw" }}>
            <Image src={university.image2} alt={university.collegename} />
          </VStack>

          <VStack width={"45vw"} textAlign={"center"}>
            <Text
              color={"#01B4EC"}
              fontSize={{ base: "0.6rem", lg: "1rem" }}
              fontWeight="bold"
            >
              {university.collegename}
            </Text>
            <Flex
              align="center"
              fontSize={{ base: "0.7rem", lg: "1rem" }}
              color={"black"}
              fontWeight={"200"}
              opacity={"0.7"}
            >
              <Icon as={MdPlace} boxSize={30} />
              <Text>{university.address}</Text>
              <span>,</span>

              <Text>{university.state}</Text>
              <Box ml={2}></Box>
            </Flex>
            {university.courses
              .filter((course) => course.course.replace(/\s/g, "") === "MBBS")
              .map((ele) => (
                <Box bg="gray.200" p={2} borderRadius="md">
                  <Text
                    fontSize={{ base: "0.6rem", lg: "1rem" }}
                    textAlign={"start"}
                  >
                    <strong>Courses Offered:</strong> {ele.course}
                  </Text>

                  <Box
                    background={"black"}
                    // width={"70vh"}
                    color={"white"}
                    textAlign={"start"}
                  >
                    <Text
                      fontSize={{ base: "0.6rem", lg: "1rem" }}
                      marginRight={"2vw"}
                    >
                      <strong style={{ marginRight: "1vw" }}>
                        {" "}
                        Fees Offered:
                      </strong>
                      {ele.tuitionFee}
                    </Text>
                  </Box>
                </Box>
              ))}
          </VStack>

          <VStack>
            <Button
              width={"10vw"}
              fontSize={{ base: "0.6rem", lg: "1rem" }}
              borderRadius={"10px"}
              height={"4vh"}
              mt={4}
              border={"2px solid #01B4EC"}
              cursor={"pointer"}
              onClick={handleclick}
              _hover={{ backgroundColor: "#01B4EC" }}
            >
              Details
            </Button>
          </VStack>
        </HStack>
        <HStack>
          <Box mt={4} fontSize={{ base: "0.6rem", lg: "1rem" }}>
            <Flex>
              <Text ml={"30"} mr={"30"}>
                About
              </Text>
              <Box w="2px" h="1.3rem" bg="black" />
              <Text ml={"30"} mr={"30"}>
                Courses
              </Text>{" "}
              <Box w="2px" h="1.3rem" bg="black" />
              <Text ml={"30"} mr={"30"}>
                Cut Off
              </Text>
              <Box w="2px" h="1.3rem" bg="black" />
              <Text ml={"30"} mr={"30"}>
                Admission
              </Text>
              <Box w="2px" h="1.3rem" bg="black" />
              <Text ml={"30"} mr={"30"}>
                Qna
              </Text>
            </Flex>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}

export default UniversityCard;
