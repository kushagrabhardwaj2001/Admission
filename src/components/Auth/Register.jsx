import React, { useState } from "react";
import {
  Box,
  Heading,
  Button,
  Text,
  Select,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  NumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputField,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [other, setother] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    father_name: "",
    mother_name: "",
    mobile_num: "",
    dob: "",
    mail_id: "",
    password: "",
    city: "",
    state: "",
    exam_attempted: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        // `https://api.admissionpossibility.com/api/user/register`,
        `https://api.admissionpossibility.com/api/user/register`,
        formData
      );
      if (res.status === 201) {
        toast({
          title: "User",
          description: "Register successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/login/user");
      }
      setFormData({
        firstname: "",
        lastname: "",
        father_name: "",
        mother_name: "",
        mobile_num: "",
        dob: "",
        mail_id: "",
        password: "",
        city: "",
        state: "",
        exam_attempted: "",
      });
      console.log(formData);
    } catch (error) {}
  };

  return (
    <Box
      width={"100%"}
      height={{ base: "200vh", md: "100vh", lg: "100vh" }}
      marginTop={"16vh"}
      backgroundColor={"#97A2E2"}
      display={"flex"}
      justifyContent={"center"}
      // alignItems={"center"}
      py={8}
    >
      <Box
        width={{ base: "90vw", md: "70vw" }}
        height={{ base: "190vh", md: "80vh", lg: "90vh" }}
        backgroundColor={"white"}
        borderRadius={"10px"}
        // marginTop={{base:"0",md:"0"}}
      >
        <Text
          textAlign={"center"}
          fontSize={"1.5rem"}
          color={"#01B4EC"}
          marginTop={"4vh"}
        >
          Register to get started
        </Text>

        <Box
          display={"flex"}
          justifyContent={"space-around"}
          margin={"0px auto"}
          width={"80%"}
          marginTop={"4vh"}
          flexDirection={{ base: "column", md: "row" }}
          gap={4}
        >
          <FormControl isRequired width={{ base: "100%", md: "45%" }}>
            <FormLabel>First name</FormLabel>
            <Input
              name="firstname"
              onChange={handlechange}
              value={formData.firstname}
              placeholder="First name"
            />
          </FormControl>

          <FormControl isRequired width={{ base: "100%", md: "45%" }}>
            <FormLabel>Last name</FormLabel>
            <Input
              name="lastname"
              value={formData.lastname}
              onChange={handlechange}
              placeholder="Last name"
            />
          </FormControl>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"space-around"}
          margin={"0px auto"}
          width={"80%"}
          marginTop={"4vh"}
          flexDirection={{ base: "column", md: "row" }}
          gap={4}
        >
          <FormControl isRequired width={{ base: "100%", md: "45%" }}>
            <FormLabel>Father's name</FormLabel>
            <Input
              name="father_name"
              onChange={handlechange}
              value={formData.father_name}
              placeholder="Enter Father name"
            />
          </FormControl>

          <FormControl isRequired width={{ base: "100%", md: "45%" }}>
            <FormLabel>Mother name</FormLabel>
            <Input
              name="mother_name"
              value={formData.mother_name}
              onChange={handlechange}
              placeholder="Enter Mother name"
            />
          </FormControl>
        </Box>

        <form onSubmit={handlesubmit}>
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            margin={"0px auto"}
            width={"80%"}
            marginTop={"4vh"}
            flexDirection={{ base: "column", md: "row" }}
            gap={4}
          >
            <FormControl isRequired width={{ base: "100%", md: "45%" }}>
              <FormLabel>Mobile no</FormLabel>
              <Input
                name="mobile_num"
                value={formData.mobile_num}
                onChange={handlechange}
                placeholder="mobile no"
              ></Input>
            </FormControl>

            <FormControl isRequired width={{ base: "100%", md: "45%" }}>
              <FormLabel>DOB</FormLabel>
              <Input
                name="dob"
                onChange={handlechange}
                value={formData.dob}
                placeholder="Select Date and Time"
                size="md"
                type="date"
              />
            </FormControl>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"space-around"}
            margin={"0px auto"}
            width={"80%"}
            marginTop={"4vh"}
            flexDirection={{ base: "column", md: "row" }}
            gap={4}
          >
            <FormControl isRequired width={{ base: "100%", md: "45%" }}>
              <FormLabel>Mail Id</FormLabel>
              <Input
                name="mail_id"
                value={formData.mail_id}
                onChange={handlechange}
                placeholder="Enter mail id"
              ></Input>
            </FormControl>
            <FormControl isRequired width={{ base: "100%", md: "45%" }}>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                value={formData.password}
                onChange={handlechange}
                placeholder="Enter your password"
              ></Input>
            </FormControl>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"space-around"}
            margin={"0px auto"}
            width={"80%"}
            marginTop={"4vh"}
            flexDirection={{ base: "column", md: "row" }}
            gap={4}
          >
            <FormControl isRequired width={{ base: "100%", md: "45%" }}>
              <FormLabel>City</FormLabel>
              <Input
                name="city"
                onChange={handlechange}
                value={formData.city}
                placeholder="Enter City"
              />
            </FormControl>

            <FormControl isRequired width={{ base: "100%", md: "45%" }}>
              <FormLabel>State</FormLabel>
              <Input
                name="state"
                value={formData.state}
                onChange={handlechange}
                placeholder="Enter State"
              />
            </FormControl>

            <FormControl isRequired width={{ base: "100%", md: "45%" }}>
              <FormLabel>Exam Attempted</FormLabel>
              <Select
                onChange={handlechange}
                placeholder="Select option"
                name="exam_attempted"
              >
                <option value="JEE">JEE</option>
                <option value="NEET">NEET</option>
                <option value="NLAT">NLAT</option>
                <option value="NIFT">NIFT</option>
                <option value="CAT">CAT</option>
                <option value="XAT">XAT </option>
                <option value="SSC CHSL">SSC CHSL</option>
                <option value="other">other</option>
              </Select>

              {other && <Input placeholder="enter name of course" />}
            </FormControl>
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            margin={"0px auto"}
            width={"80%"}
            marginTop={"4vh"}
            textAlign={"center"}
          >
            {/* Register
            </Button> */}

            <Link to="/login/user">
              <Text margin={"auto"} mb="2" color={"blue"}>
                Already have account click me to login ⬇
              </Text>
            </Link>
            <Input
              margin={"auto"}
              width={"80%"}
              border={"2px solid #01B4EC"}
              _hover={{ backgroundColor: "#01B4EC", color: "white" }}
              type={"submit"}
            />
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
