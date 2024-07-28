import React from "react";
import "./Bangladesh.css";
import {
  Box,
  Text,
  HStack,
  Button,
  VStack,
  Heading,
  Img,
  Flex,
  Image,
} from "@chakra-ui/react";
import img1 from "./13fc350c-35da-4e28-b176-afb878f1422e.jpg";
import img2 from "./da9627ad-3a3b-4cfb-b8c4-908745bd9275.jpg";
import { BsCheckCircle } from "react-icons/bs";

const Bangladesh = () => {
  return (
    <Box>
      <Box
        className="custom2-background"
        marginTop={"3vh"}
        // height={"70vh"}
        mb={"10"}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems={"flex-start"}
        p={4}
      >
        <div className="overlay"></div>

        <Text
          fontSize={"3rem"}
          textAlign={"center"}
          color={"white"}
          zIndex={"1"}
        >
          "MBBS In Bangladesh"
        </Text>
      </Box>

      <Box width={"80vw"} margin={"0px auto"} fontFamily={"Roboto"} py={4}>
        <HStack>
          <Box fontSize={"1rem"} width={{base:"90%",lg:"60%"}} margin={"auto"} >
            <Heading marginBottom={"4vh"} fontFamily={"poppins"}>
              MBBS In Bangladesh
            </Heading>
            <p style={{ fontSize: "1.1rem", textAlign: "start" }}>
              <span
                style={{
                  fontWeight: "bold",
                  color: "1C375B",
                  color: "#1C375B",
                }}
              >
                Geography
              </span>
              : Bangladesh officially the People's Republic of Bangladesh is a
              country in South Asia. It shares land borders with India nad
              Myanmar (Burma). Nepal, Bhutan and China are closed near
              Bangladesh but do not share a border with it. The country's
              maritime territory in the Bay of Bengal is roughly equal to the
              size of its land area. Bangladesh is the world's eighth most
              populous country. Dhaka is its capital largest city, followed by
              Chittagong which ha the country's largst port. The politically
              dominant Bengali Muslims make the nation the world's third largest
              Muslim-majority country. Most of Bangladesh is covered by the
              Bengal delta, the largest delta on Earth.
              <br />
              <br />
              <Text>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "1C375B",
                    color: "#1C375B",
                  }}
                >
                  Population:
                </span>{" "}
                The population of Bangladesh is over 17 Crore people{" "}
              </Text>
              <Text>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "1C375B",
                    color: "#1C375B",
                  }}
                >
                  Area:
                </span>{" "}
                147,610 km2{" "}
              </Text>
              <Text>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "1C375B",
                    color: "#1C375B",
                  }}
                >
                  Capital:
                </span>{" "}
                Dhaka{" "}
              </Text>
              <br />
              <br />
              <span
                style={{
                  fontWeight: "bold",
                  color: "1C375B",
                  color: "#1C375B",
                }}
              >
                Climate:
              </span>{" "}
              Bangladesh's climate is tropical with a mild winter from October
              to March, and a hot, humid summer from March to June. The country
              has never recorded an air temperature below 0°C (32°F), with a
              record low of 1.1°C (34.0°F).
            </p>
          </Box>
          <Box width={"40%"} display={{base:"none",lg:"block"}}>
            <VStack>
              <Img src={img1} width={"100%"}></Img>
              <Img src={img2} width={"100%"}></Img>
            </VStack>
          </Box>
        </HStack>

        <Box width={"100%"} fontSize={"1rem"} marginTop={"3vh"}>
          <Text textAlign={"start"}>
            <span
              style={{ fontWeight: "bold", color: "1C375B", color: "#1C375B" }}
            >
              Religions:
            </span>
            Islam is the largest religion In Bangladesh, adhered to by about
            86.6% of the population, 12.1% Hinduism, 0.6% Budhism, 0.4%
            Christianity, 0.3% others.
          </Text>
        </Box>

        <Box display={"flex"} justifyContent={"space-between"}>
          <Box>
            <Text>
              <span
                style={{
                  fontWeight: "bold",
                  color: "1C375B",
                  color: "#1C375B",
                }}
              >
                {" "}
                Literacy rate:
              </span>{" "}
              71% (estimated at 66.5% for males and 63.1% for females in 2015)
            </Text>
            <Text textAlign={"start"}>
              <span
                style={{
                  fontWeight: "bold",
                  color: "1C375B",
                  color: "#1C375B",
                }}
              >
                Currency:
              </span>{" "}
              Taka (BDT)
            </Text>
            <Text textAlign={"start"}>
              <span
                style={{
                  fontWeight: "bold",
                  color: "1C375B",
                  color: "#1C375B",
                }}
              >
                Time Zone:
              </span>{" "}
              BST (UTC+6)
            </Text>
          </Box>
        </Box>

        <Box>
          <Text fontWeight={"bold"} color={"#1C375B"} textAlign={"start"}>
            Why Bangladesh?
          </Text>
          <ul style={{ marginLeft: "3vw", textAlign: "start" }}>
            <li>Low Tuition Fee</li>
            <li>Full English Medium</li>
            <li>Minimum Expences</li>
            <li>No Entrance Exam for Indian Students</li>
          </ul>
        </Box>

        <Text textAlign={"start"}>
          Study pattern in Bangladesh is similar to Indian Medical Bangladesh
          Colleges M.C.I. Guidelines. Medical study in Bangladesh Similar to
          Medical Study in India with respect to same Books Followed by students
          & Professors in Same syllabus like MBBS in India, Same study pattern,
          Duration of study, Similar Medicine, Similar Diseases, Same
          Examination pattern, Similar study plan. Culture in Bangladesh same as
          India, Food habits also same, Language spoken in Bangladesh English,
          Bengali, Hindi, Urdu, Arabic., same as India. Numbers of Tamil, Oriya,
          Punjabi, Gujarati, Marathi, speaking students can be found in Dhaka
          and other city in Bangladesh. Passing
          <br />
          <br />
          MCI Screening test 100% for MCI Registration since same study pattern
          followed during 5 years MBBS Course.
          <br />
          <br />
          Most of Medical Colleges in Bangladesh are approved by MCI Act 1956
          and listed in the World Health Organization (WHO), Directory of World
          Medical School. Bangladesh is dry country and best safest place for
          students stydying outside country. Low budget Medica study is only
          possible in Bangladesh. MBBS Bangladesh is best option than MBBS in
          other countries
        </Text>
      </Box>
    </Box>
  );
};

export default Bangladesh;
