import React from 'react'
import { Box, background, position} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { HStack, Flex, Icon,Divider,Button,Heading,VStack,Link,Menu,MenuButton,useDisclosure,MenuList,MenuItem ,Stack,IconButton} from '@chakra-ui/react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon,ChevronDownIcon } from '@chakra-ui/icons';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import './header.css';
import logo from './logo (1) 4.png';
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="sticky-header">
        <Box height={'10vh'} width={'100vw'}  position={'relative'}>

          <div className='logo' style={{position:'absolute',top:'0px',left:'0px'}}>
            <img src={logo} style={{width:'150px' ,marginLeft:"3vw",marginTop:"-4vh"}}  >

            </img>



          </div>
          <div className="search-bar">
      <input type="text" placeholder="Search" className="search-input" />
      <button className="search-button">
        <FaSearch className="search-icon" />
      </button>
    </div>
        <Box style={{
            
            position:'absolute',
            top:'1.5vh',
            left:'55vw',
            background:'none'
        }}>
            <Flex background={'none'} fontSize={'1rem'} >
            <Box as={FaWhatsapp} size="32px" color="#01B4EC" />
            <Text marginLeft={'15px'} >
            Call Us Now: +91 98739 85980
            </Text>


            <Box as={FiMail} size="32px" color="#01B4EC"  marginLeft={'3vw'} />
            <Text marginLeft={'15px'} >
            Call Us Now: +91 98739 85980
            </Text>
            </Flex>

            




    </Box>



        </Box>

        <Box marginLeft={'25vw'} fontSize={'1rem'} color={'#000000'} fontFamily={'Poppins'}>
        <Stack
        height="10vh"
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <Box display={["block", "block", "none", "none"]} position={'relative'} width={'100%'}>
          <Menu >
            <MenuButton
              as={IconButton}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={isOpen ? onClose : onOpen}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            />
            <Menu>
        <MenuButton marginRight={'1.5vw'} fontWeight={'600'} as={Link} style={{textDecoration: 'none',color:'#000000'}} href="/" _hover={{ color: '#01B4EC' }}>
          Home
        </MenuButton>
        <MenuButton marginRight={'1.5vw'} fontWeight={'600'} as={Link} style={{textDecoration: 'none',color:'#000000'}} href="/about" _hover={{ color:'#01B4EC' }}>
          About
        </MenuButton>

        <MenuButton marginRight={'1.5vw'} fontWeight={'600'} as={Link} style={{textDecoration: 'none',color:'#000000'}} href="/about" _hover={{ color:'#01B4EC' }}>
          Gallery
        </MenuButton>
        <Menu >
          <MenuButton marginRight={'1.5vw'} fontWeight={'600'} as={Link} href="#" style={{textDecoration: 'none',color:'#000000'}}  _hover={{ color:'#01B4EC' }}>
            Courses{<ChevronDownIcon />}
          </MenuButton>
          <MenuList backgroundColor={'white'} paddingLeft={'14px'} width={'15vw'} height={'41vh'} zIndex={'5'} boxShadow= '5px 5px 10px rgba(0, 0, 0, 0.2)'>
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

        <Menu>
          <MenuButton marginRight={'1.5vw'} fontWeight={'600'} as={Link} href="#" style={{textDecoration: 'none',color:'#000000'}}  _hover={{ color:'#01B4EC' }}>
            Medical In India{<ChevronDownIcon />}
          </MenuButton>
          <MenuList backgroundColor={'white'} paddingLeft={'14px'} position={'absolute'} width={'50vw'} height={'50vh'} zIndex={'5'}  boxShadow= '5px 5px 10px rgba(0, 0, 0, 0.2)'>

            <HStack>
              <Box>
              <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Karnataka" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Karnataka
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Jammukashmir" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
            Jammu and kashmir
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Uttarakhand" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
            Uttarakhand
            </MenuItem>
            
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Arunachalpradesh" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Arunachal Pradesh
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Meghalaya" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Meghalaya
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Himachalpradesh" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Himachal Pradesh
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Gujarat" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Gujarat
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Rajasthan" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Rajasthan
            </MenuItem>

              </Box>


              <Box>
              <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Bihar" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Bihar
            </MenuItem>
              <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Assam" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Assam
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Dadar And Nagar haveli
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Kerala" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Kerala
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              West Bengal
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Maharashtra" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Maharashtra
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Madhya Pradesh
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Delhi" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Delhi
            </MenuItem>

              </Box>



              <Box>
              
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Sikkim" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Sikkim
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Tamil Nadu
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Orissa
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Bihar
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Goa" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Goa
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Arunachal Pradesh
            </MenuItem>

              </Box>


              <Box>
              <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Andra Pradesh
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Telangana
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Chhatisgarh
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Chandigarh" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Chandigarh
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Mizoram
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Punjab
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Jharkhand
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/UttarPradesh" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
            Uttar Pradesh
            </MenuItem>

              </Box>

             
             
            
              



            </HStack>
            
          </MenuList>



          <Menu>
          <MenuButton marginRight={'1.5vw'} fontWeight={'600'} as={Link} href="#" style={{textDecoration: 'none',color:'#000000'}}  _hover={{ color:'#01B4EC' }}>
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

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              MBBS in Italy
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              MBBS IN Germany
            </MenuItem>
          </MenuList>
        </Menu>



        <Menu>
          <MenuButton marginRight={'1.5vw'} fontWeight={'600'} as={Link} href="#" style={{textDecoration: 'none',color:'#000000'}}  _hover={{ color:'#01B4EC' }}>
            Videos{<ChevronDownIcon />}
          </MenuButton>
          <MenuList backgroundColor={'white'} paddingLeft={'14px'} width={'15vw'} height={'20vh'} boxShadow= '5px 5px 10px rgba(0, 0, 0, 0.2)' zIndex={'5'}>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Medical College Review
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
            NEET PG Counselling
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
            NEET UG Counselling
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
            MBBS Abroad
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
            NEET UG 2023 Updates
            </MenuItem>

            
            
          </MenuList>
        </Menu>
        </Menu>

        <MenuButton marginRight={'1.5vw'} fontWeight={'600'} as={Link} href="/contact" style={{textDecoration: 'none',color:'#000000',marginBottom:'5px'}}  _hover={{ color:'#01B4EC' }}>
          Blog
        </MenuButton>

        <MenuButton marginRight={'1.5vw'} fontWeight={'600'} as={Link} href="/contact" style={{textDecoration: 'none',color:'#000000',marginBottom:'5px'}}  _hover={{ color:'#01B4EC' }}>
          Contact
        </MenuButton>
      </Menu>
          </Menu>
        </Box>
        <Box display={["none", "none", "block", "block"]}  spacing={8} mr={'7vw'} >

         
        <Menu>
        <MenuButton marginRight={'1.5vw'} fontWeight={'600'} as={Link} style={{textDecoration: 'none',color:'#000000'}} href="/" _hover={{ color: '#01B4EC' }}>
          Home
        </MenuButton>
        <MenuButton marginRight={'1.5vw'} fontWeight={'600'} as={Link} style={{textDecoration: 'none',color:'#000000'}} href="/about" _hover={{ color:'#01B4EC' }}>
          About
        </MenuButton>

        <MenuButton marginRight={'1.5vw'} fontWeight={'600'} as={Link} style={{textDecoration: 'none',color:'#000000'}} href="/about" _hover={{ color:'#01B4EC' }}>
          Gallery
        </MenuButton>
        <Menu >
          <MenuButton marginRight={'1.5vw'} fontWeight={'600'} as={Link} href="#" style={{textDecoration: 'none',color:'#000000'}}  _hover={{ color:'#01B4EC' }}>
            Courses{<ChevronDownIcon />}
          </MenuButton>
          <MenuList backgroundColor={'white'} paddingLeft={'14px'} width={'15vw'} height={'41vh'} zIndex={'5'} boxShadow= '5px 5px 10px rgba(0, 0, 0, 0.2)'>
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

        <Menu>
          <MenuButton marginRight={'1.5vw'} fontWeight={'600'} as={Link} href="#" style={{textDecoration: 'none',color:'#000000'}}  _hover={{ color:'#01B4EC' }}>
            Medical In India{<ChevronDownIcon />}
          </MenuButton>
          <MenuList backgroundColor={'white'} paddingLeft={'14px'} position={'absolute'} width={'50vw'} height={'50vh'} zIndex={'5'}  boxShadow= '5px 5px 10px rgba(0, 0, 0, 0.2)'>

            <HStack>
              <Box>
              <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Karnataka" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Karnataka
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Jammukashmir" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
            Jammu and kashmir
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Uttarakhand" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
            Uttarakhand
            </MenuItem>
            
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Arunachalpradesh" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Arunachal Pradesh
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Meghalaya" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Meghalaya
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Himachalpradesh" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Himachal Pradesh
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Gujarat" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Gujarat
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Rajasthan" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Rajasthan
            </MenuItem>

              </Box>


              <Box>
              <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Bihar" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Bihar
            </MenuItem>
              <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Assam" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Assam
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Dadar And Nagar haveli
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Kerala" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Kerala
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              West Bengal
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Maharashtra" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Maharashtra
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Madhya Pradesh
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Delhi" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Delhi
            </MenuItem>

              </Box>



              <Box>
              
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Sikkim" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Sikkim
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Tamil Nadu
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Orissa
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Bihar
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Goa" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Goa
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Arunachal Pradesh
            </MenuItem>

              </Box>


              <Box>
              <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Andra Pradesh
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Telangana
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Chhatisgarh
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/Chandigarh" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Chandigarh
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Mizoram
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Punjab
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Jharkhand
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/state/UttarPradesh" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
            Uttar Pradesh
            </MenuItem>

              </Box>

             
             
            
              



            </HStack>
            
          </MenuList>



          <Menu>
          <MenuButton marginRight={'1.5vw'} fontWeight={'600'} as={Link} href="#" style={{textDecoration: 'none',color:'#000000'}}  _hover={{ color:'#01B4EC' }}>
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

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              MBBS in Italy
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              MBBS IN Germany
            </MenuItem>
          </MenuList>
        </Menu>



        <Menu>
          <MenuButton marginRight={'1.5vw'} fontWeight={'600'} as={Link} href="#" style={{textDecoration: 'none',color:'#000000'}}  _hover={{ color:'#01B4EC' }}>
            Videos{<ChevronDownIcon />}
          </MenuButton>
          <MenuList backgroundColor={'white'} paddingLeft={'14px'} width={'15vw'} height={'20vh'} boxShadow= '5px 5px 10px rgba(0, 0, 0, 0.2)' zIndex={'5'}>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
              Medical College Review
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
            NEET PG Counselling
            </MenuItem>
            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
            NEET UG Counselling
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
            MBBS Abroad
            </MenuItem>

            <MenuItem marginRight={'1.5vw'}  as={Link} href="/program1" style={{textDecoration: 'none',color:'#000000',marginBottom:'8px'}}  _hover={{ color:'#01B4EC' }}>
            NEET UG 2023 Updates
            </MenuItem>

            
            
          </MenuList>
        </Menu>
        </Menu>

        <MenuButton marginRight={'1.5vw'} fontWeight={'600'} as={Link} href="/contact" style={{textDecoration: 'none',color:'#000000',marginBottom:'5px'}}  _hover={{ color:'#01B4EC' }}>
          Blog
        </MenuButton>

        <MenuButton marginRight={'1.5vw'} fontWeight={'600'} as={Link} href="/contact" style={{textDecoration: 'none',color:'#000000',marginBottom:'5px'}}  _hover={{ color:'#01B4EC' }}>
          Contact
        </MenuButton>
      </Menu>

         

          
        </Box>
      </Stack>


        </Box>
        


        
    </div>
  )
}

export default Header