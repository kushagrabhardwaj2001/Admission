import React from 'react';
import { CircularProgress, Divider } from "@chakra-ui/react";

import { useNavigate } from 'react-router-dom';
 // Import navigate



import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { MdPlace } from 'react-icons/md';


function UniversityCard1({ university }) {

  const navigate=useNavigate()
 
  const handleclick=()=>{
    const cleanedUniversityName = university.name.trim();
    navigate(`/colleges/${cleanedUniversityName}`);
  }

  if (!university) {
    return <div>
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
  </div>;
  }

  return (
    <Box display={'flex'} flexDirection={'column'} onClick={handleclick} alignItems={'center'} justifyContent={'center'} width={'100vw'}  marginBottom={'4vh'}>
      <Box
      borderWidth="1px"
      border={'2px solid #01B4EC'}
      borderRadius="35px"
      overflow="hidden"
      p={4}
      boxShadow="md"
      bg="white"
      width="70vw"
      height={'30vh'}
      mx="auto"
      position={'relative'}
      fontFamily={'Lato'}
      cursor={'pointer'}
      boxShadow="rgba(0, 0, 0, 0.7) 5px 7px 8px"
      transition="transform 0.3s ease"
      _hover={{
        transform: "translate(15px, 15px)",
      }}
      
    >
      <HStack>
        <VStack ml={'3vw'} >
        <Image mt={'10'} src={university.logoUrl} alt={university.name} />

        </VStack>

        <VStack width={'45vw'} textAlign={'center'}>
        <Text color={'#01B4EC'} fontSize="2rem" fontWeight="bold" ml={'40'}>
          {university.name}
        </Text>
        <Flex align="center" mt={2} fontSize={'1.5rem'} color={'black'} fontWeight={'200'}
         opacity={'0.7'} >
        <Icon as={MdPlace} boxSize={30} />
        <Text>{university.location}</Text>
        <span>,</span>
        
          <Text>{university.state}</Text>
          <Box ml={2}></Box>
        </Flex>
        

        <Box mt={2} bg="gray.200" p={2} borderRadius="md">
        <Text mb={10} fontSize={'1.5rem'} textAlign={'start'}>
          <strong >Courses Offered:</strong> {university.courses}
        </Text>

        <Box background={'black'} width={'70vh'} color={'white'} textAlign={'start'}>
        <Text mt={10} fontSize={'1.5rem'}
        marginRight={'2vw'}>
          <strong >Fees Offered:</strong>
         {university.fees}

        </Text>

        </Box>
       
         
        </Box>

        </VStack>

        <VStack>
        <Button width={'10vw'} fontSize={'1.5rem'} borderRadius={'10px'} height={'4vh'}
          mt={4}
          border={'2px solid #01B4EC'}
          cursor={'pointer'}
          _hover={{backgroundColor:"#01B4EC"}}

          
        >
          Details
        </Button>

        </VStack>


        

      </HStack>
      <HStack>
      <Box mt={4} fontSize={'1.5rem'}>
        <Flex>
        <Text ml={'30'} mr={'30'}>About</Text>
        <Box
        w="2px"
        h="2rem"
        
        bg="black"
        mx="2"
      />
        <Text ml={'30'} mr={'30'}>Courses</Text> <Box
        w="2px"
        h="2rem"
        bg="black"
        mx="2"
      />
        <Text ml={'30'} mr={'30'}>Cut Off</Text>
        
        <Box
        w="2px"
        h="2rem"
        bg="black"
        mx="2"
      />
        <Text ml={'30'} mr={'30'}>Admission</Text>
        <Box
        w="2px"
        h="2rem"
        bg="black"
        mx="2"
      />
        <Text ml={'30'} mr={'30'}>Qna</Text>
        </Flex>
        
       
      </Box>

      </HStack>





     
      
      
    </Box>

    </Box>
    
  );
}

export default UniversityCard1;
