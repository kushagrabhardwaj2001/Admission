import { Grid, Box, Text, HStack, CircularProgress } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import UniversityCard from "../components/Courseuniversity/UniversityCard";
import { useParams } from "react-router-dom";

function InternationalPage() {
  const { state } = useParams();

  const [universities, setUniversities] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.admissionpossibility.com/api/universities/${state}`)
      // .get(`http://localhost:5000/api/universities/${state}`)
      .then((response) => {
        setUniversities(response.data);
      })
      .catch((error) => {
        console.error("Error fetching universities:", error);
      });
  }, [state]);

  return (
    <Box mt={36}>
      <Grid>
        {universities.length === 0 ? (
          <Box
            ml={20}
            width={"100%"}
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
      </Grid>
    </Box>
  );
}

export default InternationalPage;
