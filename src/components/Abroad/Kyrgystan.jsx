import React from "react";
import "./Kyrgystan.css";
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
import img1 from "./kyrgystan10.jpg";
import img2 from "./kyrgystan12.jpg";
import { BsCheckCircle } from "react-icons/bs";

const Kyrgystan = () => {
  return (
    <div>
      <Box
        className="custom1-background"
        // width={"100vw"}
        marginTop={"3vh"}
        // height={"55vh"}
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
          "MBBS In Kyrgystan"
        </Text>
      </Box>

      <Box width={"80vw"} margin={"0px auto"} fontFamily={"Roboto"} py={4}>
        <HStack>
          <Box
            fontSize={"1rem"}
            width={{ base: "90%", lg: "60%" }}
            margin={"auto"}
          >
            <Heading marginBottom={"4vh"} fontFamily={"poppins"}>
              MBBS In Kyrgystan
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
              : Kyrgyzstan is a landlocked country in Central Asia, bordering
              Kazakhstan, China, Tajikistan and Uzbekistan. It lies between
              latitudes 39 and 44" N, and longitudes 69° and 81° E. It is
              further from the sea than any other individual country, and all
              its rivers flow into closed drainage systems which do not reach
              the sea. The mountainous region of the Tian Shan covers over 80%
              of the country (Kyrgyzstan is occasionally reffered to as "the
              Switzerland of Central Asia", as aresult) with the remainder made
              up of valleys and basins. Issyk-Kul lake in the north-eastern Tian
              Shan is the largest lake in Kyrgyzstan and the second largest
              mountain lake in the world after Titicaca.
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
                6 Million (2015 EST){" "}
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
                199,951 km2{" "}
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
                Bishkek{" "}
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
              The climate varies regionally. The south- western Fergana Valley
              is subtropical and extremely hot in summer, with temperatures
              reaching 40°C (104°F). The northern foothills are temperature rate
              the Tian Shan varies from dry continental to polar climate,
              depending on elevation. In the coldest areas temperatures are
              sub-zero for around 40 days in winter., and even some desert areas
              experience constant snowfall in this period, in the low lands the
              temperature ranges from around -6°C in January to 24°C in July.
              Language: Kyrgyzstan is one of the two former Soviet republics in
              Central Asia to retain Russian as an official language, Kyrgyz is
              state language. Uzbek and English are other language.
            </p>
          </Box>
          <Box width={"40%"} display={{ base: "none", lg: "block" }}>
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
            </span>{" "}
            Islam is the dominant religion of Kyrgyzstan. 80% of the population
            is Muslims while 17% follows Russian Orthodoxy and 3% other
            religions.
          </Text>
        </Box>

        <Box display={"flex"} justifyContent={"space-between"}>
          <Box textAlign={"start"}>
            <Text>
              <span
                style={{
                  fontWeight: "bold",
                  color: "1C375B",
                  color: "#1C375B",
                }}
              >
                Literacy rate:
              </span>
              99%
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
              Som (KGS)
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
              KGT (UTC+6)
            </Text>
          </Box>
        </Box>

        <Box  marginBottom="1vw">
          <Text textAlign={"start"} fontWeight={"bold"} color={"#1C375B"}>
            Why Kyrgyzstan?
          </Text>
          <ul style={{ marginLeft: "3vw", textAlign: "start" }}>
            <li>Low Tuition Fee</li>
            <li>Full English Medium</li>
            <li>Minimum Expences</li>
            <li>Five year MBBS programme</li>
            <li>WHO, PM & DC Approved</li>
          </ul>
        </Box>

        <Text textAlign={"start"}>
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

        <Box width={"80vw"} margin={"0px auto"} marginTop={"5vh"} textAlign={"start"}>
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
                    The India students seeking admission are admitted in those
                    institutions which are recognized by this medical council of
                    India for screening test conducted by MCI.
                  </Text>
                </Flex>

                <Flex marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    Wide range of possibilities and broad exposure to clinical
                    practice due to highly equipped multi profile hospitals.
                  </Text>
                </Flex>

                <Flex marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    {" "}
                    Kyrgyzstan Medical Universities are approved by World Health
                    Organization (WHO) in their" World Directory of Medical
                    Schools".
                  </Text>
                </Flex>

                <Flex marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    The International Medical Education Directory (IMED), ECFMG
                    (USA), UNESCO, General Medical Council (UK), European Union
                    etc.
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

export default Kyrgystan;
