import React, { useContext, useEffect, useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  background,
  position,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import {
  HStack,
  Flex,
  Icon,
  Divider,
  Button,
  Heading,
  VStack,
  Link,
  Menu,
  MenuButton,
  useDisclosure,
  MenuList,
  MenuItem,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import "./header.css";
import logo from "./logo (1) 4.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext/AuthContextProvider";
const Header = () => {
  const navigate = useNavigate();
  // const [show, setShow] = useState(false);
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem("user")) || "";
  // console.log("user", user);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // useEffect(() => {
  //   if (user !== "") {
  //     setShow(true);
  //   }
  // }, [user]);
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isAuth");
    localStorage.clear();
    window.location.reload();
    setIsAuth(false);
  };


  const TakeData =(value)=>{
    console.log(value)
    navigate(`/international/universities/${value}`)
  }
  return (
    <div className="sticky-header" style={{ height: "14vh"}} >
      <Box height={"10vh"} position={"relative"}>
        <div
          className="logo"
          style={{
            position: "absolute",
            // top: "5px",
            left: "0px",
            cursor: "pointer",
          }}
        >
          <img
            onClick={() => navigate("/")}
            src={logo}
            style={{ width: "120px", marginLeft: "3vw", marginTop: "-1.8vh" }}
          ></img>
        </div>
        <Box
          display={["none", "none", "none", "block", "block"]}
          marginLeft={"25vw"}
          width={"27vw"}
        >
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={SearchIcon} color="gray.400" />
            </InputLeftElement>
            <Input type="text" placeholder="Search..." />
          </InputGroup>
        </Box>
        <Box
          // border={"1px solid red"}
          left={["55vw", "55vw", "30vw", "55vw", "55vw"]}
          style={{
            position: "absolute",
            top: "1.5vh",

            background: "none",
          }}
        >
          <Flex
            background={"none"}
            fontSize={["0.6rem", "0.8rem", "0.9rem", "1rem"]}
            direction={["column", "column", "row", "row"]}
          >
            <Box
              display={["none", "none", "block", "block"]}
              as={FaWhatsapp}
              size={"30px"}
              color="#01B4EC"
            />
            <Text marginLeft={"5px"} mt={"4px"}>
              Call Us Now: +91 98739 85980
            </Text>

            <Box
              display={["none", "none", "block", "block"]}
              as={FiMail}
              size={"30px"}
              color="#01B4EC"
              marginLeft={"3vw"}
            />
            <Text
              display={["none", "none", "block", "block"]}
              marginLeft={"5px"}
              mt={"4px"}
            >
              info@admissionpossibility.com
            </Text>
          </Flex>
        </Box>
      </Box>

      <Box
        // border={"5px solid red"}
        marginTop={"-5vh"}
        // marginLeft={"20vw"}
        fontSize={"1rem"}
        color={"#000000"}
        fontFamily={"Poppins"}
      >
        <Stack
          height="10vh"
          spacing={8}
          align="center"
          justify={["flex-end", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <Box
            display={["block", "block", "none", "none"]}
            position={"relative"}
            width={"100%"}
            
          >
            <Menu>
              <MenuButton
                position={"absolute"}
                top={"-8vh"}
                right={"5vw"}
                as={IconButton}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                onClick={isOpen ? onClose : onOpen}
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
              />
              <MenuList width={"100%"}>
                <MenuItem
                  marginRight={"1.5vw"}
                  fontWeight={"600"}
                  as={Link}
                  style={{ textDecoration: "none", color: "#000000" }}
                  href="/"
                  _hover={{ color: "#01B4EC" }}
                >
                  Home
                </MenuItem>
                <MenuItem
                  marginRight={"1.5vw"}
                  fontWeight={"600"}
                  as={Link}
                  style={{ textDecoration: "none", color: "#000000" }}
                  href="/about"
                  _hover={{ color: "#01B4EC" }}
                >
                  About
                </MenuItem>

                <MenuItem
                  marginRight={"1.5vw"}
                  fontWeight={"600"}
                  as={Link}
                  style={{ textDecoration: "none", color: "#000000" }}
                  href="/gallery"
                  _hover={{ color: "#01B4EC" }}
                >
                  Gallery
                </MenuItem>
                <Menu >
          <MenuButton marginRight={'20.5vw'} fontWeight={'600'} as={Link} href="#" style={{textDecoration: 'none',color:'#000000'}}  _hover={{ color:'#01B4EC' }}>
            Courses{<ChevronDownIcon />}
          </MenuButton>
          <MenuList backgroundColor={'white'} paddingLeft={'14px'} width={'15vw'} height={'29vh'} zIndex={'5'} boxShadow= '5px 5px 10px rgba(0, 0, 0, 0.2)'>
          <MenuItem marginRight={'1.5vw'}  as={Link} href="/courses/MBBS" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              MBBS in India
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/courses/MD" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              MD in India
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/courses/MS" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              MS in India
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/courses/DM" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              DM in India
            </MenuItem>

            

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/courses/MCH" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              MCH in India
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/courses/DIP" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              DIP in India
            </MenuItem>
            
          </MenuList>
        </Menu>
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton background={"white"}>
                        <Box
                          fontWeight={"600"}
                          flex="1"
                          ml={"-1.5vw"}
                          textAlign="start"
                        >
                          Medical In India
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <VStack alignItems={"start"} spacing={0}>
                        <Box
                          textAlign={"start"}
                          fontSize={"1rem"}
                          fontWeight={"500"}
                          display={"flex"}
                          flexDirection={"column"}
                          maxHeight={"60vh"} // Set a max height for scrollability
                          overflowY={"auto"} // Enable vertical scrolling
                        >
                          <Link href="/state/universities/Karnataka">
                            Karnataka
                          </Link>
                          <Link href="/state/universities/Assam">Assam</Link>
                          <Link href="/state/universities/Rajasthan">
                            Rajasthan
                          </Link>
                          <Link href="/state/universities/Andhrapradesh">
                            Andhra pradesh
                          </Link>
                          <Link href="/state/universities/Jammukashmir">
                            Jammu & kashmir
                          </Link>
                          <Link href="/state/universities/DadarAndNagarhaveli">
                            Dadar And Nagarhaveli
                          </Link>
                          <Link href="/state/universities/Bihar">Bihar</Link>
                          <Link href="/state/universities/Telanagna">
                            Telanagna
                          </Link>
                          <Link href="/state/universities/Uttarakhand">
                            Uttarakhand
                          </Link>
                          <Link href="/state/universities/Kerala">Kerala</Link>
                          <Link href="/state/universities/Sikkim">Sikkim</Link>
                          <Link href="/state/universities/Chhattisgarh">
                            Chhattisgarh
                          </Link>
                          <Link href="/state/universities/Arunachalpradesh">
                            Arunachal pradesh
                          </Link>
                          <Link href="/state/universities/Meghalaya">
                            Meghalaya
                          </Link>
                          <Link href="/state/universities/Himachalpradesh">
                            Himachal pradesh
                          </Link>
                          <Link href="/state/universities/Gujarat">
                            Gujarat
                          </Link>
                          <Link href="/state/universities/Westbengal">
                            West bengal
                          </Link>
                          <Link href="/state/universities/Maharashtra">
                            Maharashtra
                          </Link>
                          <Link href="/state/universities/Delhi">Delhi</Link>
                          <Link href="/state/universities/Tamilnadu">
                            Tamil Nadu
                          </Link>
                          <Link href="/state/universities/Orissa">Orissa</Link>
                          <Link href="/state/universities/Goa">Goa</Link>
                          <Link href="/state/universities/Mizoram">
                            Mizoram
                          </Link>
                          <Link href="/state/universities/Punjab">Punjab</Link>
                          <Link href="/state/universities/Jharkhand">
                            Jharkhand
                          </Link>
                          <Link href="/state/universities/UttarPradesh">
                            Uttar Pradesh
                          </Link>
                        </Box>
                      </VStack>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
  <Menu>
          <MenuButton marginRight={'1.5vw'} fontWeight={'600'} as={Link} href="#" style={{textDecoration: 'none',color:'#000000'}}  _hover={{ color:'#01B4EC' }} marginLeft={'-55%'}>
            Abroad{<ChevronDownIcon />}
          </MenuButton>
          <MenuList backgroundColor={'white'} paddingLeft={'14px'} width={'15vw'} height={'28vh'} boxShadow= '5px 5px 10px rgba(0, 0, 0, 0.2)' zIndex={'5'}>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              MBBS in Bangladesh
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
            MBBS in Nepal
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
            MBBS in Kazakhstan
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
            MBBS in Kyrgystan
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
            MBBS in Russia
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'-8px'}}  _hover={{ color:'#01B4EC' }}>
              MBBS in Italy
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px' , width:'14rem', marginLeft:'-6%  '}}  _hover={{ color:'#01B4EC' }}>
              MBBS IN Germany
            </MenuItem>
          </MenuList>
        </Menu>
                <MenuItem
                  marginRight={"1.5vw"}
                  fontWeight={"600"}
                  as={Link}
                  href="/blogs"
                  style={{
                    textDecoration: "none",
                    color: "#000000",
                    marginBottom: "5px",
                  }}
                  _hover={{ color: "#01B4EC" }}
                >
                  Blog
                </MenuItem>

                <MenuItem
                  marginRight={"1.5vw"}
                  fontWeight={"600"}
                  as={Link}
                  href="/contact"
                  style={{
                    textDecoration: "none",
                    color: "#000000",
                    marginBottom: "5px",
                  }}
                  _hover={{ color: "#01B4EC" }}
                >
                  Contact
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box
            display={["none", "none", "block", "block"]}
            // border={"5px solid blue"}
            position={"absolute"}
            marginLeft={"-20vw"}
            spacing={8}
            mr={"7vw"}
          >
            <Flex align={"center"}>
              <Menu>
                <MenuButton
                  marginRight={"1.5vw"}
                  fontWeight={"500"}
                  as={Link}
                  style={{ textDecoration: "none", color: "#000000" }}
                  href="/"
                  _hover={{ color: "#01B4EC" }}
                >
                  Home
                </MenuButton>
                <MenuButton
                  marginRight={"1.5vw"}
                  fontWeight={"500"}
                  as={Link}
                  style={{ textDecoration: "none", color: "#000000" }}
                  href="/about"
                  _hover={{ color: "#01B4EC" }}
                >
                  About
                </MenuButton>

                <MenuButton
                  marginRight={"1.5vw"}
                  fontWeight={"500"}
                  as={Link}
                  style={{ textDecoration: "none", color: "#000000" }}
                  href="/gallery"
                  _hover={{ color: "#01B4EC" }}
                >
                  Gallery
                </MenuButton>
                <Menu>
                  <MenuButton
                    marginRight={"1.5vw"}
                    fontWeight={"500"}
                    as={Link}
                    href="#"
                    style={{ textDecoration: "none", color: "#000000" }}
                    _hover={{ color: "#01B4EC" }}
                  >
                    Courses{<ChevronDownIcon />}
                  </MenuButton>
                
                  <MenuList
                    backgroundColor={"white"}
                    paddingLeft={"14px"}
                    width={"15vw"}
                    // height={"41vh"}
                    zIndex={"5"}
                    boxShadow="5px 5px 10px rgba(0, 0, 0, 0.2)"
                  >
                    <MenuItem
                      marginRight={"1.5vw"}
                      as={Link}
                      href="/courses/MBBS"
                      style={{
                        textDecoration: "none",
                        color: "#000000",
                        marginBottom: "8px",
                      }}
                      _hover={{ color: "#01B4EC" }}
                    >
                      MBBS in India
                    </MenuItem>
                    <MenuItem
                      marginRight={"1.5vw"}
                      as={Link}
                      href="/courses/MD"
                      style={{
                        textDecoration: "none",
                        color: "#000000",
                        marginBottom: "8px",
                      }}
                      _hover={{ color: "#01B4EC" }}
                    >
                      MD/MS in India
                    </MenuItem>
                    {/* <MenuItem
                      marginRight={"1.5vw"}
                      as={Link}
                      href="/courses/MS"
                      style={{
                        textDecoration: "none",
                        color: "#000000",
                        marginBottom: "8px",
                      }}
                      _hover={{ color: "#01B4EC" }}
                    >
                      MS in India
                    </MenuItem> */}
                    {/* <MenuItem
                      marginRight={"1.5vw"}
                      as={Link}
                      href="/courses/DM"
                      style={{
                        textDecoration: "none",
                        color: "#000000",
                        marginBottom: "8px",
                      }}
                      _hover={{ color: "#01B4EC" }}
                    >
                      DM in India
                    </MenuItem>

                    <MenuItem
                      marginRight={"1.5vw"}
                      as={Link}
                      href="/courses/MCH"
                      style={{
                        textDecoration: "none",
                        color: "#000000",
                        marginBottom: "8px",
                      }}
                      _hover={{ color: "#01B4EC" }}
                    >
                      MCH in India
                    </MenuItem>

                    <MenuItem
                      marginRight={"1.5vw"}
                      as={Link}
                      href="/courses/DIP"
                      style={{
                        textDecoration: "none",
                        color: "#000000",
                        marginBottom: "8px",
                      }}
                      _hover={{ color: "#01B4EC" }}
                    >
                      DIP in India
                    </MenuItem> */}
                  </MenuList>
                </Menu>

                <Menu>
                  <MenuButton
                    marginRight={"1.5vw"}
                    fontWeight={"500"}
                    as={Link}
                    href="#"
                    style={{ textDecoration: "none", color: "#000000" }}
                    _hover={{ color: "#01B4EC" }}
                  >
                    Medical In India{<ChevronDownIcon />}
                  </MenuButton>
                  <MenuList
                    backgroundColor={"white"}
                    // paddingLeft={"14px"}
                    // px={2}
                    position={"absolute"}
                    width={"50vw"}
                    // height={"50vh"}
                    left={"-22vw"}
                    zIndex={"5"}
                    boxShadow="5px 5px 10px rgba(0, 0, 0, 0.2)"
                  >
                    <HStack>
                      <Box>
                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Karnataka"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Karnataka
                        </MenuItem>

                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Jammukashmir"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Jammu and kashmir
                        </MenuItem>
                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Uttarakhand"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Uttarakhand
                        </MenuItem>

                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Arunachalpradesh"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Arunachal Pradesh
                        </MenuItem>

                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Meghalaya"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Meghalaya
                        </MenuItem>

                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Himachalpradesh"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Himachal Pradesh
                        </MenuItem>
                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Gujarat"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Gujarat
                        </MenuItem>
                      </Box>

                      <Box>
                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Assam"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Assam
                        </MenuItem>
                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/DadarAndNagarhaveli"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Dadar And Nagar haveli
                        </MenuItem>
                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Kerala"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Kerala
                        </MenuItem>

                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Westbengal"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          West Bengal
                        </MenuItem>

                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Maharashtra"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Maharashtra
                        </MenuItem>

                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Madhyapradesh"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Madhya Pradesh
                        </MenuItem>
                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Delhi"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Delhi
                        </MenuItem>
                      </Box>

                      <Box>
                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Rajasthan"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Rajasthan
                        </MenuItem>
                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Bihar"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Bihar
                        </MenuItem>

                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Sikkim"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Sikkim
                        </MenuItem>
                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Tamilnadu"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Tamil Nadu
                        </MenuItem>

                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Orissa"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Orissa
                        </MenuItem>

                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Goa"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Goa
                        </MenuItem>
                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Arunachalpradesh"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Arunachal Pradesh
                        </MenuItem>
                      </Box>

                      <Box>
                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Andhrapradesh"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Andhra Pradesh
                        </MenuItem>
                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Telanagna"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Telangana
                        </MenuItem>
                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Chhattisgarh"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Chhattisgarh
                        </MenuItem>

                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Mizoram"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Mizoram
                        </MenuItem>

                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Punjab"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Punjab
                        </MenuItem>
                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/Jharkhand"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Jharkhand
                        </MenuItem>

                        <MenuItem
                          marginRight={"1.5vw"}
                          as={Link}
                          href="/state/universities/UttarPradesh"
                          style={{
                            textDecoration: "none",
                            color: "#000000",
                            marginBottom: "8px",
                          }}
                          _hover={{ color: "#01B4EC" }}
                        >
                          Uttar Pradesh
                        </MenuItem>
                      </Box>
                    </HStack>
                  </MenuList>

                  <Menu>
                    <MenuButton
                      marginRight={"1.5vw"}
                      fontWeight={"500"}
                      as={Link}
                      href="#"
                      style={{ textDecoration: "none", color: "#000000" }}
                      _hover={{ color: "#01B4EC" }}
                    >
                      Abroad{<ChevronDownIcon />}
                    </MenuButton>
                    <MenuList
                      backgroundColor={"white"}
                      paddingLeft={"14px"}
                      width={"15vw"}
                      // height={"45vh"}
                      boxShadow="5px 5px 10px rgba(0, 0, 0, 0.2)"
                      zIndex={"5"}
                    >
                      <MenuItem
                        marginRight={"1.5vw"}
                        as={Link}
                        onClick={()=> TakeData("Bangladesh")}
                        style={{
                          textDecoration: "none",
                          color: "#000000",
                          marginBottom: "8px",
                        }}
                        _hover={{ color: "#01B4EC" }}
                      >
                        MBBS in Bangladesh
                      </MenuItem>
                      <MenuItem
                        marginRight={"1.5vw"}
                        as={Link}
                        onClick={()=> TakeData("China")}
                        style={{
                          textDecoration: "none",
                          color: "#000000",
                          marginBottom: "8px",
                        }}
                        _hover={{ color: "#01B4EC" }}
                      >
                        MBBS in China
                      </MenuItem>
                      <MenuItem
                        marginRight={"1.5vw"}
                        as={Link}
                        onClick={()=> TakeData("Kyrgyzstan")}
                        style={{
                          textDecoration: "none",
                          color: "#000000",
                          marginBottom: "8px",
                        }}
                        _hover={{ color: "#01B4EC" }}
                      >
                        MBBS in Kyrgyzstan
                      </MenuItem>

                      <MenuItem
                        marginRight={"1.5vw"}
                        as={Link}
                        onClick={()=> TakeData("Russia")}
                        style={{
                          textDecoration: "none",
                          color: "#000000",
                          marginBottom: "8px",
                        }}
                        _hover={{ color: "#01B4EC" }}
                      >
                        MBBS in Russia
                      </MenuItem>

                      <MenuItem
                        marginRight={"1.5vw"}
                        as={Link}
                        onClick={()=> TakeData("Nepal")}
                        style={{
                          textDecoration: "none",
                          color: "#000000",
                          marginBottom: "8px",
                        }}
                        _hover={{ color: "#01B4EC" }}
                      >
                        MBBS in Nepal
                      </MenuItem>


                      <MenuItem
                        marginRight={"1.5vw"}
                        as={Link}
                        onClick={()=> TakeData("Kazakhstan")}
                        style={{
                          textDecoration: "none",
                          color: "#000000",
                          marginBottom: "8px",
                        }}
                        _hover={{ color: "#01B4EC" }}
                      >
                        MBBS in Kazakhstan
                      </MenuItem>


                      <MenuItem
                        marginRight={"1.5vw"}
                        as={Link}
                        onClick={()=> TakeData("Georgia")}
                        style={{
                          textDecoration: "none",
                          color: "#000000",
                          marginBottom: "8px",
                        }}
                        _hover={{ color: "#01B4EC" }}
                      >
                        MBBS in Georgia
                      </MenuItem>
                    </MenuList>
                  </Menu>

                  {/* <Menu>
                    <MenuButton
                      marginRight={"1.5vw"}
                      fontWeight={"600"}
                      as={Link}
                      href="#"
                      style={{ textDecoration: "none", color: "#000000" }}
                      _hover={{ color: "#01B4EC" }}
                    >
                      Videos{<ChevronDownIcon />}
                    </MenuButton>
                    <MenuList
                      backgroundColor={"white"}
                      paddingLeft={"14px"}
                      width={"15vw"}
                      height={"35vh"}
                      boxShadow="5px 5px 10px rgba(0, 0, 0, 0.2)"
                      zIndex={"5"}
                    >
                      <MenuItem
                        marginRight={"1.5vw"}
                        as={Link}
                        href="/program1"
                        style={{
                          textDecoration: "none",
                          color: "#000000",
                          marginBottom: "8px",
                        }}
                        _hover={{ color: "#01B4EC" }}
                      >
                        Medical College Review
                      </MenuItem>
                      <MenuItem
                        marginRight={"1.5vw"}
                        as={Link}
                        href="/program1"
                        style={{
                          textDecoration: "none",
                          color: "#000000",
                          marginBottom: "8px",
                        }}
                        _hover={{ color: "#01B4EC" }}
                      >
                        NEET PG Counselling
                      </MenuItem>
                      <MenuItem
                        marginRight={"1.5vw"}
                        as={Link}
                        href="/program1"
                        style={{
                          textDecoration: "none",
                          color: "#000000",
                          marginBottom: "8px",
                        }}
                        _hover={{ color: "#01B4EC" }}
                      >
                        NEET UG Counselling
                      </MenuItem>

                      <MenuItem
                        marginRight={"1.5vw"}
                        as={Link}
                        href="/program1"
                        style={{
                          textDecoration: "none",
                          color: "#000000",
                          marginBottom: "8px",
                        }}
                        _hover={{ color: "#01B4EC" }}
                      >
                        MBBS Abroad
                      </MenuItem>

                      <MenuItem
                        marginRight={"1.5vw"}
                        as={Link}
                        href="/program1"
                        style={{
                          textDecoration: "none",
                          color: "#000000",
                          marginBottom: "8px",
                        }}
                        _hover={{ color: "#01B4EC" }}
                      >
                        NEET UG 2023 Updates
                      </MenuItem>
                    </MenuList>
                  </Menu> */}
                </Menu>

                <MenuButton
                  marginRight={"1.5vw"}
                  fontWeight={"500"}
                  as={Link}
                  href="/blogs"
                  style={{
                    textDecoration: "none",
                    color: "#000000",
                    marginBottom: "5px",
                  }}
                  _hover={{ color: "#01B4EC" }}
                >
                  Blog
                </MenuButton>

                <MenuButton
                  marginRight={"1.5vw"}
                  fontWeight={"500"}
                  as={Link}
                  href="/contact"
                  style={{
                    textDecoration: "none",
                    color: "#000000",
                    marginBottom: "5px",
                  }}
                  _hover={{ color: "#01B4EC" }}
                >
                  Contact
                </MenuButton>
                {/* {show && (
                  <Avatar cursor={"pointer"} name={user} bg={"#01B4EC"} />
                )} */}
                {isAuth && user && (
                  <Flex alignItems="center" justifyContent="flex-end">
                    <Menu>
                      <MenuButton
                        as={Button}
                        rounded="full"
                        variant="link"
                        cursor="pointer"
                        minW={0}
                      >
                        <Avatar
                          cursor={"pointer"}
                          name={user.firstname[0]}
                          bg={"#01B4EC"}
                        />
                      </MenuButton>
                      <MenuList py={3} px={3} mt={4} textAlign={"center"}>
                        <MenuItem>
                          <Text>
                            Name{" "}
                            <span style={{ marginRight: "0.5rem" }}>:</span>
                          </Text>
                          <span style={{ marginRight: "0.5rem" }}></span>
                          {user.firstname}
                        </MenuItem>
                        <MenuItem>
                          <Text>
                            Email{" "}
                            <span style={{ marginRight: "0.5rem" }}>:</span>
                          </Text>
                          <span style={{ marginRight: "0.5rem" }}></span>
                          {user.mail_id}
                        </MenuItem>
                        <MenuItem>
                          <Text>
                            Phone{" "}
                            <span style={{ marginRight: "0.5rem" }}>:</span>
                          </Text>
                          <span style={{ marginRight: "0.5rem" }}></span>
                          {user.mobile_num}
                        </MenuItem>
                        <MenuItem>
                          <Text>
                            State{" "}
                            <span style={{ marginRight: "0.5rem" }}>:</span>
                          </Text>
                          <span style={{ marginRight: "0.5rem" }}></span>
                          {user.state}
                        </MenuItem>

                        <MenuItem>
                          <Text>
                            City{" "}
                            <span style={{ marginRight: "0.5rem" }}>:</span>
                          </Text>
                          <span style={{ marginRight: "0.5rem" }}></span>
                          {user.city}
                        </MenuItem>
                        <MenuItem>
                          <Text>
                            DOB <span style={{ marginRight: "0.5rem" }}>:</span>
                          </Text>
                          <span style={{ marginRight: "0.5rem" }}></span>
                          {user.dob}
                        </MenuItem>
                        <MenuItem>
                          <Text>
                            Exam{" "}
                            <span style={{ marginRight: "0.5rem" }}>:</span>
                          </Text>
                          <span style={{ marginRight: "0.5rem" }}></span>
                          {user.exam_attempted}
                        </MenuItem>

                        <Button
                          width={"70%"}
                          bg={"rgb(40,95,56)"}
                          color={"white"}
                          _hover={{
                            border: "1px solid rgb(40,95,56)",
                            bg: "white",
                            color: "rgb(40,95,56)",
                          }}
                          onClick={handleLogout}
                        >
                          Logout
                        </Button>
                      </MenuList>
                    </Menu>
                  </Flex>
                )}
              </Menu>
            </Flex>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default Header;
