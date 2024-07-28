import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBlogPage = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      // const res = await fetch(`https://api.admissionpossibility.com/api/getBlog/${id}`);
      const res = await fetch(`https://api.admissionpossibility.com/api/getBlog/${id}`);
      const data = await res.json();
      setData(data.blog);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const { title, description, date, image } = data;

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box >
        <Flex
          key={id}
          fontFamily={"poppins"}
          textAlign={"center"}
          flexDirection={"column"}
          gap={6}
          boxShadow="2xl"
          width={"80%"}
          margin={"40px auto"}
          borderRadius={"10px"}
          py={5}
          marginTop={"20vh"}
        >
          <Box width={"90%"} margin={"auto"}>
            <Heading
              color={"#01b4ec"}
              fontSize={{ base: "20px", sm: "22px", md: "24px", xl: "24px" }}
              fontWeight={500}
            >
              {title}
            </Heading>
          </Box>
          <Flex width={"90%"} margin={"auto"} gap={6}>
            <Box
              borderRadius={"5px"}
              border={"1px solid #01b4ec"}
              bg={"#01b4ec"}
              width={"30px"}
            >
              <Text fontWeight={900} color={"rgb(28,55,91)"}>
                {title && title.length > 0 ? title[0] : ""}
              </Text>
            </Box>
            <Text color={"#01b4ec"}>{date}</Text>
          </Flex>
          <Box width={"90%"} height={"50vh"} margin={"0px auto"}>
            <Image width={"100%"} height={"100%"} src={image} />
          </Box>
          <Box>
            <Text
              width="90%"
              textAlign="left"
              margin="auto"
              mb="20px"
              color="rgb(28,55,91)"
              fontSize="1rem"
              css={{
                "&::first-letter": {
                  color: "#01b4ec",
                  fontSize: "2rem",
                },
              }}
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            ></Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default SingleBlogPage;


