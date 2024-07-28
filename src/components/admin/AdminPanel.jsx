import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  
  Flex,
  Image,
  Text,
  Button,
  VStack,
  HStack,
} from '@chakra-ui/react';

function AdminPanel() {
  const [universityData, setUniversityData] = useState({
    name: '',
    courses: '',
    state: '',
    fees: '',
    logo: null,
    // Add more fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUniversityData({ ...universityData, [name]: value });
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setUniversityData({ ...universityData, logo: file });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', universityData.name);
    formData.append('courses', universityData.courses);
    formData.append('state', universityData.state);
    formData.append('location', universityData.location);

    formData.append('fees', universityData.fees);
    formData.append('logo', universityData.logo); 

    try {
      const response = await axios.post('https://api.admissionpossibility.com/api/universities', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('University added successfully');
        setUniversityData({
          name: '',
          courses: '',
          state: '',
          location:'',
          fees: '',
          logo: null,
        });
      } else {
        alert('Error adding university');
      }
    } catch (error) {
      console.error('Error adding university:', error);
      alert('Error adding university');
    }
  };

  return (
    <div>
      <Box textAlign={'center'}   fontSize={'1.5rem'} width={'70vw'} boxShadow={'5px 5px 10px rgba(0, 0, 0, 0.6)'}  margin={'auto'} marginBottom={'3vw'} marginTop={'5vh'} padding={'3vw'}>
      <h2 style={{width:'100%',backgroundColor:'#01B4EC'}} fontWeight={'100'} >Add University (Admin Panel)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{fontSize:'2.5rem',width:'100%',fontWeight:'600'}}>Name:</label>
          <input style={{fontSize:'1.5rem',width:'70%' ,  marginLeft:'2vw',     border:'none',outline:'none',borderBottom:'2px solid black'}} type="text" name="name" value={universityData.name} onChange={handleInputChange} />
        </div>
        <div>
          <label style={{fontSize:'2.5rem',width:'100%',fontWeight:'600'}}>Courses:</label>
          <input style={{fontSize:'1.5rem',width:'70%' ,  marginLeft:'2vw',     border:'none',outline:'none',borderBottom:'2px solid black'}} type="text" name="courses" value={universityData.courses} onChange={handleInputChange} />
        </div>
        <div>
          <label style={{fontSize:'2.5rem',width:'100%',fontWeight:'600'}}>State:</label>
          <input style={{fontSize:'1.5rem',width:'70%' ,  marginLeft:'2vw',     border:'none',outline:'none',borderBottom:'2px solid black'}} type="text" name="state" value={universityData.state} onChange={handleInputChange} />
        </div>
        <div>
          <label style={{fontSize:'2.5rem',width:'100%',fontWeight:'600'}}>Location:</label>
          <input style={{fontSize:'1.5rem',width:'70%' ,  marginLeft:'2vw',     border:'none',outline:'none',borderBottom:'2px solid black'}} type="text" name="location" value={universityData.location} onChange={handleInputChange} />
        </div>
        <div>
          <label style={{fontSize:'2.5rem',width:'100%',fontWeight:'600'}}>Fees:</label>
          <input style={{fontSize:'1.5rem',width:'70%' ,  marginLeft:'2vw',     border:'none',outline:'none',borderBottom:'2px solid black'}} type="text" name="fees" value={universityData.fees} onChange={handleInputChange} />
        </div>
        <div>
          <label style={{fontSize:'2.5rem',width:'100%',fontWeight:'600'}}>Logo:</label>
          <input style={{fontSize:'1.5rem',width:'70%' ,  marginLeft:'2vw',     border:'none',outline:'none',borderBottom:'2px solid black'}} type="file" accept=".jpg, .png" onChange={handleLogoChange} />
        </div>
        <div>
          <Button style={{fontSize:'2.5rem',marginTop:'4vh',cursor:'pointer',border:"3px solid #01B4EC",width:'100%' ,borderRadius:'20px'}}  _hover={{backgroundColor:'#01B4EC'}} marginBottom={'3vh'} type="submit">Add University</Button>
        </div>
      </form>

      </Box>
      
    </div>
  );
}

export default AdminPanel;
