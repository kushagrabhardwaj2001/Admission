import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { StickyContainer, Sticky } from "react-sticky";
import { FaGlobe } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import img1 from "./facts-icon2.png";
import img2 from "./facts-icon3.png";
import img3 from "./facts-icon4.png";
import img4 from "./facts-icon7.png";
import "./Collegepage.css";

import {
  Container,
  Grid,
  Box,
  Text,
  Icon,
  HStack,
  Stack,
  Flex,
  CircularProgress,
  VStack,
  Img,
  Image,
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";

function TopRecommendedCollSingle() {
  const { id } = useParams(); // Access the 'collegename' parameter from the URL
  console.log("id",id)

  const [collegeData, setCollegeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollegeData = async () => {
      try {
        const response = await axios(
          // `https://api.admissionpossibility.com/api/universities/state/${id}`
          `https://api.admissionpossibility.com/api/universities/state/${id}`
        );
        console.log("response",response.data)
        if (response.status === 200) {
          // const data = await response.json();
          setLoading(false);
          // console.log("resp",data)

          setCollegeData(response.data);
        } else {
          console.error("Error fetching college data");
        }
      } catch (error) {
        console.error("Error fetching college data:", error);
      }
    };

    fetchCollegeData();
  }, [id]); // Include 'id' in the dependency array

  if (!collegeData) {
    return (
      <div>
        <Box
          width={"100vw"}
          height={"100vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text>Loading Colleges....</Text>
          <CircularProgress isIndeterminate color="green.300" />
        </Box>
      </div>
    );
  }

  const tableStyle = {
    borderCollapse: "collapse",
    marginTop: "5vh",
    width: "100%",
    border: "none",
  };

  const cellStyle = {
    border: "1px solid #000",
    padding: "8px",
    textAlign: "center",
    border: "none",
  };

  const boldCellStyle = {
    ...cellStyle,
    color: "#014BEC",
    fontWeight: "bold",
    border: "none",
  };

  const lightGreyCellStyle = {
    ...cellStyle,
    backgroundColor: "#d3d3d3",
    border: "none",
  };

  const separatorCellStyle = {
    ...cellStyle,
    borderBottom: "1px solid #000",
    border: "none",
  };

  const bodyStyle = {
    fontFamily: "'Rubik', sans-serif",
    // Add other CSS styles as needed
  };

  // Apply the style to the body element
  document.body.style = Object.assign({}, document.body.style, bodyStyle);

  return (
    <div style={{ width: "100%", marginTop: "18vh" }}>
      <Box m={"0 auto"} width={"100vw"} marginTop={"5vh"}>
        <Box
          style={{ fontSize: "1.9rem", color: "#01B4EC", margin: "0px auto" }}
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          position={"relative"}
        >
          <Image
            width={["90%", "90%", "90%", "80%"]}
            height={["30vh", "30vh", "40vh", "40vh"]}
            style={{ fontWeight: "600", borderRadius: "20px" }}
            src={collegeData.image1}
            alt="Image 1"
          />
          <Box
            style={{ backgroundColor: "white", borderRadius: "10px" }}
            border={"2px solid #00008B"}
            alignContent={"start"}
            justifyContent={"center"}
            position={"absolute"}
            bottom={["-1vh", "-1vh", "-2vh", "-3vh"]}
            left={["2vw", "2vw", "14vw", "14vw"]}
            width={["30vw", "3vw", "20vw", "13vw"]}
            height={["10vh", "20vh", "15vh", "20vh"]}
          >
            <Image
              style={{ fontWeight: "600", margin: "auto" }}
              height={"100%"}
              src={collegeData.image2}
              alt="Image 2"
            />
          </Box>
          <Box style={{ textAlign: "center", color: "#F4903A" }}>
            <Text
              style={{ fontWeight: "600", marginLeft: "30vw", width: "60vw" }}
              fontSize={{ base: "1rem", md: "1.6rem" }}
            >
              {collegeData.collegename}
            </Text>

            <Flex
              style={{
                color: "black",
                fontSize: "1rem",
                justifyContent: "center",
              }}
            >
              <Icon style={{ marginLeft: "21vw" }} as={FaMapMarkerAlt} />
              <Text style={{ textAlign: "center" }} fontSize={"1rem"}>
                {collegeData.location}, {collegeData.state}
              </Text>
            </Flex>
          </Box>
        </Box>

        <Box
          style={{
            fontSize: "1.3rem",
            textAlign: "start",
            marginTop: "6vh",
            background: "#ECECEC",
            width: "100vw",
          }}
        >
          <Box>
            <Stack
              direction={["column", "column", "row", "row"]}
              justifyContent={"space-around"}
            >
              <Box
                width={["80vw", "80vw", "25vw", "20vw"]}
                height={["12vh", "12vh", "12vh", "15vh"]}
                marginTop={["2vh", "2vh", "10vh", "10vh"]}
                margin={"0px auto"}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #87cefa",
                  borderRadius: "10px",
                  borderBottom: "5px solid #014BEC",
                }}
                fontSize={"1rem"}
              >
                <Flex
                  justifyContent={[
                    "space-around",
                    "space-between",
                    "space-around",
                    "center",
                  ]}
                  style={{ alignItems: "center", height: "100%" }}
                >
                  <Img style={{ marginRight: "2vw" }} src={img1}></Img>
                  <Box>
                    <Text fontWeight={"bold"}>Established</Text>
                    <Text textAlign={"center"}>{collegeData.established}</Text>
                  </Box>
                </Flex>
              </Box>

              <Box
                width={["80vw", "80vw", "22vw", "20vw"]}
                marginTop={["2vh", "2vh", "10vh", "10vh"]}
                margin={"0px auto"}
                height={["12vh", "12vh", "12vh", "15vh"]}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #87cefa",
                  borderRadius: "10px",
                  borderBottom: "5px solid #014BEC",
                }}
                fontSize={"1rem"}
              >
                <Flex
                  justifyContent={[
                    "space-around",
                    "space-between",
                    "space-around",
                    "center",
                  ]}
                  style={{ alignItems: "center", height: "100%" }}
                >
                  <img style={{ marginRight: "2vw" }} src={img2}></img>
                  <Box>
                    <Text fontWeight={"bold"}>College Type</Text>
                    <Text textAlign={"center"}>{collegeData.collegetype}</Text>
                  </Box>
                </Flex>
              </Box>

              <Box
                width={["80vw", "80vw", "22vw", "20vw"]}
                marginTop={["2vh", "2vh", "10vh", "10vh"]}
                margin={"0px auto"}
                height={["12vh", "12vh", "12vh", "15vh"]}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #87cefa",
                  borderRadius: "10px",
                  borderBottom: "5px solid #014BEC",
                }}
                fontSize={"1rem"}
              >
                <Flex
                  justifyContent={[
                    "space-around",
                    "space-between",
                    "center",
                    "center",
                  ]}
                  style={{ alignItems: "center", height: "100%" }}
                >
                  <img style={{ marginRight: "2vw" }} src={img3}></img>
                  <Box>
                    <Text fontWeight={"bold"}>Location</Text>
                    <Text textAlign={"center"}>{collegeData.location}</Text>
                  </Box>
                </Flex>
              </Box>

              <Box
                width={["80vw", "80vw", "22vw", "20vw"]}
                marginTop={["2vh", "2vh", "10vh", "10vh"]}
                margin={"0px auto"}
                height={["12vh", "12vh", "12vh", "15vh"]}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #87cefa",
                  borderRadius: "10px",
                  borderBottom: "5px solid #014BEC",
                }}
                fontSize={"1rem"}
              >
                <Flex
                  justifyContent={[
                    "space-around",
                    "space-between",
                    "center",
                    "center",
                  ]}
                  style={{ alignItems: "center", height: "100%" }}
                >
                  <img style={{ marginRight: "2vw" }} src={img4}></img>
                  <Box>
                    <Text fontWeight={"bold"}>Approval</Text>
                    <Text textAlign={"center"}>{collegeData.approval}</Text>
                  </Box>
                </Flex>
              </Box>
            </Stack>
          </Box>
          <Box width={["95vw", "90vw", "80vw", "80vw"]} margin={"0 auto"}>
            <Flex>
              <Box width={["95vw", "90vw", "95vw", "57vw"]}>
                <Box
                  fontSize={"1rem"}
                  style={{
                    backgroundColor: "white",
                    marginTop: "6vh",
                    fontWeight: "40",
                    padding: "4vw",
                    boxShadow:
                      "10px 14px 16px rgba(1, 75, 236, 0.1), 10px 11px 13px rgba(1, 75, 236, 0.1)",
                    borderWidth: "1px",
                    border: "2px solid #01B4EC",
                    borderRadius: "35px",
                  }}
                >
                  <Text textAlign={"center"} fontWeight={"600"}>
                    {/* {collegeData.collegename} */}
                  </Text>
                  <p
                    style={{
                      color: "#333",
                      marginTop: "3vh",
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: "100",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: collegeData.universityDescription,
                    }}
                  ></p>
                  <table style={tableStyle}>
                    <thead style={{ color: "black" }}>
                      <tr style={{ backgroundColor: "#01B4EC" }}>
                        <th style={{ fontSize: "1rem" }}>Particulars</th>
                        <th style={{ fontSize: "1rem" }}>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={boldCellStyle}>State</td>
                        <td style={cellStyle}>{collegeData.state}</td>
                      </tr>
                      <tr style={lightGreyCellStyle}>
                        <td style={boldCellStyle}>City</td>
                        <td style={cellStyle}>{collegeData.city}</td>
                      </tr>
                      <tr>
                        <td style={boldCellStyle}>Affiliated By</td>
                        <td style={cellStyle}>{collegeData.affiliatedby}</td>
                      </tr>
                      <tr style={lightGreyCellStyle}>
                        <td style={boldCellStyle}>College Category</td>
                        <td style={cellStyle}>{collegeData.collegecategory}</td>
                      </tr>
                    </tbody>
                  </table>
                </Box>

                <Box
                  style={{ width: "57vw" }}
                  display={{ base: "none", lg: "block" }}
                >
                  <Box
                    style={{
                      backgroundColor: "white",
                      marginTop: "7vh",
                      fontWeight: "40",
                      fontSize: "1.4rem",
                      padding: "4vw",
                      boxShadow:
                        "10px 14px 16px rgba(1, 75, 236, 0.1), 10px 11px 13px rgba(1, 75, 236, 0.1)",
                      borderWidth: "1px",
                      border: "2px solid #01B4EC",
                      borderRadius: "35px",
                    }}
                  >
                    <Text
                      style={{
                        color: "#014BEC",
                        fontSize: "1rem",
                        fontWeight: "600",
                        textAlign: "center",
                      }}
                    >
                      COURSE, FEES, DURATION AND FEES OF
                    </Text>

                    <Text
                      style={{
                        fontSize: "1rem",
                        fontWeight: "600",
                        textAlign: "center",
                      }}
                    >
                      {/* {collegeData.collegename} */}
                    </Text>

                    <table style={tableStyle}>
                      <thead style={{ color: "black" }}>
                        <tr style={{ backgroundColor: "#01B4EC" }}>
                          <th style={{ fontSize: "1rem", textAlign: "center" }}>
                            Course
                          </th>
                          <th style={{ fontSize: "1rem", textAlign: "center" }}>
                            Branch
                          </th>
                          <th style={{ fontSize: "1rem", textAlign: "center" }}>
                            Total Seat
                          </th>
                          <th style={{ fontSize: "1rem", textAlign: "center" }}>
                            Course Duration
                          </th>
                          <th style={{ fontSize: "1rem", textAlign: "center" }}>
                            Tuition Fee
                          </th>
                        </tr>
                      </thead>

                      <tbody style={{ textAlign: "center" }}>
                        {collegeData.courses.map((course, index) => (
                          <tr
                            key={index}
                            style={{
                              backgroundColor:
                                index % 2 !== 0 ? "lightgrey" : "white",
                            }}
                          >
                            <td style={{ height: "3rem", fontSize: "1rem" }}>
                              {course.course}
                            </td>
                            <td style={{ height: "3rem", fontSize: "1rem" }}>
                              {course.branch}
                            </td>
                            <td style={{ height: "3rem", fontSize: "1rem" }}>
                              {course.totalSeat}
                            </td>
                            <td style={{ height: "3rem", fontSize: "1rem" }}>
                              {course.courseDuration}
                            </td>
                            <td style={{ height: "3rem", fontSize: "1rem" }}>
                              {course.tuitionFee}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Box>

                {/* <Box
                  style={{ width: "57vw" }}
                  display={{ base: "none", lg: "block" }}
                >
                  <Box
                    style={{
                      backgroundColor: "white",
                      marginTop: "7vh",
                      fontWeight: "40",
                      fontSize: "1.4rem",
                      padding: "4vw",
                      boxShadow:
                        "10px 14px 16px rgba(1, 75, 236, 0.1), 10px 11px 13px rgba(1, 75, 236, 0.1)",
                      borderWidth: "1px",
                      border: "2px solid #01B4EC",
                      borderRadius: "35px",
                    }}
                  >
                    <Text
                      style={{
                        color: "#014BEC",
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        textAlign: "center",
                      }}
                    >
                      CUTOFFS
                    </Text>

                    <Text
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        textAlign: "center",
                      }}
                    >
                      {collegeData.collegename}
                    </Text>

                    <table style={tableStyle}>
                      <thead style={{ color: "black" }}>
                        <tr style={{ backgroundColor: "#01B4EC" }}>
                          <th style={{ fontSize: "1rem", textAlign: "center" }}>
                            Seat Type
                          </th>
                          <th style={{ fontSize: "1rem", textAlign: "center" }}>
                            Counselling Type
                          </th>
                          <th style={{ fontSize: "1rem", textAlign: "center" }}>
                            Category
                          </th>
                          <th style={{ fontSize: "1rem", textAlign: "center" }}>
                            Domicile Condition
                          </th>
                          <th style={{ fontSize: "1rem", textAlign: "center" }}>
                            Round 1 Rank Year 2022
                          </th>
                          <th style={{ fontSize: "1rem", textAlign: "center" }}>
                            Round 2 Rank Year 2022
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {collegeData.cutoffdata.map((cutoff, index) => (
                          <tr
                            key={index}
                            style={{
                              backgroundColor:
                                index % 2 !== 0 ? "lightgrey" : "white",
                            }}
                          >
                            <td
                              style={{
                                textAlign: "center",
                                height: "3rem",
                                fontSize: "1rem",
                              }}
                            >
                              {cutoff.seattype}
                            </td>
                            <td
                              style={{
                                textAlign: "center",
                                fontSize: "1rem",
                              }}
                            >
                              {cutoff.counsellingtype}
                            </td>
                            <td
                              style={{
                                textAlign: "center",
                                fontSize: "1rem",
                              }}
                            >
                              {cutoff.category}
                            </td>

                            <td
                              style={{
                                textAlign: "center",
                                fontSize: "1rem",
                              }}
                            >
                              {cutoff.domicilecondition}
                            </td>
                            <td
                              style={{
                                textAlign: "center",
                                fontSize: "1rem",
                              }}
                            >
                              {cutoff.round1rank2022}
                            </td>
                            <td
                              style={{
                                textAlign: "center",
                                fontSize: "1rem",
                              }}
                            >
                              {cutoff.round2rank2022}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </Box> */}
              </Box>

              <StickyContainer>
                <Sticky
                  topOffset={-200}
                  bottomOffset={200}
                  stickyStyle={{ zIndex: 1 }}
                >
                  {({ style }) => (
                    <Box
                      display={{ base: "none", lg: "block" }}
                      style={{
                        ...style,
                        marginLeft: "5vw",
                        marginTop: "20vh",
                        background: "rgba(255, 0, 0, 0.7)",
                        width: "25vw",
                        height: "50vh",
                        position: "fixed",
                        backgroundColor: "white",
                        boxShadow:
                          "10px 14px 16px rgba(1, 75, 236, 0.1), 10px 11px 13px rgba(1, 75, 236, 0.1)",
                        borderWidth: "1px",
                        border: "2px solid #01B4EC",
                        borderRadius: "35px",
                      }}
                    >
                      <VStack
                        width={"25vw"}
                        display={{ base: "none", lg: "block" }}
                      >
                        <Text
                          textAlign={"center"}
                          style={{
                            fontsize: "1rem",
                            marginTop: "5vh",
                            fontWeight: "600",
                          }}
                        >
                          Contact Details
                        </Text>

                        <Box style={{ fontSize: "0.8rem" }}>
                          <Flex
                            style={{
                              color: "black",
                              marginTop: "5vh",
                              justifyContent: "center",
                            }}
                          >
                            <Icon
                              style={{ fontWeight: "100" }}
                              as={FaMapMarkerAlt}
                            />
                            <Text
                              style={{ fontWeight: "600", textAlign: "start" }}
                            >
                              Address
                            </Text>
                          </Flex>
                          <Text
                            style={{ textAlign: "center", color: "#014BEC" }}
                          >
                            {collegeData.location}, {collegeData.state}
                          </Text>
                        </Box>

                        <Box
                          style={{
                            fontSize: "0.8rem",
                            width: "100%",
                            overflow: "hidden",
                          }}
                        >
                          <Flex
                            style={{
                              color: "black",
                              marginTop: "5vh",
                              justifyContent: "center",
                            }}
                          >
                            <FaGlobe style={{ fontWeight: "100" }} />
                            <Text
                              style={{ fontWeight: "600", textAlign: "start" }}
                            >
                              {" "}
                              website
                            </Text>
                          </Flex>
                          <Box
                            width={"20vw"}
                            style={{
                              marginLeft: "2vw",
                              overflow: "hidden",
                              wordWrap: "break-word",
                              textAlign: "center",
                            }}
                          >
                            <Text
                              style={{ color: "#014BEC", fontSize: "1rem" }}
                            >
                              {collegeData.website}
                            </Text>
                          </Box>
                        </Box>
                      </VStack>
                    </Box>
                  )}
                </Sticky>
              </StickyContainer>

              <Box
                style={{ position: "absolute", right: "28vw", bottom: "80vh" }}
              ></Box>
            </Flex>
          </Box>
        </Box>
      </Box>

      {/* Display other college data here */}
    </div>
  );
}

export default TopRecommendedCollSingle;
