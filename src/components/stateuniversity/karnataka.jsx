import { Container, Grid, Box, Text, HStack } from "@chakra-ui/react";
import UniversityCard from "../Courseuniversity/UniversityCard";

import { Filter } from "../Filter/Filter";

import React, { useState, useEffect } from "react";
import axios from "axios";
import img1 from "../Collegepage/Karnataka banner2.jpg-86677_1 (1).jpg";

function Karnataka() {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    // Fetch universities for Uttar Pradesh
    axios
      // .get("https://api.admissionpossibility.com/api/universities/Karnataka")
      .get("https://api.admissionpossibility.com/api/universities/Karnataka")

      .then((response) => {
        setUniversities(response.data);
        console.log("kart",response.data)
      })
      .catch((error) => {
        console.error("Error fetching universities:", error);
      });
  }, []);

  return (
    <div>
      <HStack>
        <Box mt={50}>
          <img style={{ width: "100vw", height: "35vh" }} src={img1}></img>

          <Text
            fontSize="1.7rem"
            fontWeight="bold"
            background={"rgb(1,180,236)"}
            mb={4}
            textAlign={"center"}
            color={"white"}
          >
            Universities in Karnataka
          </Text>

          <HStack alignItems={"start"}>
            <Box display={["none", "none", "block", "block"]}>
              <Filter />
            </Box>

            <Grid
              //  border={"5px solid red"}
              templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
              gap={4}
            >
              <div
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
              </div>
            </Grid>
          </HStack>
        </Box>
      </HStack>
    </div>
  );
}

export default Karnataka;
