// UPUniversities.js

import { Container, Grid, Box, Text, CircularProgress } from "@chakra-ui/react";
import UniversityCard from "./UniversityCard";

import React, { useState, useEffect } from "react";
import axios from "axios";
import img1 from "../Karnataka banner2.jpg-86677_1.jpg";

function MS() {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    // Fetch universities for Uttar Pradesh
    axios
      .get("https://api.admissionpossibility.com/api/colleges/MS")

      .then((response) => {
        setUniversities(response.data);
      })
      .catch((error) => {
        console.error("Error fetching universities:", error);
      });
  }, []);

  if (universities.length === 0) {
    return (
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
    );
  }
  return (
    <div style={{ marginTop: "18vh" }}>
      <Box >
        <img style={{ width: "100vw", height: "50vh" }} src={img1}></img>

        <Text fontSize="1.9rem" fontWeight="bold" background={"#01B4EC"} mb={4}>
          Universities of MS
        </Text>
        <Grid templateColumns="repeat(1,1fr)" width={"80vw"} margin={"auto"} gap={4}>
          <Box
          // border={"5px solid red"}
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "6vh",
            }}
          >
            {universities.map((university) => (
              <UniversityCard
                key={university._id}
                university={university}
                style={{ marginBottom: "6vh" }}
              />
            ))}
          </Box>
        </Grid>
      </Box>
    </div>
  );
}

export default MS;
