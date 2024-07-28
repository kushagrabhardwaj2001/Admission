import React from "react";
import "./Russia.css";
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
import img1 from "./russia1.jpg";
import img2 from "./russia2.jpg";
import { BsCheckCircle } from "react-icons/bs";

const Russia = () => {
  return (
    <div>
      <Box
        className="custom-background"
        // width={"100vw"}
        marginTop={"3vh"}
        // height={"65vh"}
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
          "MBBS In Russia"
        </Text>
      </Box>

      <Box width={"80vw"} margin={"0px auto"} fontFamily={"Roboto"} py={4}>
        <HStack>
          <Box fontSize={"1rem"} width={{base:"90%",lg:"60%"}} margin={"auto"}>
            <Heading marginBottom={"4vh"} fontFamily={"poppins"}>
              MBBS In Russia
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
              : Russia also officialy known as the Russian Federation is a
              country in northern Eurasiant a fel subjects. The sidential
              republic, comprisinia federal subjects. The Russian federation is
              the largest of the 21 republic that make up the Commonwealthest
              independent States. It occupies most of Eastern Europe and North
              Asia, stretching from the Baltic Sea in the west to the Pacific
              Ocean in the east and from the Arctic Ocean in the north to the
              Black Sea and the Caucasus in the South. It is bordered by Norway
              and Finland in the Northwest, Estonia, Latvia, Belarus, Ukraine,
              Poland and Azerbaijan in the southwest and Kazakhstan, Mongolia,
              China and North Korea along the Southern Border. Russia has the
              world's largest reserves of mineral and energy resources and is
              the largest producer of oil and natural gas globally. Russia has
              the world's largest forest reserves.
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
                The population of Russia is 144,554,993 as per the results of
                the 2017 estimate{" "}
              </Text>
              <Text>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "1C375B",
                    color: "#1C375B",
                  }}
                >
                  Languages:
                </span>{" "}
                Russian is the only official state language{" "}
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
                Moscow is the Capital city and most populous and largest city of
                Russia.{" "}
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
                Other largest cities are Saint Petersburg, Novosibirsk,
                Yekaterinburg, Ninzhy Novgorod, Samara, Kazan etc.{" "}
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
              Climate of course with an area the size of Russia. There are only
              two distinct seasons --- winter and summer; spring and autumn are
              usually brief periods of change between extremely low temperatures
              and extremely high. The coldest month is January (February on the
              coastline), the warmest usually is July. Great ranges of
              temperature are typical. In winter, temperatures get coler both
              from south to north and from west to east. Summers can be quite
              hot, even in Siberia. The continental interiors are the driest
              area.
            </p>
          </Box>
          <Box width={"40%"} display={{base:"none",lg:"block"}}>
            <VStack>
              <Img src={img1} width={"100%"}></Img>
              <Img src={img2} width={"100%"}></Img>
            </VStack>
          </Box>
        </HStack>

        <Box width={"100%"} fontSize={"1.1rem"} marginTop={"3vh"} textAlign={"start"}>
          <Text >
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
                Uneracy rate:{" "}
              </span>{" "}
              99.6% (Male--99.7% & Female--99.5%)
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
              Russian Ruble (RUB)
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
              UTC+3 to +12
            </Text>
          </Box>
        </Box>

        <Box width={"80vw"} margin={"0px auto"} marginTop={"5vh"} textAlign={"start"} >
          <HStack>
            <Box width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={"1rem"} fontWeight={"500"} color={"#1C375B"}>
                Advantages of Study in Russia-
              </Heading>

              <Box >
                <Flex marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    {" "}
                    Russia has always been ahead in the field of education and
                    more specifically medicine.
                  </Text>
                </Flex>

                <Flex marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    Studying in Russia is easy, cheap and flexible. No donations
                    are to be paid to the universities in Russia.
                  </Text>
                </Flex>

                <HStack marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    {" "}
                    It probably has one of the best education system in the
                    world producing a literacy rate of 99%.
                  </Text>
                </HStack>

                <Flex marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    Russia has been one of the Top preferred destinations for
                    the international students to pursue their Medical Degree
                    Courses.
                  </Text>
                </Flex>

                <Flex marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    The Medium of instruction in English.
                  </Text>
                </Flex>

                <Flex marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    All universities are equipped with the most modern
                    diagnostic and teaching aids.
                  </Text>
                </Flex>

                <Flex marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    The Indian students seeking admission are admitted in those
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
                    The MBBS in Russia is taught in two different languages, it
                    is very important issue. Namely English Medium and Russian.
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

export default Russia;
