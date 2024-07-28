import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContextProvider";

const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { isAuth, setIsAuth, toggleAuth } = React.useContext(AuthContext);
  const [loginData, setLoginData] = useState({
    mail_id: "",
    password: "",
  });

  const loginUser = (loginData) => {
    axios
      // .post(`https://api.admissionpossibility.com/api/user/login`, loginData)
      .post(`https://api.admissionpossibility.com/api/user/login`, loginData)
      .then((res) => {
        console.log("res:", res.data);
        if (res.status === 200) {
          setIsAuth(true);
          const userDataString = JSON.stringify(res.data.user[0]);
          console.log("tstsudsds", userDataString);
          localStorage.setItem("user", userDataString);
          localStorage.setItem("isAuth", true);

          toast({
            title: "User",
            description: "Login successfully.",
            status: "success",
            duration: 4000, // Duration in milliseconds
            isClosable: true, // Allow users to close the toast manually
          });
          navigate("/");
        }
      });
  };
  console.log("isAuth in login:", isAuth);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked handle submit");
    loginUser(loginData);
    console.log(loginData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box bg={"rgb(151,162,226)"}>
      <Box
        width={"100%"}
        height={"80vh"}
        marginTop={"16vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          width={{ base: "90%", md: "40%" }}
          p="10"
          bg="#ffff"
          borderRadius={"12px"}
          boxShadow="0px 3px 8px rgba(0, 0, 0, 0.24)"
        >
          <Heading fontSize={"1.5rem"} textAlign={"center"} mb={"5"}>
            Login Here
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Mail ID</FormLabel>
              <Input
                mb={4}
                name="mail_id"
                value={loginData.mail_id}
                onChange={handleChange}
                placeholder="Enter your mail id"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </FormControl>

            <Box textAlign={"center"} mt={"5"}>
              {" "}
              <Link to="/register">
                <Text color={"blue"}>
                  Don't have account click me to Register ⬇
                </Text>
              </Link>
            </Box>
            <Center>
              {" "}
              <Input
                mt={"5"}
                margin={"auto"}
                width={"80%"}
                border={"2px solid #01B4EC"}
                _hover={{ backgroundColor: "#01B4EC", color: "white" }}
                type="submit"
              />
            </Center>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
