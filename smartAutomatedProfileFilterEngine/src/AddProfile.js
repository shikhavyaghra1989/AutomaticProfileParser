import React, { useState } from 'react';

import AddEducation from './components/AddEducation.js'
import AddprofessionalExperiences from './components/AddProfessionalExperience.js'
import AddPersonalInformation from './components/AddPersonalInformation.js'
import AddCertification from './components/AddCertification.js'
import AddSkills from './components/AddSkills.js'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import {Col, Row, Button, Form} from "react-bootstrap";
import './css/App.css';
import validate from './components/validateInput.js'
import parserimg from './svgs/parser-svg.svg'

function AddProfile(props) {
    const [profile, setProfile] =
        React.useState({name: '',
                        emailId: '',
                        mobileNumber: '',
                        certifications: [{}],
                        professionalExperiences: [{}],
                        educationalQualifications: [{}],
                        applicantSkills: [{
                                            rate: "6",
                                         }]});
    const [errors, setErrors] = useState({professionalExperiences: [],
                                          educationalQualifications: [],
                                          certifications: [],
                                          applicantSkills: []
                                          })
    const [isValid, setIsValid] = useState(false)


    function handleChange(newValue) {
        setProfile(newValue);
        console.log(profile)
        setErrors(validate(profile).errors)
        setIsValid(validate(profile).isValid)
    }

    function handleSubmit(e){
        e.preventDefault();
        props.onSubmit(profile)
    }

    return (
      <Form onSubmit = {handleSubmit}>
          <Container>
                  <Navbar bg="secondary" variant="light">
                      <Container>
                          <Navbar.Brand href="#home">
                            <Row>
                                <Col>
                                    <img
                                      alt=""
                                      src={parserimg}
                                      width="100"
                                      height="100"
                                      className="d-inline-block align-top"
                                  />
                                </Col>
                                <Col >
                                    <div className ="header-css">
                                      <h3 className="heading-size">Smart Automated Profile Filter Engine</h3>
                                     </div>
                                </Col>

                            </Row>
                          </Navbar.Brand>
                      </Container>
                  </Navbar>
                <AddPersonalInformation profile ={profile}  onChange={handleChange} errors = {errors}/>
                <AddprofessionalExperiences profile ={profile}  onChange={handleChange} errors = {errors}/>
                <AddSkills profile ={profile}  onChange={handleChange} errors = {errors}/>
                <AddEducation profile ={profile}  onChange={handleChange} errors = {errors}/>
                <AddCertification profile ={profile}  onChange={handleChange} errors = {errors}/>
                <Row className= "bottom-padding">
                    <Button disabled = {!isValid} variant="secondary" size="lg" type="submit" >Submit Profile</Button>
                </Row>
                <Row className="top-padding">
                </Row>
          </Container>
      </Form>
    );
}

export default AddProfile;
