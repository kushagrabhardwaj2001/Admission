import React, { useState } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Input,
  Button,
  FormLabel,
  FormControl,
  TableContainer,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Badge,
  StatArrow,
  StatGroup,
  useToast
} from "@chakra-ui/react";
import axios from "axios";
import { EditIcon, DeleteIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { Tooltip } from "@chakra-ui/react";
const UniversitiesTable = ({ data }) => {
  const toast = useToast();

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [updatedData, setUpdatedData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [universityID, setID] = useState();
  // const deleteData = async (id) => {
  //   console.log("id from delete function", id);
  //   try {
  //     // Send a DELETE request to the backend API endpoint
  //     const response = await axios.delete(
  //       `https://api.admissionpossibility.com/api/deleteData/${id}`
  //     );

  //     // Check if the request was successful
  //     if (response.status === 200) {
  //       console.log("Data deleted successfully");
  //       return true;
  //     } else {
  //       console.error("Failed to delete data:", response.data.message);
  //       return false;
  //     }
  //   } catch (error) {
  //     console.error("Error deleting data:", error);
  //     return false;
  //   }
  // };
  const deleteData = async (id) => {
    console.log("id from delete function", id);
    try {
      // Send a DELETE request to the backend API endpoint
      const response = await axios.delete(
        `https://api.admissionpossibility.com/api/deleteData/${id}`
      );
  
      // Check if the request was successful
      if (response.status === 200) {
        console.log("Data deleted successfully");
        toast({
          title: "Data Deleted",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        return true;
      } else {
        console.error("Failed to delete data:", response.data.message);
        toast({
          title: "Failed to Delete Data",
          description: response.data.message || "An error occurred",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return false;
      }
    } catch (error) {
      console.error("Error deleting data:", error);
      toast({
        title: "Error",
        description: "Failed to delete data. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return false;
    }
  };
  const updateUniversityData = async (universityID) => {
    setLoading(true);
    try {
      const response = await axios.patch(
        // `http://localhost:5000/api/updateData/${universityID}`,
        `https://api.admissionpossibility.com/api/updateData/${universityID}`,
        updatedData
      );
      // setUpdatedData(response.data);
      setLoading(false);
      toast({
        title: "Data Updated",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      setError(error.message);
      setLoading(false);
      toast({
        title: "Error",
        description: "Failed to update data. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "courses") {
      const coursesArray = value.split(",").map((course) => course.trim());
      setUpdatedData((prevData) => ({
        ...prevData,
        [name]: coursesArray,
      }));
    } else {
      setUpdatedData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit function with the updated data
    // onSubmit(updatedData);
    console.log("hello clicked");
    updateUniversityData(universityID);
  };

  const getUniversityData = async (id) => {
    setLoading(true);
    try {
      setID(id);
      const response = await axios.get(
        `https://api.admissionpossibility.com/api/universities/admin/${id}`
      );
      setUpdatedData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  // const updateUniversityData = async (universityID) => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.patch(
  //       `https://api.admissionpossibility.com/api/updateData/${universityID}`,
  //       updatedData
  //     );
  //     // setUpdatedData(response.data);
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error.message);
  //     setLoading(false);
  //   }
  // };
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const openDetailsModal = (university) => {
    setSelectedUniversity(university);
    setShowDetailsModal(true);
  };

  const openUpdateModal = (university) => {
    setSelectedUniversity(university);
    setShowUpdateModal(true);
    getUniversityData(university._id);
    console.log("university:", university._id);
  };

  const closeDetailsModal = () => {
    setShowDetailsModal(false);
  };

  const closeUpdateModal = () => {
    setShowUpdateModal(false);
  };
  console.log("updatedData:", updatedData);
  console.log("setLoading:", loading);
  return (
    <Box overflowX="auto">
      <TableContainer>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>College Name</Th>
              <Th>Address</Th>
              <Th>State</Th>
              <Th>City</Th>
              <Th>Affiliated By</Th>
              <Th>College Category</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((university) => (
              <Tr key={university._id}>
                {/* <Td>{university.collegename}</Td> */}
                <Td>{truncateText(university.collegename, 30)}</Td>
                <Td>{truncateText(university.address, 20)}</Td>

                <Td>{university.state}</Td>
                <Td>{university.city}</Td>
                <Td>{truncateText(university.affiliatedby, 20)}</Td>
                <Td>{truncateText(university.collegecategory, 20)}</Td>
                <Td>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Tooltip label="Details" aria-label="A tooltip">
                      <InfoOutlineIcon
                        cursor={"pointer"}
                        onClick={() => openDetailsModal(university)}
                      />
                    </Tooltip>
                    <Tooltip label="Update" aria-label="A tooltip">
                      <EditIcon
                        cursor={"pointer"}
                        onClick={() => openUpdateModal(university)}
                      />
                    </Tooltip>
                    <Tooltip label="Delete" aria-label="A tooltip">
                      <DeleteIcon
                        cursor={"pointer"}
                        onClick={() => deleteData(university._id)}
                      />
                    </Tooltip>
                  </Box>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {/* Details Modal */}
      <Modal isOpen={showDetailsModal} onClose={closeDetailsModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>University Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedUniversity && (
              <>
                <Stat>
                  <StatLabel>
                    <Badge variant="outline" colorScheme="green">
                      Name
                    </Badge>
                  </StatLabel>
                  <StatNumber>{selectedUniversity.collegename}</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>
                    <Badge variant="outline" colorScheme="green">
                      Address
                    </Badge>
                  </StatLabel>
                  <StatHelpText>{selectedUniversity.address}</StatHelpText>
                </Stat>
                <Stat>
                  <StatLabel>
                    <Badge variant="outline" colorScheme="green">
                      State
                    </Badge>
                  </StatLabel>
                  <StatHelpText>{selectedUniversity.state}</StatHelpText>
                </Stat>
                <Stat>
                  <StatLabel>
                    <Badge variant="outline" colorScheme="green">
                      City
                    </Badge>
                  </StatLabel>
                  <StatHelpText>{selectedUniversity.city}</StatHelpText>
                </Stat>
                <Stat>
                  <StatLabel>
                    <Badge variant="outline" colorScheme="green">
                      Affiliated by
                    </Badge>
                  </StatLabel>
                  <StatHelpText>{selectedUniversity.affiliatedby}</StatHelpText>
                </Stat>
                <Stat>
                  <StatLabel>
                    <Badge variant="outline" colorScheme="green">
                      College Category
                    </Badge>
                  </StatLabel>
                  <StatHelpText>
                    {selectedUniversity.collegecategory}
                  </StatHelpText>
                </Stat>
                <Stat>
                  <StatLabel>
                    <Badge variant="outline" colorScheme="green">
                      Approval
                    </Badge>
                  </StatLabel>
                  <StatHelpText>{selectedUniversity.approval}</StatHelpText>
                </Stat>
                <Stat>
                  <StatLabel>
                    <Badge variant="outline" colorScheme="green">
                      College Type
                    </Badge>
                  </StatLabel>
                  <StatHelpText>{selectedUniversity.collegetype}</StatHelpText>
                </Stat>
                <Stat>
                  <StatLabel>
                    <Badge variant="outline" colorScheme="green">
                      Established
                    </Badge>
                  </StatLabel>
                  <StatHelpText>{selectedUniversity.established}</StatHelpText>
                </Stat>
                <Stat>
                  <StatLabel>
                    <Badge variant="outline" colorScheme="green">
                      Location
                    </Badge>
                  </StatLabel>
                  <StatHelpText>{selectedUniversity.location}</StatHelpText>
                </Stat>
                <Stat>
                  <StatLabel>
                    <Badge variant="outline" colorScheme="green">
                      Mail
                    </Badge>
                  </StatLabel>
                  <StatHelpText>{selectedUniversity.mail}</StatHelpText>
                </Stat>
                <Stat>
                  <StatLabel>
                    <Badge variant="outline" colorScheme="green">
                      Website
                    </Badge>
                  </StatLabel>
                  <StatHelpText>{selectedUniversity.website}</StatHelpText>
                </Stat>
              </>
            )}
          </ModalBody>
          <ModalFooter>{/* Add any footer buttons if needed */}</ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={showUpdateModal} onClose={closeUpdateModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update University</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedUniversity && (
              <>
                {loading ? (
                  <Box
                    w="100%"
                    h="10vh"
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Spinner size="xl" />
                  </Box>
                ) : (
                  <Box>
                    <form onSubmit={handleSubmit}>
                      <FormControl>
                        <FormLabel>College Name</FormLabel>
                        <Input
                          name="collegename"
                          value={updatedData.collegename}
                          onChange={handleChange}
                          placeholder="College Name"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Address</FormLabel>
                        <Input
                          name="address"
                          value={updatedData.address}
                          onChange={handleChange}
                          placeholder="Address"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>State</FormLabel>
                        <Input
                          name="state"
                          value={updatedData.state}
                          onChange={handleChange}
                          placeholder="State"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>City</FormLabel>
                        <Input
                          name="city"
                          value={updatedData.city}
                          onChange={handleChange}
                          placeholder="City"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Affiliated By</FormLabel>
                        <Input
                          name="affiliatedby"
                          value={updatedData.affiliatedby}
                          onChange={handleChange}
                          placeholder="Affiliated By"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>College Category</FormLabel>
                        <Input
                          name="collegecategory"
                          value={updatedData.collegecategory}
                          onChange={handleChange}
                          placeholder="College Category"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Approval</FormLabel>
                        <Input
                          name="approval"
                          value={updatedData.approval}
                          onChange={handleChange}
                          placeholder="Approval"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>College Type</FormLabel>
                        <Input
                          name="collegetype"
                          value={updatedData.collegetype}
                          onChange={handleChange}
                          placeholder="College Type"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Courses</FormLabel>

                        <Input
                          name="courses"
                          value={
                            updatedData?.courses
                              ?.map((course) => course.course)
                              .join(", ") || ""
                          }
                          onChange={handleChange}
                          placeholder="Courses"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Established</FormLabel>
                        <Input
                          name="established"
                          value={updatedData.established}
                          onChange={handleChange}
                          placeholder="Established"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Location</FormLabel>
                        <Input
                          name="location"
                          value={updatedData.location}
                          onChange={handleChange}
                          placeholder="Location"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Mail</FormLabel>
                        <Input
                          name="mail"
                          value={updatedData.mail}
                          onChange={handleChange}
                          placeholder="Mail"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Website</FormLabel>
                        <Input
                          name="website"
                          value={updatedData.website}
                          onChange={handleChange}
                          placeholder="Website"
                        />
                      </FormControl>
                      <Button type="submit">Submit</Button>
                    </form>
                  </Box>
                )}
              </>
            )}
          </ModalBody>
          <ModalFooter>{/* Add any footer buttons if needed */}</ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default UniversitiesTable;
