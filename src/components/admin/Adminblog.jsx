import React from "react";
import { Box, Input, Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

const Adminblog = () => {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevdata) => ({ ...prevdata, [name]: value }));
  };

  const handleImage1Change = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const formDataToSend = {
    ...formData,
    image,
  };

  const handlesubmit = async () => {
    try {
      const response = axios.post(
        // "https://api.admissionpossibility.com/api/uploadBlog",
        "https://api.admissionpossibility.com/api/uploadBlog",
        formDataToSend
      );
      if ((await response).status === 200) {
        alert("data added successfully");
        setFormData({
          title: "",
          description: "",
          date: "",
        })
      } else {
        alert("error adding data");
      }
    } catch (error) {
      console.error("error adding data", error);
    }
  };

  console.log(formDataToSend);
  return (
    <div>
      <Box mt={"40vh"} border={"1px solid red"}  height={"50vh"} display={"flex"} flexDirection={"column"}>
        <Box >
          <form>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter title"
            />

            <Textarea
              w={"100%"}
              // h={"80vh"}
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter description"
            />

            <Input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              placeholder="enter Date"
            />
            <Input type="file" name="image" onChange={handleImage1Change} />

            <Button type="button" onClick={handlesubmit}>
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default Adminblog;
