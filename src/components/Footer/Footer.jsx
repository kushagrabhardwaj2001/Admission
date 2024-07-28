import React from "react";

import { Box, GridItem, background, position } from "@chakra-ui/react";
import {
  HStack,
  Flex,
  Icon,
  Divider,
  Button,
  Heading,
  VStack,
  Text,
  Grid,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Image,
} from "@chakra-ui/react";
import { BiMailSend, BiPhone } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaGlobe } from "react-icons/fa";
import img1 from "../logo (1) 4.png";

import "./Footer.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenPrivacy,
    onOpen: onOpenPrivacy,
    onClose: onClosePrivacy,
  } = useDisclosure();

  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#0f95f9" }}>
      <Box
        className="fend"
        // width={"100vw"}
        height={{base:"200vh",md:"70vh",lg:"55vh"}}
        color={"white"}
      >
        <Box width={"80vw"} height={"35vh"}>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
              xl: "repeat(6, 1fr)",
            }}
            gap={6}
            width="80vw"
            marginTop={"7vh"}
          >
            <GridItem>
              <Box width={"100%"} marginRight={"5vw"} color={"white"}>
                <VStack alignItems={"start"}>
                  <Text style={{ fontSize: "1rem", fontWeight: "600" }}>
                    Top Courses
                  </Text>

                  <Text
                    fontSize={"1rem"}
                    _hover={{ color: "#F4903A" }}
                    cursor={"pointer"}
                    onClick={() => {
                      window.location.href = "/courses/MBBS";
                    }}
                    marginTop={"2vh"}
                    
                  >
                    MBBS in India
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    _hover={{ color: "#F4903A" }}
                    cursor={"pointer"}
                    onClick={() => {
                      window.location.href = "/courses/MD";
                    }}
                    // marginTop={"2vh"}
                    
                  >
                    MD in India
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    
                    _hover={{ color: "#F4903A" }}
                    cursor={"pointer"}
                    onClick={() => {
                      window.location.href = "/courses/MD";
                    }}
                  >
                    MS in India
                  </Text>
                  {/* <Text
                    fontSize={"1rem"}
                    
                    _hover={{ color: "#F4903A" }}
                    cursor={"pointer"}
                    onClick={() => {
                      window.location.href = "/courses/DM";
                    }}
                  >
                    DM in India
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    
                    _hover={{ color: "#F4903A" }}
                    cursor={"pointer"}
                    onClick={() => {
                      window.location.href = "/courses/MCH";
                    }}
                  >
                    MCH in India
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    
                    _hover={{ color: "#F4903A" }}
                    cursor={"pointer"}
                    onClick={() => {
                      window.location.href = "/courses/DIP";
                    }}
                  >
                    DIP in India
                  </Text> */}
                </VStack>
              </Box>
            </GridItem>

            <GridItem>
              <Box width={"100%"} marginRight={"5vw"} color={"white"}>

                <VStack alignItems={"start"}>
                  <Text style={{ fontSize: "1rem", fontWeight: "600" }} >
                    Top States
                  </Text>

                  <Text
                    fontSize={"1rem"}
                    
                    marginTop={"2vh"}
                    onClick={() => {
                      navigate("/state/Karnataka");
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    Karnataka
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    
                    onClick={() => {
                      navigate("/state/Kerala");
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    Kerala
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    
                    onClick={() => {
                      navigate("/state/Uttarpradesh");
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    Uttar Pradesh
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    
                    onClick={() => {
                      navigate("/state/Rajasthan");
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    Rajasthan
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    
                    onClick={() => {
                      navigate("/state/West Bengal");
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    West Bengal
                  </Text>
 
                </VStack>
              </Box>
            </GridItem>

            <GridItem>
              <Box width={"100%"} marginRight={"5vw"} marginTop={"7vh"} color={"white"}>
                <VStack alignItems={"start"}>
                {/* <Text
                    fontSize={"1rem"}
                    
                    onClick={() => {
                      navigate("/state/Pondicherry");
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    Pondicherry
                  </Text> */}
                  <Text
                    fontSize={"1rem"}
                    
                    onClick={() => {
                      navigate("/state/Maharashtra");
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    Maharashtra
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    
                    onClick={() => {
                      navigate("/state/Uttarakhand");
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    Uttarakhand
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    
                    onClick={() => {
                      navigate("/state/Bihar");
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    Bihar
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    
                    onClick={() => {
                      navigate("/state/Delhi");
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    Delhi
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    
                    onClick={() => {
                      navigate("/state/Gujarat");
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    Gujarat
                  </Text>
                </VStack>
              </Box>
            </GridItem>

            <GridItem>
              <Box width={"100%"} marginRight={"5vw"} color={"white"}>
                <VStack alignItems={"start"}>
                  <Text style={{ fontSize: "1rem", fontWeight: "600" }}>
                    Legal
                  </Text>

                  <Text
                    fontSize={"1rem"}
                    _hover={{ color: "#F4903A" }}
                    cursor={"pointer"}
                    onClick={() => {
                      window.location.href = "/about";
                    }}
                    marginTop={"2vh"}
                    
                  >
                    About Us
                  </Text>
                  <Text fontSize={"1rem"}
                    _hover={{ color: "#F4903A" }}
                    cursor={"pointer"}
                    onClick={() => {
                      window.location.href = "/blogs";
                    }} >
                    Blog
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    
                    _hover={{ color: "#F4903A" }}
                    cursor={"pointer"}
                    onClick={() => {
                      window.location.href = "/contact";
                    }}
                  >
                    Contact Us
                  </Text>
                  <>
                    <Text
                      onClick={onOpen}
                      fontSize={"1rem"}
                      _hover={{ color: "#F4903A" }}
                      cursor={"pointer"}
                    >
                      T&C
                    </Text>

                    <Modal
                      onClose={onClose}
                      style={{ width: "50vw" }}
                      isOpen={isOpen}
                      isCentered
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>
                          Admission Services Terms and Conditions
                        </ModalHeader>

                        <ModalCloseButton />
                        <ModalBody>
                          <Box
                            padding="4"
                            margin="6"
                            backgroundColor="gray.50"
                            borderRadius="md"
                            boxShadow="sm"
                          >
                            <Divider
                              marginTop="4"
                              marginBottom="4"
                              borderColor="gray.200"
                            />
                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              1. <b>Acceptance of Terms:</b> By accessing or
                              using the services provided by Admission
                              Possibility, you agree to be bound by these terms
                              and conditions. If you do not agree with any part
                              of these terms, you may not use our services.
                            </Text>

                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              2. <b>Services:</b> Admission Possibility provides
                              consultancy services to assist individuals in the
                              admission process to medical colleges. Our
                              services include but are not limited to providing
                              information on medical colleges, advising on
                              application processes, and offering guidance on
                              admission requirements.
                            </Text>

                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              3. <b>Eligibility:</b> Our services are available
                              to individuals who meet the eligibility criteria
                              for admission to medical colleges. Admission
                              Possibility reserves the right to refuse services
                              to anyone for any reason at any time.
                            </Text>

                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              4. <b>Fees and Payments:</b> Details regarding
                              consultancy fees and payment terms are outlined
                              separately in the fee agreement provided to the
                              user. Users are responsible for the timely payment
                              of all applicable fees.
                            </Text>

                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              5. <b>Information Accuracy:</b> While Admission
                              Possibility strives to provide accurate and
                              up-to-date information, we do not guarantee the
                              accuracy, completeness, or reliability of any
                              information on our website. Users are encouraged
                              to verify all details independently.
                            </Text>

                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              6. <b>Confidentiality:</b> Admission Possibility
                              will handle user information in accordance with
                              our privacy policy. Users are responsible for the
                              accuracy and security of the information they
                              provide.
                            </Text>

                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              7. <b>Limitation of Liability:</b> Admission
                              Possibility shall not be liable for any direct,
                              indirect, incidental, consequential, or punitive
                              damages arising out of the use or inability to use
                              our services.
                            </Text>

                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              8. <b>Termination:</b> Admission Possibility
                              reserves the right to terminate services for any
                              user who violates these terms and conditions or
                              engages in any conduct deemed inappropriate.
                            </Text>

                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              9. <b>Governing Law:</b> These terms and
                              conditions are governed by and construed in
                              accordance with the laws of [Your Jurisdiction].
                              Any disputes arising out of or in connection with
                              these terms will be subject to the exclusive
                              jurisdiction of the courts in [Your Jurisdiction].
                            </Text>

                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              10. <b>Changes to Terms:</b> Admission Possibility
                              reserves the right to update or modify these terms
                              and conditions at any time without prior notice.
                              Users are encouraged to review the terms
                              periodically for changes.
                            </Text>

                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              By using Admission Possibility's services, you
                              acknowledge that you have read, understood, and
                              agree to these terms and conditions.
                            </Text>
                          </Box>
                        </ModalBody>
                        <ModalFooter>
                          <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </>
                  <>
                    <Text
                      onClick={onOpenPrivacy}
                      fontSize={"1rem"}
                    _hover={{ color: "#F4903A" }}
                    cursor={"pointer"}
                    >
                      Privacy Policy{" "}
                    </Text>

                    <Modal
                      onClose={onClosePrivacy}
                      style={{ width: "50vw" }}
                      isOpen={isOpenPrivacy}
                      isCentered
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Privacy Policy</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <Box
                            padding="4"
                            margin="6"
                            backgroundColor="gray.50"
                            borderRadius="md"
                            boxShadow="sm"
                          >
                            <Divider
                              marginTop="4"
                              marginBottom="4"
                              borderColor="gray.200"
                            />

                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              1. <b>Information Collection:</b> We may collect
                              personal information from users when they interact
                              with our website, submit forms, or engage with our
                              consultancy services. This information may
                              include, but is not limited to, names, contact
                              details, academic records, and other relevant
                              details necessary for the admission process.
                            </Text>

                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              2. <b>Use of Information:</b> Admission
                              Possibility may use the collected information for
                              the following purposes:
                              <ul>
                                <li>
                                  Facilitating the admission process to medical
                                  colleges.
                                </li>
                                <li>
                                  Providing personalized consultancy services.
                                </li>
                                <li>
                                  Sending relevant updates and notifications.
                                </li>
                                <li>
                                  Improving our services based on user feedback.
                                </li>
                              </ul>
                            </Text>

                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              3. <b>Information Sharing:</b> We do not sell,
                              trade, or rent users' personal information.
                              However, we may share information with trusted
                              third parties who assist us in operating our
                              website or conducting our business, provided they
                              agree to keep the information confidential.
                            </Text>

                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              4. <b>Security Measures:</b> Admission Possibility
                              employs industry-standard security measures to
                              protect against unauthorized access, alteration,
                              disclosure, or destruction of personal
                              information. However, no method of transmission
                              over the internet or electronic storage is
                              entirely secure, and we cannot guarantee absolute
                              security.
                            </Text>

                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              5. <b>User Control:</b> Users have the right to
                              access, modify, or delete their personal
                              information. They can contact us at
                              [contact@admissionpossibility.com] to make such
                              requests.
                            </Text>

                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              6. <b>Cookies and Tracking:</b> Admission
                              Possibility may use cookies and similar tracking
                              technologies to enhance user experience. Users can
                              adjust their browser settings to refuse cookies or
                              receive notifications when cookies are being sent.
                              Please note that disabling cookies may affect the
                              functionality of some parts of our website.
                            </Text>

                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              7. <b>Children's Privacy:</b> Admission
                              Possibility does not knowingly collect personal
                              information from children under the age of 13. If
                              you believe that we have inadvertently collected
                              such information, please contact us, and we will
                              take steps to delete it.
                            </Text>

                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              8. <b>Changes to Privacy Policy:</b> Admission
                              Possibility reserves the right to update this
                              Privacy Policy. Users are encouraged to review
                              this page periodically for changes. By continuing
                              to use our services after any modifications, users
                              acknowledge and agree to the updated terms.
                            </Text>

                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              9. <b>Contact Information:</b> For any questions
                              or concerns regarding this Privacy Policy, users
                              can contact Admission Possibility at
                              [contact@admissionpossibility.com].
                            </Text>

                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              This Privacy Policy is effective as of January
                              2024 and was last updated on January 2024.
                            </Text>
                          </Box>
                        </ModalBody>
                        <ModalFooter>
                          <Button onClick={onClosePrivacy}>Close</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </>
                </VStack>
              </Box>
            </GridItem>

            <GridItem>
              <Box color={"white"}
                width={"100%"}
                marginRight={"5vw"}
                marginTop={"7vh"}
                textAlign={"start"}
              >
                <VStack>
                  <Box width={"100%"}>
                    <Flex marginTop={"1vh"}>
                      <FaMapMarkerAlt size={20} color="orange" />
                      <Text
                        fontWeight={"500"}
                        marginLeft={"0.8vw"}
                        width={"100%"}
                        marginl
                      >
                        {" "}
                        812, 8th Floor, Tower B, Assotech Business Cresterra,
                        Sec-135, Noida-201301
                      </Text>
                    </Flex>

                    <Flex marginTop={"2vh"}>
                      <BiPhone size={30} color="orange" />
                      <Text
                        marginLeft={"0.8vw"}
                        width={"100%"}
                        fontWeight={"500"}
                      >
                        Phone :
                        <span>
                          {" "}
                          +91 98739 85980
                          <br />{" "}
                        </span>
                      </Text>
                    </Flex>

                    <Flex marginTop={"2vh"}>
                      <BiMailSend size={30} color="orange" />
                      <Text
                        marginLeft={"0.8vw"}
                        width={"100%"}
                        fontWeight={"500"}
                        color={"white"}
                      >
                        Gmail: <span>info@admissionpossibility.com</span>
                      </Text>
                    </Flex>
                  </Box>
                </VStack>
              </Box>
            </GridItem>
          </Grid>

          <Text color={"orange"} textAlign={"right"} marginTop={"5vh"}>
            Developed By ARV Multimedia Pvt. Ltd.
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
