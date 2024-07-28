import { Container, Grid, Box, Text, HStack, CircularProgress, Button } from "@chakra-ui/react";
import UniversityCard from "./UniversityCard";

import React, { useState, useEffect } from "react";
import axios from "axios";
import img1 from "../Karnataka banner2.jpg-86677_1.jpg";
import { Filter } from "../Filter/Filter";
import BasesonCourses from "./BasedonCourses";

function MBBS() {
  const [universities, setUniversities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // Fetch universities for Uttar Pradesh
    fetchUniversities();
  }, [currentPage]); // Fetch universities whenever currentPage changes

  const fetchUniversities = () => {
    axios
      // .get(`https://api.admissionpossibility.com/api/colleges/MBBS?page=${currentPage}&limit=10`)
      .get(`https://api.admissionpossibility.com/api/colleges/MBBS?page=${currentPage}&limit=10`)
      .then((response) => {
        setUniversities(response.data.universities);
        setTotalPages(response.data.pagination.totalPages);
      })
      .catch((error) => {
        console.error("Error fetching universities:", error);
      });
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

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
  console.log('currentPage:', currentPage)
  return (
    <div>
      <HStack>
        <Box mt={50}>
          <img style={{ width: "100vw", height: "50vh" }} src={img1} alt="Banner" />

          <Text
            fontSize="1.7rem"
            fontWeight="bold"
            background={"rgb(1,180,236)"}
            mb={4}
            textAlign={"center"}
            color={"white"}
          >
            Universities in MBBS
          </Text>

          <HStack alignItems={"start"}>
            <Box display={["none", "none", "block", "block"]}>
              {/* <Filter /> */}
            </Box>

            <Grid
              templateColumns="repeat(1,1fr)"
              width={"80vw"}
              margin={"auto"}
              gap={4}
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "6vh",
                }}
              >
                {universities.map((university) => (
                  <BasesonCourses
                    key={university._id}
                    university={university}
                    coursesing = {"MBBS"}
                    style={{ marginBottom: "6vh" }}
                  />
                ))}
              </Box>
            </Grid>
          </HStack>
        </Box>
      </HStack>
      
      <HStack justifyContent="center" mb={4}>
        <Button
          colorScheme="blue"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
         {/* <Button
              width={"10vw"}
              fontSize={{base:"0.6rem",lg:"1rem"}}
              borderRadius={"10px"}
              height={"4vh"}
              mt={4}
              border={"2px solid #01B4EC"}
              cursor={"pointer"}
              onClick={handleclick}
              _hover={{ backgroundColor: "#01B4EC" }}
            >
              Details
            </Button> */}
        <Button
          colorScheme="blue"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </HStack>
    </div>
  );
}

export default MBBS;


// // UPUniversities.js

// import { Container, Grid, Box, Text, HStack, CircularProgress } from "@chakra-ui/react";
// import UniversityCard from "./UniversityCard";

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import img1 from "../Karnataka banner2.jpg-86677_1.jpg";
// import { Filter } from "../Filter/Filter";

// function MBBS() {
//   const [universities, setUniversities] = useState([]);

//   useEffect(() => {
//     // Fetch universities for Uttar Pradesh
//     axios
//       .get("https://api.admissionpossibility.com/api/colleges/MBBS?page=1&limit=20")
//       // .get("https://api.admissionpossibility.com/api/colleges/MBBS")

//       .then((response) => {
//         setUniversities(response.data.universities);
//       })
//       .catch((error) => {
//         console.error("Error fetching universities:", error);
//       });
//   }, []);

//   console.log('universities:', universities)


//   if (universities.length === 0) {
//     return (
//       <Box
//         width={"100vw"}
//         height={"100vh"}
//         display={"flex"}
//         justifyContent={"center"}
//         alignItems={"center"}
//       >
//         <Text>Loading Colleges....</Text>
//         <CircularProgress isIndeterminate color="blue" />
//       </Box>
//     );
//   }

//   return (
//     <div>
//       <HStack>
//         <Box mt={50}>
//           <img style={{ width: "100vw", height: "50vh" }} src={img1}></img>

//           <Text
//             fontSize="1.7rem"
//             fontWeight="bold"
//             background={"rgb(1,180,236)"}
//             mb={4}
//             textAlign={"center"}
//             color={"white"}
//           >
//             Universities in MBBS
//           </Text>

//           <HStack alignItems={"start"}>
//             <Box display={["none", "none", "block", "block"]}>
//               {/* <Filter /> */}
//             </Box>

//             <Grid
//               templateColumns="repeat(1,1fr)"
//               width={"80vw"}
//               margin={"auto"}
//               gap={4}
//             >
//               <Box
//                 // border={"5px solid red"}
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   marginBottom: "6vh",
//                 }}
//               >
//                 {universities?.map((university) => (
//                   // <li>{university._id}</li>
//                   <UniversityCard
//                     key={university._id}
//                     university={university}
//                     style={{ marginBottom: "6vh" }}
//                   />
//                 ))}
//               </Box>
//             </Grid>
//           </HStack>
//         </Box>
//       </HStack>
//     </div>
//   );
// }

// export default MBBS;
