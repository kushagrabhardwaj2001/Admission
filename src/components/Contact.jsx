import React, { useState } from "react";
import { Box, background, position, button, useToast } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import {
  HStack,
  Flex,
  Icon,
  Divider,
  Button,
  Heading,
  VStack,
  FormControl,
  Input,
  Textarea,
  Image,
} from "@chakra-ui/react";
import img1 from "./call-us.jpg";
import "./contact.css";
import axios from "axios";

const Contact = () => {
  const toast = useToast();
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    mobile: "",
    description: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactFormSubmit = async (e) => {
    e.preventDefault(); // Corrected spelling of preventDefault
    console.log("contactData:", contactData);
    // Add logic for form submission here
    try {
      const responce = await axios.post(
        `https://localhost:5000/api/contact`,
        contactData
      );
      if (responce.status === 200) {
        toast({
          title: `Thank you for contacting us!`,
          status: "success",
          isClosable: true,
        });
        setContactData({
          name: "",
          email: "",
          mobile: "",
          description: "",
        });
      }

      console.log("responce:", responce);
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleContactFormSubmit}>
        <Box
          marginTop={"18vh"}
          // width={"100vw"}
          // height={"100vh"}
        >
          <Flex
            width={"100%"}
            height={"100%"}
            flexDirection={{
              base: "column",
              sm: "column",
              md: "column",
              xl: "row",
            }}
          >
            <Image
              src={img1}
              width={{ base: "80%", sm: "80%", md: "80%", xl: "30%" }}
              h={"70vh"}
              margin={"auto"}
            />

            <VStack
              width={{ base: "80vw", sm: "80vw", md: "45vw", xl: "40vw" }}
              margin={"auto"}
            >
              <h2 style={{ fontSize: "1.8rem" }}>
                <Text style={{ color: "#000000" }}>CONTACT US </Text>
              </h2>

              <Text
                fontSize={{ base: "2rem" }}
                style={{ color: "rgb(1,180,236)", marginTop: "1vh" }}
                textAlign={"center"}
              >
                Request a Callback
              </Text>

              <FormControl isRequired marginTop={"2vh"}>
                <Input
                  onChange={handleInput}
                  name="name"
                  value={contactData.name}
                  placeholder="Full name"
                />
              </FormControl>

              <FormControl isRequired marginTop={"2vh"}>
                <Input
                  onChange={handleInput}
                  name="email"
                  value={contactData.email}
                  placeholder="Email"
                />
              </FormControl>

              <FormControl isRequired marginTop={"2vh"}>
                <Input
                  onChange={handleInput}
                  name="mobile"
                  value={contactData.mobile}
                  placeholder="Mobile"
                />
              </FormControl>

              <FormControl isRequired marginTop={"2vh"}>
                <Textarea
                  onChange={handleInput}
                  name="description"
                  value={contactData.description}
                  placeholder="Enter description"
                ></Textarea>
              </FormControl>

              <Button
                type="submit"
                marginTop={"2vh"}
                color={"white"}
                fontWeight={"400"}
                backgroundColor={"rgb(1,180,236)"}
                padding={"5px 40px"}
                _hover={{
                  color: "black",
                  border: "2px solid rgb(1,180,236)",
                  backgroundColor: "white",
                }}
                marginBottom={"5vh"}
              >
                Submit
              </Button>
            </VStack>
          </Flex>
        </Box>
      </form>
    </div>
  );
};

export default Contact;
