import { Box, Button, Input, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import UniversitiesTable from "./UniversitiesTable";
import axios from "axios";

const AdminDashboard = () => {
  const [universities, setUniversities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentData, setCurrentData] = useState();

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const fetchData = async (page = 1, limit = 10) => {
    // let url = `http://localhost:5000/api/university/data?page=${page}&limit=${limit}`;
    // if (searchTerm) {
    //   url = `http://localhost:5000/api/university/search?term=${searchTerm}&page=${page}&limit=${limit}
    //   `;
    // }

    let url = `https://api.admissionpossibility.com/api/universities?page=${page}&limit=${limit}`;
    if (searchTerm) {
      url = `https://api.admissionpossibility.com/api/universities/search?term=${searchTerm}`;
    }

    try {
      const response = await axios.get(url);
      if (searchTerm) {
        setUniversities(response.data);
      } else {
        setUniversities(response.data.universities);
      }
      console.log("response", response.data.universities);
      console.log("response", response.data);

      setTotalPages(response.data.totalPages); // Set total pages
      return response.data.universities;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  // Debounce fetchData function with 300ms delay
  const debouncedFetchData = debounce(fetchData, 300);

  const handlePagination = async (direction) => {
    let nextPage = currentPage;
    if (direction === "prev") {
      nextPage = currentPage > 1 ? currentPage - 1 : 1;
    } else if (direction === "next") {
      nextPage = currentPage + 1;
    }

    const data = await fetchData(nextPage);
    if (data) {
      setUniversities(data);
      setCurrentPage(nextPage);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  console.log("currentPage:", currentPage);
  return (
    <Box>
      <Heading mt={"150px"}>Universities Data</Heading>
      <Input
        textAlign={"center"}
        placeholder="Search by college"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {universities && universities.length > 0 ? (
        <>
          <UniversitiesTable data={universities} />
          
          <Box padding={10} display={'flex' } alignItems={'center'} justifyContent={"center"} gap={10}>
          <Button onClick={() => handlePagination("prev")} bg={"#01B4EC"}>Prev</Button>
          <Text>{currentPage} of  {totalPages}</Text> {/* Display total pages */}
            <Button onClick={() => handlePagination("next")} bg={"#01B4EC"}>Next</Button>
          </Box>
        </>
      ) : (
        <p>No universities found.</p>
      )}
    </Box>
  );
};

export default AdminDashboard;
