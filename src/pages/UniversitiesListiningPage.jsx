import { Grid, Box, Text, HStack, CircularProgress } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import UniversityCard from "../components/Courseuniversity/UniversityCard";
import { Filter } from "../components/Filter/Filter";
import { useParams } from "react-router-dom";

function UniversitiesListiningPage() {
  const { state } = useParams();

  const [universities, setUniversities] = useState([]);
  const [bannerImage, setBannerImage] = useState(null);
  const [filteredUniversity, setFilteredUniversity] = useState("");

  const handleFilterChange = (selectedFilter) => {
    setFilteredUniversity(selectedFilter);
  };

  useEffect(() => {
    let apiUrl;

    if (filteredUniversity) {
      // apiUrl = `https://api.admissionpossibility.com/api/universities/${filteredUniversity}`;
      apiUrl = `https://api.admissionpossibility.com/api/universities/${filteredUniversity}`;
    } else if (state) {
      // apiUrl = `https://api.admissionpossibility.com/api/universities/${state}`;
      apiUrl = `https://api.admissionpossibility.com/api/universities/${state}`;
    } else {
      console.error(
        "Neither state nor filteredUniversity are available. Please provide a valid URL."
      );
      return;
    }

    axios
      .get(apiUrl)
      .then((response) => {
        setUniversities(response.data);
      })
      .catch((error) => {
        console.error("Error fetching universities:", error);
      });
  }, [filteredUniversity, state]);

  useEffect(() => {
    switch (state.toLowerCase()) {
      case "karnataka":
        setBannerImage();
        break;
      case "uttarpradesh":
        setBannerImage();
        break;
      case "delhi":
        setBannerImage();
        break;
      case "bihar":
        setBannerImage();
        break;
      default:
        setBannerImage(null);
        break;
    }
  }, [state]);

  return (
    <div>
      <HStack>
        <Box mt={36}>
          {/* {bannerImage && (
            <img
              style={{ width: "100vw", height: "35vh" }}
              src={bannerImage}
              alt={`Banner for ${state}`}
            />
          )} */}

          {/* <Text
            fontSize="1.7rem"
            fontWeight="bold"
            background={"rgb(1,180,236)"}
            mb={4}
            textAlign={"center"}
            color={"white"}
          >
            Universities in {state}
          </Text> */}

          <HStack alignItems={"start"}>
            <Box display={["none", "none", "block", "block"]}>
              <Filter handleFilterChange={handleFilterChange} />
            </Box>

            <Grid templateColumns="repeat(1,1fr)" gap={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "6vh",
                }}
              >
                {universities.length === 0 ? (
                  <Box
                    width={"50vw"}
                    margin={"auto"}
                    mt={6}
                  >
                    <Text>Loading Colleges....</Text>
                    <CircularProgress isIndeterminate color="blue" />
                  </Box>
                ) : (
                  universities.map((university) => (
                    <UniversityCard
                      key={university._id}
                      university={university}
                      style={{ marginBottom: "6vh" }}
                    />
                  ))
                )}
              </div>
            </Grid>
          </HStack>
        </Box>
      </HStack>
    </div>
  );
}

export default UniversitiesListiningPage;
