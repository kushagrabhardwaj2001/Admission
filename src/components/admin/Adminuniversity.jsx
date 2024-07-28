import React, { useState } from "react";
import axios from "axios";
import {
  HStack,
  Flex,
  Icon,
  Divider,
  Button,
  Heading,
  VStack,
} from "@chakra-ui/react";

function Adminuniversity() {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [formData, setFormData] = useState({
    universityDescription: "",
    collegename: "",
    established: "",
    collegetype: "",
    location: "",
    approval: "",
    address: "",
    state: "",
    city: "",
    affiliatedby: "",
    collegecategory: "",
    courses: [
      // {
      //   course: "",
      //   branch: "",
      //   totalSeat: "",
      //   courseDuration: "",
      //   tuitionFee: "",
      // }
    ],
    // cutoffdata: [],
    website: "",
    mail: "",
  });

  const handleImage1Change = (event) => {
    const file = event.target.files[0];
    setImage1(file);
  };

  const handleImage2Change = (event) => {
    const file = event.target.files[0];
    setImage2(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddCourse = () => {
    const { course, branch, totalSeat, courseDuration, tuitionFee } = formData;
    if (course && branch && totalSeat && courseDuration && tuitionFee) {
      setFormData({
        ...formData,
        courses: [
          ...formData.courses,
          { course, branch, totalSeat, courseDuration, tuitionFee },
        ],
      });
    }
  };

  // const handleAddCutoff = () => {
  //   const {
  //     seattype,
  //     counsellingtype,
  //     category,
  //     domicilecondition,
  //     round1rank2022,
  //     round2rank2022,
  //   } = formData;
  //   if (
  //     seattype &&
  //     counsellingtype &&
  //     category &&
  //     domicilecondition &&
  //     round1rank2022 &&
  //     round2rank2022
  //   ) {
  //     setFormData({
  //       ...formData,
  //       cutoffdata: [
  //         ...formData.cutoffdata,
  //         {
  //           seattype,
  //           counsellingtype,
  //           category,
  //           domicilecondition,
  //           round1rank2022,
  //           round2rank2022,
  //         },
  //       ],
  //     });
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDatas = new FormData();
    formDatas.append("universityDescription", formData.universityDescription);
    formDatas.append("collegename", formData.collegename);
    formDatas.append("established", formData.established);
    formDatas.append("collegetype", formData.collegetype);
    formDatas.append("location", formData.location);
    formDatas.append("approval", formData.approval);
    formDatas.append("address", formData.address);
    formDatas.append("state", formData.state);
    formDatas.append("city", formData.city);
    formDatas.append("affiliatedby", formData.affiliatedby);
    formDatas.append("collegecategory", formData.collegecategory);
    formDatas.append("website", formData.website);
    formDatas.append("mail", formData.mail);
    // formDatas.append("cutoffdata", JSON.stringify(formData.cutoffdata));
    formDatas.append("courses", JSON.stringify(formData.courses));
    if (image1) formDatas.append("image1", image1);
    if (image2) formDatas.append("image2", image2);

    try {
      const response = await axios.post(
        "https://api.admissionpossibility.com/api/uploadData",
        // "http://localhost:5000/api/uploadData",
        formDatas,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setFormData({
          universityDescription: "",
          collegename: "",
          established: "",
          collegetype: "",
          location: "",
          approval: "",
          address: "",
          state: "",
          city: "",
          affiliatedby: "",
          collegecategory: "",
          courses: [],
          cutoffdata: [],
          website: "",
          mail: "",
        });
        setImage1(null);
        setImage2(null);
        alert("Data added successfully");
      } else {
        console.error("Error adding data");
      }
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <div style={{ marginTop: "20vh" }}>
      <h1>Admin University</h1>
      <form onSubmit={handleSubmit}>
        <h2>University Description</h2>
        <textarea
          style={{
            width: "85vw",
            height: "80vh",
            fontSize: "1.2rem",
            border: "1px solid #ccc",
            padding: "10px",
            boxSizing: "border-box",
            verticalAlign: "top",
            overflowY: "auto",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
          }}
          name="universityDescription"
          placeholder="University Description"
          value={formData.universityDescription}
          onChange={handleChange}
        />

        <h2>College Name</h2>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: "flex", justifyContent: "space-between", width: "65vw", marginBottom: "10px" }}>
            <input
              style={{ flex: 1, height: "6vh", fontSize: "1.2rem", marginRight: "10px" }}
              type="text"
              name="collegename"
              placeholder="College Name"
              value={formData.collegename}
              onChange={handleChange}
            />
            <input
              style={{ flex: 1, height: "6vh", fontSize: "1.2rem" }}
              type="text"
              name="established"
              placeholder="Established"
              value={formData.established}
              onChange={handleChange}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", width: "65vw", marginBottom: "10px" }}>
            <input
              style={{ flex: 1, height: "6vh", fontSize: "1.2rem", marginRight: "10px" }}
              type="text"
              name="collegetype"
              placeholder="College Type"
              value={formData.collegetype}
              onChange={handleChange}
            />
            <input
              style={{ flex: 1, height: "6vh", fontSize: "1.2rem" }}
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", width: "65vw", marginBottom: "10px" }}>
            <input
              style={{ flex: 1, height: "6vh", fontSize: "1.2rem", marginRight: "10px" }}
              type="text"
              name="approval"
              placeholder="Approval"
              value={formData.approval}
              onChange={handleChange}
            />
            <input
              style={{ flex: 1, height: "6vh", fontSize: "1.2rem" }}
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", width: "65vw", marginBottom: "10px" }}>
            <input
              style={{ flex: 1, height: "6vh", fontSize: "1.2rem", marginRight: "10px" }}
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
            />
            <input
              style={{ flex: 1, height: "6vh", fontSize: "1.2rem" }}
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", width: "65vw", marginBottom: "10px" }}>
            <input
              style={{ flex: 1, height: "6vh", fontSize: "1.2rem", marginRight: "10px" }}
              type="text"
              name="affiliatedby"
              placeholder="Affiliated By"
              value={formData.affiliatedby}
              onChange={handleChange}
            />
            <input
              style={{ flex: 1, height: "6vh", fontSize: "1.2rem" }}
              type="text"
              name="collegecategory"
              placeholder="College Category"
              value={formData.collegecategory}
              onChange={handleChange}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", width: "65vw", marginBottom: "10px" }}>
            <input
              style={{ flex: 1, height: "6vh", fontSize: "1.2rem", marginRight: "10px" }}
              type="text"
              name="website"
              placeholder="Website"
              value={formData.website}
              onChange={handleChange}
            />
            <input
              style={{ flex: 1, height: "6vh", fontSize: "1.2rem" }}
              type="text"
              name="mail"
              placeholder="Mail"
              value={formData.mail}
              onChange={handleChange}
            />
          </div>
        </div>

 
        <h2>Images</h2>
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            <h2>Upload Banner Image</h2>
          <input
            type="file"
            name="image1"
            accept="image/*"
            onChange={handleImage1Change}
            style={{
              marginBottom: "10px",
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          />
          <h2>Upload logo Image</h2>
          <input
          
            type="file"
            name="image2"
            accept="image/*"
            onChange={handleImage2Change}
            style={{
              marginBottom: "10px",
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          />
        </div>

        <h2>Courses</h2>
        <div>
          <input
            type="text"
            name="course"
            placeholder="Course"
            value={formData.course || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            name="branch"
            placeholder="Branch"
            value={formData.branch || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            name="totalSeat"
            placeholder="Total Seat"
            value={formData.totalSeat || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            name="courseDuration"
            placeholder="Course Duration"
            value={formData.courseDuration || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            name="tuitionFee"
            placeholder="Tuition Fee"
            value={formData.tuitionFee || ""}
            onChange={handleChange}
          />
          <button type="button" onClick={handleAddCourse}>
            Add Course
          </button>
        </div>

        {/* <h2>Cutoff Data</h2>
        <div>
          <input
            type="text"
            name="seattype"
            placeholder="Seat Type"
            value={formData.seattype || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            name="counsellingtype"
            placeholder="Counselling Type"
            value={formData.counsellingtype || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            name="domicilecondition"
            placeholder="Domicile Condition"
            value={formData.domicilecondition || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            name="round1rank2022"
            placeholder="Round 1 Rank 2022"
            value={formData.round1rank2022 || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            name="round2rank2022"
            placeholder="Round 2 Rank 2022"
            value={formData.round2rank2022 || ""}
            onChange={handleChange}
          />
          <button type="button" onClick={handleAddCutoff}>
            Add Cutoff Data
          </button>
        </div> */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Adminuniversity;
