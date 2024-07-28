import React, { useEffect, useState } from "react";
import banner from "./main-hero2.png";
import img1 from "./college-icon2.png";
import img2 from "./college-icon3.png";
import img3 from "./istockphoto-532548555-170667a.jpg";
import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  background,
  position,
  Stack,
  Select,
  Grid,
  GridItem,
  Img,
  Input,
  FormControl,
  Textarea,
  Image,
  CircularProgress,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import {
  HStack,
  Flex,
  Icon,
  Divider,
  Button,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import img4 from "./russia.png";
import img5 from "./Bangladesh.jpg";
import img6 from "./Nepal.webp";
import img7 from "./Kazakhstan.png";
import img8 from "./flag-round-250.png";
import img9 from "./about-thumbnail.jpg";
import img10 from "./service-icon1.png";
import img11 from "./service-icon2.png";
import img12 from "./service-icon3.png";
import img13 from "./service-icon4.png";

import img14 from "./service-icon5.png";
import img15 from "./service-icon6.png";
import img16 from "./blog-1.jpg";
import img17 from "./istockphoto-1447889800-170667a.webp";
import img18 from "./istockphoto-532548555-170667a.jpg";
import img19 from "./call-us.jpg";
import img20 from "./medical in india.jpg";
import img21 from "./medical in abroad.jpg";
import img39 from "./blog1.png";
import img40 from "./blog2.png";
import img41 from "./blog3.png";
import img42 from "./blog4.png";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import { AuthContext } from "./AuthContext/AuthContextProvider";
import axios from "axios";
import Contact from "./Contact";
import Runningnumber from "./Running";
const Home = () => {
  const [topRecommendedCollege, setTopRecommendedCollege] = useState([]);
  const isAuth = localStorage.getItem("isAuth");
  const [formData, setFormData] = useState();

  const navigate = useNavigate();
  const handlesubmit = () => {
    const course = document.querySelector(".dropdown1");
    const val = course.value;
    console.log(val);
    navigate(`/courses/${val}`);
  };

  const handleGet = async () => {
    try {
      // const res = await fetch("http://localhost:3008/api/data");
      const res = await fetch(
        "https://api.admissionpossibility.com/api/get-all-blog"
      );
      // const res = await fetch("https://api.admissionpossibility.com/api/get-all-blog");

      const data = await res.json();
      const limitedData =
        data.blogs.length > 4 ? data.blogs.slice(0, 4) : data.blogs;
      setFormData(limitedData);
      // console.log(data.blogs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handlecontactclick = () => {
    navigate(`/contact`);
  };
  // console.log("isAuth FROM LOCAL STORAGE", isAuth);

  const getUniversity = async () => {
    try{
    // const res = await axios.get(`http://localhost:5000/api/universities`);
    const res = await axios.get(`https://api.admissionpossibility.com/api/universities`);
    // const res = await axios.get(`https://api.admissionpossibility.com/api/all/universities`);
    
    const data = res.data.universities;
  
    // Shuffle the array
    const shuffledColleges = data.sort(() => 0.5 - Math.random());
  
    // Get the first 4 elements from the shuffled array
    const recommendedColleges = shuffledColleges.slice(0, 4);
  
    setTopRecommendedCollege(recommendedColleges);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    handleGet();
    if (topRecommendedCollege?.length === 0) {
      getUniversity();
    }
  }, []);

  console.log("topRecommendedCollege:", topRecommendedCollege);
  return (
    <div style={{ marginTop: "16vh" }}>
      <div className="banner" style={{ height: "70vh", marginTop: "4vh" }}>
        <Box
          fontSize={["3rem", "3rem", "3rem", "4rem", "4rem"]}
          color={"#01B4EC"}
          zIndex={"1"}
          position={"absolute"}
          top={"10vh"}
          left={"10vw"}
          marginBottom={"18"}
          width={["80%", "80%", "80%", "40%", "40%"]}
        >
          <Text textAlign={"start"}>Your Education</Text>

          <Text textAlign={"start"}>Your Future</Text>
          <Text
            textAlign={"start"}
            fontSize={"1rem"}
            width={"90%"}
            color={["black", "#01B4EC"]}
          >
            Explore a diverse array of colleges and universities across the
            globe, unlocking boundless opportunities for your academic journey.
          </Text>

          <Flex width={"80%"} marginTop={"6vh"}>
            {isAuth ? (
              <Button
                padding={"13px 18px"}
                fontSize={["0.7rem", "1.3rem", "0.7rem", "1.3rem", "1.3rem"]}
                background={"white"}
                color={"black"}
                fontFamily={"poppins"}
                fontWeight={"normal"}
                marginRight={"5vw"}
                width={["30vw", "14vw"]}
                height={"6vh"}
                paddingX={"15px"}
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Button
                padding={"13px 18px"}
                fontSize={["0.7rem", "1.3rem", "0.7rem", "1.3rem", "1.3rem"]}
                background={"white"}
                color={"black"}
                fontFamily={"poppins"}
                fontWeight={"normal"}
                marginRight={"5vw"}
                width={["30vw", "14vw"]}
                height={"6vh"}
                paddingX={"15px"}
                onClick={() => {
                  navigate("/login/user");
                }}
              >
                Login
              </Button>
            )}

            <Button
              padding={"13px 18px"}
              fontSize={["0.7rem", "1.3rem", "0.7rem", "1.3rem", "1.3rem"]}
              background={"#01B4EC"}
              color={"black"}
              onClick={handlecontactclick}
              height={"6vh"}
              fontFamily={"poppins"}
              fontWeight={"normal"}
              width={["30vw", "14vw"]}
            >
              Contact now
            </Button>
          </Flex>
        </Box>
      </div>

      <Box
        // style={{ width: "99vw" }}
        height={["80vh", "80vh", "80vh", "39vh", "39vh"]}
        marginTop={["11vh", "11vh", "11vh", "11vh", "11vh"]}
      >
        <Stack
          marginTop={"7vh"}
          width={"75%"}
          margin={"auto"}
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
          direction={["column", "column", "column", "row", "row"]}
        >
           {" "}
          <Box
            width={["90vw", "90vw", "90vw", "35vw", "35vw"]}
            height={"36vh"}
            background={"white"}
            boxShadow="15px 4px 64px rgba(0, 0, 0, 0.15)"
            display={"flex"}
            justifyContent={"center"}
            borderBottom={"4px solid #FF6C00"}
            alignItems={"center"}
            borderRadius={"20px"}
            position={"relative"}
          >
               {" "}
            <HStack width={"100%"} height={"100%"}>
                   
              <Box
                width={["90vw", "90vw", "90vw", "35vw", "35vw"]}
                height={"100%"}
                background={"white"}
                boxShadow="15px 4px 64px rgba(0, 0, 0, 0.15)"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"20px"}
                position={"relative"}
              >
                 {" "}
                <Box
                  position={"absolute"}
                  top={"0px"}
                  left={"0px"}
                  width={["50vw", "40vw", "50vw", "15vw", "15vw"]}
                  height={"7vh"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  background={"#00008B"}
                  fontSize={"1.9rem"}
                  color={"white"}
                  borderRadius={"0px 0px 20px 20px"}
                  fontWeight={"SemiBold"}
                  px={2}
                >
                  <Text
                    fontSize={[
                      "1.5rem",
                      "1.7rem",
                      "1.7rem",
                      "1.7rem",
                      "1.7rem",
                    ]}
                  >
                    Study In India
                  </Text>
                </Box>
                <HStack
                  width={"100%"}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  px={2}
                >
                  <Box
                    width={"65%"}
                    fontSize={[
                      "0.6rem",
                      "0.7rem",
                      "0.8rem",
                      "0.8rem",
                      "0.8rem",
                    ]}
                    marginTop={"8vh"}
                    textAlign={"start"}
                  >
                    Embark on a Healing Odyssey: Study Medicine in India.
                    Immerse yourself in a vibrant and culturally diverse
                    educational experience. Explore prestigious medical
                    institutions, embrace clinical excellence, and shape your
                    future as a compassionate healer in the land of opportunity.
                         {" "}
                  </Box>
                       {" "}
                  <Box>
                            <img src={img20}></img>     {" "}
                  </Box>
                     {" "}
                </HStack>
                 {" "}
              </Box>
                 {" "}
            </HStack>
             {" "}
          </Box>
          <Box
            width={["90vw", "90vw", "90vw", "35vw", "35vw"]}
            height={"36vh"}
            background={"white"}
            boxShadow="15px 4px 64px rgba(0, 0, 0, 0.15)"
            display={"flex"}
            justifyContent={"center"}
            borderBottom={"4px solid #FF6C00"}
            alignItems={"center"}
            borderRadius={"20px"}
            position={"relative"}
          >
               {" "}
            <HStack width={"100%"} height={"100%"}>
                   
              <Box
                width={["90vw", "90vw", "90vw", "35vw", "35vw"]}
                height={"100%"}
                background={"white"}
                boxShadow="15px 4px 64px rgba(0, 0, 0, 0.15)"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"20px"}
                position={"relative"}
              >
                 {" "}
                <Box
                  position={"absolute"}
                  top={"0px"}
                  left={"0px"}
                  width={["50vw", "40vw", "50vw", "15vw", "15vw"]}
                  height={"7vh"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  background={"#00008B"}
                  fontSize={"1.9rem"}
                  color={"white"}
                  borderRadius={"0px 0px 20px 20px"}
                  fontWeight={"SemiBold"}
                  px={2}
                >
                  <Text
                    fontSize={[
                      "1.5rem",
                      "1.7rem",
                      "1.7rem",
                      "1.7rem",
                      "1.7rem",
                    ]}
                  >
                    Study Abroad
                  </Text>
                </Box>
                <HStack
                  width={"100%"}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  px={2}
                >
                  <Box
                    width={"65%"}
                    fontSize={[
                      "0.6rem",
                      "0.7rem",
                      "0.8rem",
                      "0.8rem",
                      "0.8rem",
                    ]}
                    marginTop={"8vh"}
                    textAlign={"start"}
                  >
                    Embark on a Global Healing Journey: Study Medicine Abroad.
                    Immerse yourself in a world of diverse cultures and
                    exceptional medical education. Explore renowned
                    international medical institutions, embrace clinical
                    excellence, and shape your future as a globally-minded
                    healer.      {" "}
                  </Box>
                       {" "}
                  <Box>
                            <img src={img21}></img>     {" "}
                  </Box>
                     {" "}
                </HStack>
                 {" "}
              </Box>
                 {" "}
            </HStack>
             {" "}
          </Box>
        </Stack>
      </Box>

      <Box
        className="container2"
        height={["130vh", "75vh"]}
        style={{
          // width: "100vw",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Heading as="h2" style={{ marginTop: "3vh" }} size="xl"></Heading>

        <span
          style={{ fontSize: "1.8rem", color: "#01B4EC", fontWeight: "200" }}
        >
          STUDY ABROAD | TOP SCHOOLS, COLLAGES AND UNIVERSITIES IN ABROAD
        </span>
        <br />

        <Text
          fontSize={{ base: "1.6rem", lg: "2rem" }}
          style={{ marginTop: "2.5vh", color: "#000000" }}
        >
          BETTER EDUCATION FOR A BETTER WORLD
        </Text>

        <Box
          width={"90vw"}
          backgroundColor={"#91D8F5"}
          marginTop={"10vh"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"18px"}
        >
          <Stack
            direction={["column", "row"]}
            justifyContent={"center"}
            width={["80vw", "90vw"]}
            height={["40vh", "20vh"]}
            alignItems={"center"}
            marginLeft={["4vw", "4vw"]}
          >
            <select
              className="dropdown"
              style={{ fontSize: "1.2rem", width: "80vw" }}
            >
              <option value="option1">Looking For</option>
              <option value="option2">Medical in India</option>
              <option value="option3">Medical in Abroad</option>
            </select>

            <select
              className="dropdown"
              style={{ fontSize: "1.2rem", width: "80vw" }}
            >
              <option value="option1">Course Type</option>
              <option value="option2">Under Graduate</option>
              <option value="option3">Post Graduate</option>
            </select>

            <select
              className="dropdown1"
              style={{ fontSize: "1.2rem", width: "80vw" }}
            >
              <option value="option1">Course Name</option>
              <option value="MBBS">MBBS</option>
              <option value="MD">MD</option>
              <option value="MS">MS</option>
              <option value="DM">DM</option>
              <option value="MCH">MCH</option>
              <option value="DIP">DIP</option>
            </select>
          </Stack>

          <br />
        </Box>

        <Button
          onClick={handlesubmit}
          padding={"7px 18px"}
          marginTop={"6vh"}
          fontSize={["1rem", "1.5rem", "1rem", "1.5rem", "1.5rem"]}
          background={"#01B4EC"}
          color={"black"}
          fontFamily={"Jost"}
          fontWeight={"normal"}
          width={["30vw", "14vw"]}
        >
          Submit
        </Button>

        <Stack
          direction={["column", "column", "column", "row", "row"]}
          marginTop={"7vh"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            textAlign={"center"}
            border={"3px solid #01B4EC"}
            width={["80vw", "28vw"]}
            borderRadius={"16px"}
          >
            <Text color={"#01B4EC"} fontSize={"3rem"} fontWeight={"600"}>
            <Runningnumber
                initialnumber={200}
                targetNumber={859}
                interval={10}
              />
            </Text>

            <Text fontWeight={"300"}>Global University Tie Ups</Text>
          </Box>

          <Box
            textAlign={"center"}
            border={"3px solid #01B4EC"}
            width={["80vw", "28vw"]}
            borderRadius={"16px"}
          >
            <Text color={"#01B4EC"} fontSize={"3rem"} fontWeight={"600"}>
              <Runningnumber
                initialnumber={2000}
                targetNumber={2940}
                interval={10}
              />
            </Text>

            <Text fontWeight={"300"}>Student placed</Text>
          </Box>

          <Box
            textAlign={"center"}
            border={"3px solid #01B4EC"}
            width={["80vw", "28vw"]}
            borderRadius={"16px"}
          >
            <Text color={"#01B4EC"} fontSize={"3rem"} fontWeight={"600"}>
              <Runningnumber
                initialnumber={0}
                targetNumber={15}
                interval={170}
              />
            </Text>

            <Text fontWeight={"300"}>Year of Industry Presence</Text>
          </Box>
        </Stack>
      </Box>
      {/* {topRecommendedCollege.map((e)=>(
        <Box>
          <Text>{e.collegename}</Text>
        </Box>
      ))} */}

      {topRecommendedCollege.length === 0 ? (
        <Box
          width={"100vw"}
          height={"100vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text>Loading Colleges....</Text>
          <CircularProgress isIndeterminate color="blue" />
        </Box>
      ) : (
        <Box
          className="container16"
          // height={["270vh", "90vh"]}
          marginTop={["40vh", "none"]}
          py={16}
          style={{
            // width: "100vw",

            display: "flex",
            // justifyContent:'center',
            flexDirection: "column",
            backgroundColor: "#CFEBFD",
            alignItems: "center",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", zIndex: "1" }}>
            Top Recommended
            <span style={{ color: "#01B4EC" }}>
              {" "}
              Medical Colleges In India{" "}
            </span>{" "}
          </h2>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={6}
            width="80vw"
          >
            {topRecommendedCollege?.map((items) => (
              <GridItem>
                <Box
                // border={"1px solid red"}
                  key={items._id}
                  width={"100%"}
                  // height={"55vh"}
                  background={"white"}
                  mt={"30"}
                  boxShadow="0 2px 4px rgba(255, 255, 255, 0.8)"
                  display="flex"
                  flexDirection="column"
                  alignItems={"center"}
                  backgroundColor={"white"}
                  zIndex={"1"}
                >
                  <Box
                    width={"100%"}
                    height={"37vh"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Box
                      bg={`url(${items.image1})`}
                      width={"100%"}
                      height={"100%"}
                    ></Box>
                  </Box>

                  <Box
                    width={"100%"}
                    height={"20vh"}
                    fontSize={"1rem"}
                    display={"flex"}
                    flexDirection={"column"}
                    position={"relative"}
                    boxShadow=" 15px 4px 64px rgba(0, 0, 0, 0.15)"
                  >
                    <h2>{items.collegename}</h2>

                    <Box
                      position={"absolute"}
                      left={"4px"}
                      top={["14vw", "4vw"]}
                    >
                      <Flex>
                        <FaMapMarkerAlt
                          color="#01B4EC"
                          fontSize={"1.7rem"}
                          style={{ marginRight: "4px" }}
                          size={"18px"}
                        />
                        <Text fontSize={"1rem"} color={"rgba(0,0,0,0.7)"}>
                          {items.state}
                        </Text>
                      </Flex>
                    </Box>

                    <Box
                      position={"absolute"}
                      right={"4px"}
                      top={["14vw", "4vw"]}
                    >
                      <Flex>
                        <FaRegClock
                          color="#01B4EC"
                          fontSize={"1rem"}
                          style={{ marginRight: "4px" }}
                        />
                        <Text fontSize={"1rem"} color={"rgba(0,0,0,0.7)"}>
                          {items.collegetype}
                        </Text>
                      </Flex>
                    </Box>

                    <Box
                      position={"absolute"}
                      border={"3px solid #01B4EC"}
                      borderRadius={"10px"}
                      left={"4px"}
                      top={["11vh", "11vh", "10vw", "6vw"]}
                      cursor={"pointer"}
                      _hover={{ backgroundColor: "#01B4EC" }}
                    >
                      <Link to={`/universities/state/${items._id}`}>
                        <Text fontSize={"1rem"} padding={"5px"}>
                          View Details
                        </Text>
                      </Link>
                    </Box>

                    <Box
                      position={"absolute"}
                      right={"4px"}
                      border={"3px solid #01B4EC"}
                      borderRadius={"10px"}
                      top={["11vh", "11vh", "10vw", "6vw"]}
                      cursor={"pointer"}
                      _hover={{ backgroundColor: "white" }}
                      backgroundColor={"#01B4EC"}
                    >
                      <a
                        href={items.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Text fontSize={"1rem"} padding={"5px"}>
                          Apply Now
                        </Text>
                      </a>
                    </Box>
                  </Box>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
      )}

      <Box
        style={{
          // width: "100vw",
          // height: "90vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          // marginTop: "6vh",
        }}
        // border={"5px solid red"}
      >
        <Box fontSize={["1.7rem", "3rem"]} py={4}>
          <h2 style={{ marginTop: "1vh" }}>
            About Us
            <br />
            <span
              style={{ color: "#01B4EC", fontWeight: "200", marginTop: "18vh" }}
            >
              {" "}
              About Admission Possibility{" "}
            </span>
          </h2>
        </Box>

        <Stack
          // height={{ base: "160vh", md: "90vh", lg: "50vh", xl: "160vh" }}
          width={"94%"}
          margin={"auto"}
          flexDirection={{ base: "column", md: "column", lg: "row" }}
          gap={6}
        >
          <Box
            width={{ base: "90%", sm: "90%", md: "80%", xl: "50%" }}
            margin="auto"
            // height={{ base: "0vh", md: "auto" }}
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

      <Box
        className="container4"
        py={8}
        style={{
          // width: "100vw",
          // height: "60vh",
          display: "flex",

          flexDirection: "column",

          alignItems: "center",
          marginTop: "6vh",
        }}
      >
        <h2>
          <Text fontSize={"2rem"}>OUR SERVICES</Text>
          <Text
            fontSize={"2.5rem"}
            color={"#01B4EC"}
            fontWeight={"40"}
            marginTop={"1vh"}
          >
            Admission Possibility Services
          </Text>
        </h2>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(6, 1fr)",
          }}
          gap={6}
          width="80vw"
          margin={"auto"}
        >
          <GridItem
            width={"100%"}
            // height={"35vh"}
            display={"flex"}
            borderRadius={"15px"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            marginTop={["4vh", "6vh"]}
            boxShadow={"5px 5px 10px rgba(0, 0, 0, 0.2)"}
            p={2}
            fontSize={"0.8rem"}
          >
            <Image src={img10} height={"10vh"} />

            <Text fontWeight={"600"}>College Predictors</Text>
            <Text color={"rgba(0,0,0,0.7)"} marginTop={"5"}>
              MBBS Buddy is India’s first data analytics based MBBS College
              predictor
            </Text>
          </GridItem>

          <GridItem
            width={"100%"}
            // height={"30vh"}
            display={"flex"}
            borderRadius={"15px"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            marginTop={["4vh", "6vh"]}
            boxShadow={"5px 5px 10px rgba(0, 0, 0, 0.2)"}
            p={2}
            fontSize={"0.8rem"}
          >
            <Image src={img11} height={"10vh"} />

            <Text fontWeight={"600"}>Expert Counsellors</Text>
            <Text color={"rgba(0,0,0,0.7)"} marginTop={"5"}>
              Our team comprises of best experts with more than a decade’s
              experience
            </Text>
          </GridItem>

          <GridItem
            width={"100%"}
            // height={"30vh"}
            display={"flex"}
            borderRadius={"15px"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            marginTop={["4vh", "6vh"]}
            boxShadow={"5px 5px 10px rgba(0, 0, 0, 0.2)"}
            p={2}
            fontSize={"0.8rem"}
          >
            <Image src={img12} height={"10vh"} />

            <Text fontWeight={"600"}>College Level Analysis</Text>
            <Text color={"rgba(0,0,0,0.7)"} marginTop={"5"}>
              Our college visits give us real on ground student & patient
              feedback
            </Text>
          </GridItem>

          <GridItem
            width={"100%"}
            // height={"30vh"}
            display={"flex"}
            borderRadius={"15px"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            marginTop={["4vh", "6vh"]}
            boxShadow={"5px 5px 10px rgba(0, 0, 0, 0.2)"}
            p={2}
            fontSize={"0.8rem"}
          >
            <Image src={img13} height={"10vh"} />

            <Text fontWeight={"600"}>Transparent Process</Text>
            <Text color={"rgba(0,0,0,0.7)"} marginTop={"5"}>
              Transparency through process driven systematic approach
            </Text>
          </GridItem>

          <GridItem
            width={"100%"}
            // height={"30vh"}
            display={"flex"}
            borderRadius={"15px"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            marginTop={["4vh", "6vh"]}
            boxShadow={"5px 5px 10px rgba(0, 0, 0, 0.2)"}
            p={2}
            fontSize={"0.8rem"}
          >
            <Image src={img14} height={"10vh"} />

            <Text fontWeight={"600"}>Personolised Guidance</Text>
            <Text color={"rgba(0,0,0,0.7)"} marginTop={"5"}>
              Personalised services with right fit to the right student
            </Text>
          </GridItem>

          <GridItem
            width={"100%"}
            // height={"30vh"}
            display={"flex"}
            borderRadius={"15px"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            marginTop={["4vh", "6vh"]}
            boxShadow={"5px 5px 10px rgba(0, 0, 0, 0.2)"}
            p={2}
            fontSize={"0.8rem"}
          >
            <Image src={img15} height={"10vh"} />

            <Text fontWeight={"600"}>Alerts & Notification</Text>
            <Text color={"rgba(0,0,0,0.7)"} marginTop={"5"}>
              Date, Time & Other NEET Updates & Notification on SMS & Email
            </Text>
          </GridItem>
        </Grid>
      </Box>

      <Box
        className="universities"
        // width={"100vw"}
        // height={["230vh", "120vh", "75vh", "75vh"]}
        display={"flex"}
        justifyContent={"center"}
        backgroundColor={"#CFEBFD"}
        alignItems={"center"}
        flexDirection={"column"}
        position={"relative"}
        py={6}
      >
         {" "}
        <Text fontSize={"2.575rem"} color={"#01B4EC"}>
          Blogs
        </Text>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          textAlign={"left"}
          gap={6}
          width="80vw"
          marginBottom={6}
        >
          {formData &&
            formData?.map((ele) => (
              <Link to={`blogs/singleBlogPage/${ele._id}`} key={ele._id}>
                <GridItem>
                  <Box
                    width={"100%"}
                    // height={"100%"}
                    // boxShadow={"15px 4px 64px rgba(0, 0, 0, 0.15)"}
                  >
                      <Image src={ele.image} height={"30vh"} />
                  </Box>

                  <Box width={"100%"} backgroundColor={"white"}>
                     {" "}
                    <Text
                      marginLeft={"0.5vh"}
                      marginTop={"-2vh"}
                      fontSize={"0.7rem"}
                      color={"#3939BC"}
                    >
                      {ele.date}
                    </Text>
                     {" "}
                    <Text
                      marginLeft={"0.5vh"}
                      marginTop={"-1vw"}
                      color={"#00008B"}
                      fontWeight={"bold"}
                      // width={"80%"}
                      fontSize={"1rem"}
                    >
                      {ele.title.split("<br></br>")[0].substring(0, 20) + "..."}
                    </Text>
                    <Text
                      marginLeft={"0.4vw"}
                      fontSize={"0.6rem"}
                      // width={"80%"}
                      color={"#333333"}
                      mt={1}
                      dangerouslySetInnerHTML={{
                        __html:
                          ele.description
                            .split("<br></br>")[0]
                            .substring(0, 80) + "...",
                      }}
                    ></Text>{" "}
                  </Box>
                  {/* Content of the first GridItem */}
                </GridItem>
              </Link>
            ))}
        </Grid>
      </Box>
      <Contact />
    </div>
  );
};

export default Home;
