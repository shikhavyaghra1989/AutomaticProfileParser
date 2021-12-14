import React from 'react';
import {Col, Row, Button, Container} from "react-bootstrap";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import  skills  from '../components/skills.js';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'

function FilterProfile(props) {
    const {skillsOptions} = skills()
    const animatedComponents = makeAnimated();
    let educationOptions = [
                         { value: "Bachelors" , label:"Bachelors" },
                         { value: "Masters", label: "Masters" },
                         { value: "PHD", label: "PHD" }
                        ]

    const handleSelectChange = (value) =>  {
                  const primarySkills = value.map(x => x.label);;
                  props.onChange({
                       ...props.adminFilter,
                       primarySkills
                  });
            };


    const handleSelectChangeSecondary = (value) =>  {
                      const secondarySkills = value.map(x => x.label);;
                      props.onChange({
                           ...props.adminFilter,
                           secondarySkills
                      });
                };

    const handleSelectChangeEducation = (value) =>  {
                          const degree = value.label;
                          const education = {
                            ...props.adminFilter.education,
                            degree: degree
                          }
                          props.onChange({
                               ...props.adminFilter,
                               education
                          });
                    };

    const handleGpaChange = () => e =>  {
          const { name, value } = e.target;
          const education = {
            ...props.adminFilter.education,
            gpa: value
          }
          props.onChange({
               ...props.adminFilter,
               education
          });
    };

    const handleChange = () => e => {
        const { name, value } = e.target;

        props.onChange({
             ...props.adminFilter,
             [name]: value
        });
    };

    function handleSubmit(e){
        e.preventDefault();
        props.onSubmit()
    }


    return (
        <Container className="bottom-padding">
            <Row style={{backgroundColor: "#808080"}}>
                <h4>Set Criteria to filter profiles </h4>
            </Row>
            <Row className="bottom-padding">
                <Col xs={5} md={2}>
                    <label> Mandatory Skills</label>
                </Col>
                <Col xs={5} md={11}>
                    <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          isMulti
                          placeholder = "Select all the skills to filter profiles"
                          onChange={(value) => handleSelectChange(value)}
                          options={skillsOptions}
                        />
                </Col>
            </Row>
            <Row className="bottom-padding">
                <Col xs={5} md={2}>
                    <label> Secondary skills</label>
                </Col>
                <Col xs={5} md={11}>
                    <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          isMulti
                          placeholder = "Select all the skills to filter profiles"
                          onChange={(value) => handleSelectChangeSecondary(value)}
                          options={skillsOptions}
                        />
                </Col>
            </Row>
            <Row className="bottom-padding">
                <Col xs={5} md={2}>
                    <label> Minimum Educational Qualifications</label>
                </Col>
                <Col xs={5} md={4}>
                    <Select
                          closeMenuOnSelect={true}
                          components={animatedComponents}
                          placeholder = "Select all the skills to filter profiles"
                          onChange={(value) => handleSelectChangeEducation(value)}
                          options={educationOptions}
                        />
                </Col>
                <Col xs={5} md={5}>
                    <InputGroup className="bottom-padding-less" >
                        <InputGroup.Text id="gpa">Minimum Required GPA in highest Degree</InputGroup.Text>
                        <FormControl
                            id="gpa"
                            name = "gpa"
                            placeholder="GPA"
                            aria-label="GPA"
                            value={props.adminFilter.education.gpa}
                            onChange={handleGpaChange()}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row className="bottom-padding">
                <Col xs={5} md={11}>
                    <InputGroup className="bottom-padding-less" >
                        <InputGroup.Text id="professionalExperience">Minimum Professional Experience</InputGroup.Text>
                        <FormControl
                            id="professionalExperience"
                            name = "professionalExperience"
                            placeholder="Minimum Professional Experience"
                            aria-label="Minimum Professional Experience"
                            value={props.adminFilter.professionalExperience}
                            onChange={handleChange()}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row className= "bottom-padding">
                <Col xs={5} md={2}>
                    <Button variant="secondary" size="lg" type="button" onClick={handleSubmit} >Filter profiles</Button>
                </Col>
            </Row>


        </Container>
    )
}
export default FilterProfile;