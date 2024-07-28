import React, { useState, useEffect } from "react";
// import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import axios from "axios";
import { ownership, state } from "../Statecollege/data";

export const Filter = ({ handleFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState(null);

  const handleCheckboxChange = (e, item) => {
    if (e.target.checked && activeFilter !== item) {
      setActiveFilter(item);
      handleFilterChange(item);
    } else if (!e.target.checked && activeFilter === item) {
      setActiveFilter(null);
      handleFilterChange(null);
    }
  };

  return (
    <Box
      w="25vw"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      p="5"
      overflowY="scroll"
      overflowX={"hidden"}
    >
      <HStack mb={2}>
        <Heading fontSize={"1.3rem"}>Filter By</Heading>
        <Spacer />
        <Text color={"red"} fontWeight={"500"}>
        STATE
        </Text>
      </HStack>
      <hr />

      <VStack mt={3} align={"flex-start"} spacing={2} w="100%">
        {state?.map((item, index) => (
          <Checkbox
            key={index}
            onChange={(e) => handleCheckboxChange(e, item)}
            isChecked={activeFilter === item}
          >
            {item}
          </Checkbox>
        ))}
      </VStack>
    </Box>
  );
};