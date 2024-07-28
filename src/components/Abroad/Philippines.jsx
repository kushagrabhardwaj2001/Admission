import React from "react";
import "./Philippiness.css";
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
import img1 from "./philippines1.jpg";
import img2 from "./philippines2.jpg";
import { BsCheckCircle } from "react-icons/bs";

const Philippines = () => {
  return (
    <div>
      <Box
        className="custom4-background"
        // width={"100vw"}
        marginTop={"3vh"}
        // height={"45vh"}
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
          "MBBS In Philippines"
        </Text>
      </Box>

      <Box width={"80vw"} margin={"0px auto"} fontFamily={"Roboto"} py={4}>
        <HStack>
          <Box fontSize={"1rem"} width={{base:"90%",lg:"60%"}} margin={"auto"}>
            <Heading marginBottom={"4vh"} fontFamily={"poppins"}>
              MBBS In philippines
            </Heading>
            <p style={{ fontSize: "1rem", textAlign: "start" }}>
              <span
                style={{
                  fontWeight: "bold",
                  color: "1C375B",
                  color: "#1C375B",
                }}
              >
                Geography
              </span>
              : The Philippines is an archipelago of 7,107 islands with a total
              land area, including inland bodies of water. It is approximately
              300,000 bodies kilometers. It is located between 116° 40', and
              126" 34'E. longitude and 4º 40 and 21°10'N.longitude andis
              Bordered by the Philippine Sea to the east, the South China Sea to
              the west, and the Celebes Sea to the South. The island of Borneo
              is located a few hundred kilometers southwest and Taiwan is
              located directly to the north. The Moluccas and Sulawesi are
              locattley to the south-southwest and Palau is located to the east
              of the islands. The highest mountains is Mothe Apo. It measures up
              to 2,954 meters (9,692 feet) above sea level and is located on the
              island of alindanao. The Galatea Depth in the Philippine Trench is
              the deepest point in the country and the third deepest in the
              world. The trench is located in the Philippine Sea.
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
                10,09,81,437{" "}
              </Text>
              <Text>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "1C375B",
                    color: "#1C375B",
                  }}
                >
                  Other large cities:
                </span>{" "}
                Quezon City, Manila, Caloocan, Davao City, Cebu City etc.{" "}
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
                Manila{" "}
              </Text>
              <Text>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "1C375B",
                    color: "#1C375B",
                  }}
                >
                  Largest City:
                </span>{" "}
                Bishkek, Osh, Jala-Abad, Karakol etc.{" "}
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
              The climate is mostly hot and humid- averaging at about 80 degrees
              with humidity of 77%. The best season to visit is during the
              months of November to March-which is the dry season. The months of
              May to October are very hot and humid. The Average yearly
              temperature is around 26.6°C. Religions: More than 92% of the
              populations are Christians (about 80% Roman Catholic Church while
              12% other Christian denominations). Approx 5.57% populations are
              Muslim.
            </p>
          </Box>
          <Box width={"40%"} display={{base:"none",lg:"block"}}>
            <VStack>
              <Img src={img1} width={"100%"}></Img>
              <Img src={img2} width={"100%"}></Img>
            </VStack>
          </Box>
        </HStack>

        <Box
          // width={"100%"}
          fontSize={"1rem"}
          marginTop={"3vh"}
          textAlign={"start"}
        >
          <Text>
            <span
              style={{ fontWeight: "bold", color: "1C375B", color: "#1C375B" }}
            >
              Religions:
            </span>{" "}
            Islam is the dominant religion of Kyrgyzstan. 80% of the population
            is Muslims while 17% follows Russian Orthodoxy and 3% other
            religions.
          </Text>
        </Box>

        <Box display={"flex"} justifyContent={"space-between"}>
          <Box>
            <Text textAlign={"start"}>
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
              93.4%
            </Text>
            <Text textAlign={"start"}>
              {" "}
              <span
                style={{
                  fontWeight: "bold",
                  color: "1C375B",
                  color: "#1C375B",
                }}
              >
                Currency:
              </span>{" "}
              Philippine peso (PHP)
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
              PST (UTC+8)
            </Text>
          </Box>
        </Box>

        <Box>
          <Text fontWeight={"bold"} color={"#1C375B"} textAlign={"start"}>
            Why Philippines?
          </Text>
          <ul style={{ marginLeft: "3vw", textAlign: "start" }}>
            <li>Affordable overseas degrees and tution fees.</li>
            <li>Economical accommodation and living expenses.</li>
            <li>Excellent and comfortable boarding facilities.</li>
            <li>Excellent and comfortable boarding facilities.</li>
            <li>Inexpensive travel cost </li>
          </ul>
        </Box>

        <Text mt={2} textAlign={"start"}>
          It's an amazing opportunity! Kyrgyzstan has always been ahead in the
          field of education and more specially medicine. Studying in Kyrgyzstan
          is easy, cheap and flexible. You wanted to go someplace exotic and off
          the beaten path-isn't that everyone's dream?-Yet still within the
          realm of practicality. All Universities are equipped with the most
          modern diagnostic and teaching aids. Kyrgyzstan offers all the
          possible advantages I could hope for: pervasive use of the Russian
          language, opportunities to teach English, and a storied cultural,
          political, and religioous history to boot! At the same time, Capital
          Bishkek is a growing and very livable city; while it lacks the
          amenities of a Western or even a well-developed Russian or Eastern
          Asian city, there's asense of thrilling novelty about it.
        </Text>

        <Box
          width={"80vw"}
          margin={"0px auto"}
          marginTop={"5vh"}
          textAlign={"start"}
        >
          <HStack>
            <Box width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={"1rem"} fontWeight={"500"} color={"#1C375B"}>
                Advantages of Study in Kyrgyzstan-
              </Heading>

              <Box>
                <Flex marginTop={"0.9vh"}>
                <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    {" "}
                    Recognized by BMDC, MCI, MMC, NMC, PMDC and other Medical
                    Council. Medical education recognized by World Health
                    Organization (WHO), IMED.
                  </Text>
                </Flex>

                <Flex marginTop={"0.9vh"}>
                <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    Medical & Nursing education geared towards Employment in
                    USA/UK and easy to pass USMLE, CGFSN, NCLEX (Nursing).
                  </Text>
                </Flex>

                <Flex marginTop={"0.9vh"}>
                <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    Since the assessments are rigorous easy to pass local
                    licensing exam like USMLE, PLAB-UK, AMC-Australia, MCI
                    Screening Test, PMDC-Pakistan etc.
                  </Text>
                </Flex>

                <Flex marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    American Style PBL Curriculum. English to sit for USMLE.
                  </Text>
                </Flex>

                <Flex marginTop={"0.9vh"}>
                <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    The education system is just so Fantastic that that
                    Philippines has send hundreds of doctor to work in USA, UK
                    and Middle East etc.
                  </Text>
                </Flex>
              </Box>
            </Box>
          </HStack>
        </Box>
      </Box>
    </div>
  );
};

export default Philippines;
