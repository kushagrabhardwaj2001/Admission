import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Text } from "@chakra-ui/react";
const Runningnumber = ({ initialnumber, interval, targetNumber }) => {
  const [number, setNumber] = useState(initialnumber);

  useEffect(() => {
    const timer = setInterval(() => {
      setNumber((prev) => {
        if (prev < targetNumber) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, interval);
  }, [interval, targetNumber]);

  return <Text>{number}+</Text>;
};

export default Runningnumber;
