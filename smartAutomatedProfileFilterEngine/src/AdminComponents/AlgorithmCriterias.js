import React from 'react';
import {Col, Row, Container, ListGroup} from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'

function AlgorithmCriterias(props) {
    const handleChange = () => e => {
        const { name, value } = e.target;

        const algoStats = {
            ...props.adminFilter.algoStats,
            [name]: value
        }

        props.onChange({
             ...props.adminFilter,
             algoStats
        });
    };
    return (
        <Container className="bottom-padding div-border">
            <Row >
                <label className="para-heading">
                    Following is the description of the marking that has been given in this form (as default)
                </label>
            </Row>
            <Row>
                <Col xs={3} md={11}>
                    <ListGroup variant="flush">
                      <ListGroup.Item>Points equal to number of years of experience will be given if the Employement Type is Full time and 50% of number of years of experience will be given if worked part time.</ListGroup.Item>
                      <ListGroup.Item>We are considering that if an applicant has done Masters as highest degree then that person is equally qualified as 2 years experienced person. Hence 2 points will be given for masters.For the applicants whose GPA is less than 3, 1 point will be given for Masters student.</ListGroup.Item>
                      <ListGroup.Item>5 points will be given for PHD students for the students whose GPA >= 3.For the applicants whose GPA is less than 3 in PHD  points will be given.</ListGroup.Item>
                      <ListGroup.Item>First we will allocate 1 point for each skill that applicant possess and been asked by admin.
                                      Then for each above skill if applicant have rated himself >8 then add 2 points per skill, if rating is between 5-8 then add 1.This value plus value from first point will be called total_points_for_skills</ListGroup.Item>
                      <ListGroup.Item>The final points that will be given to an applicant are Weightage count for experience + Weightage count for Educational qualifications+ Weightage calculation for skills.
                                      </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <Row className= "bottom-padding">
                <Col xs={5} md={6}>
                    <InputGroup className="bottom-padding-less" >
                        <InputGroup.Text id="mastersGPAGrtrTnEqualThree">Masters GPA greater than equal to 3</InputGroup.Text>
                        <FormControl
                            id="mastersGPAGrtrTnEqualThree"
                            name = "mastersGPAGrtrTnEqualThree"
                            placeholder="Masters GPA >=3"
                            aria-label="Masters GPA >=3"
                            value={props.adminFilter.algoStats.mastersGPAGrtrTnEqualThree}
                            onChange={handleChange()}
                        />
                    </InputGroup>
                </Col>

                <Col xs={5} md={5}>
                    <InputGroup className="bottom-padding-less" >
                        <InputGroup.Text id="mastersGPAlessTnThree">Masters GPA less than 3</InputGroup.Text>
                        <FormControl
                            id="mastersGPAlessTnThree"
                            name = "mastersGPAlessTnThree"
                            placeholder="Masters GPA <3"
                            aria-label="Masters GPA <3"
                            value={props.adminFilter.algoStats.mastersGPAlessTnThree}
                            onChange={handleChange()}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col xs={5} md={6}>
                    <InputGroup className="bottom-padding-less" >
                        <InputGroup.Text id="phdGPAGrtrTnEqualThree">PHD GPA greater than equal to 3</InputGroup.Text>
                        <FormControl
                            id="phdGPAGrtrTnEqualThree"
                            name = "phdGPAGrtrTnEqualThree"
                            placeholder="PHD GPA >=3"
                            aria-label="PHD GPA >=3"
                            value={props.adminFilter.algoStats.phdGPAGrtrTnEqualThree}
                            onChange={handleChange()}
                        />
                    </InputGroup>
                </Col>

                <Col xs={5} md={5}>
                    <InputGroup className="bottom-padding-less" >
                        <InputGroup.Text id="phdGPAlessTnThree">PHD GPA less than 3</InputGroup.Text>
                        <FormControl
                            id="phdGPAlessTnThree"
                            name = "phdGPAlessTnThree"
                            placeholder="PHD GPA <3"
                            aria-label="PHD GPA <3"
                            value={props.adminFilter.algoStats.phdGPAlessTnThree}
                            onChange={handleChange()}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col xs={5} md={11}>
                    <InputGroup className="bottom-padding-less" >
                        <InputGroup.Text id="experience">Experience(per year of professional ex)</InputGroup.Text>
                        <FormControl
                            id="experience"
                            name = "experience"
                            placeholder="Experience"
                            aria-label="Experience"
                            value={props.adminFilter.algoStats.experience}
                            onChange={handleChange()}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col xs={3} md={3}>
                    <InputGroup className="bottom-padding-less" >
                        <InputGroup.Text id="primarySkillsRateLessThan5">Primary Skills(Rating less than 5)</InputGroup.Text>
                        <FormControl
                            id="primarySkillsRateLessThan5"
                            name = "primarySkillsRateLessThan5"
                            placeholder="Primary Skills(Rating less than 5)"
                            aria-label="Primary Skills(Rating less than 5)"
                            value={props.adminFilter.algoStats.primarySkillsRateLessThan5}
                            onChange={handleChange()}
                        />
                    </InputGroup>
                </Col>
                <Col xs={3} md={4}>
                    <InputGroup className="bottom-padding-less" >
                        <InputGroup.Text id="primarySkillsRateBw5and8">Primary Skills(Rating between 5 & 8)</InputGroup.Text>
                        <FormControl
                            id="primarySkillsRateBw5and8"
                            name = "primarySkillsRateBw5and8"
                            placeholder="Primary Skills(Rating between 5 & 8)"
                            aria-label="Primary Skills(Rating between 5 & 8)"
                            value={props.adminFilter.algoStats.primarySkillsRateBw5and8}
                            onChange={handleChange()}
                        />
                    </InputGroup>
                </Col>
                <Col xs={3} md={4}>
                    <InputGroup className="bottom-padding-less" >
                        <InputGroup.Text id="primarySkillsRateGrtrThan8">Primary Skills(Rating greater than 8)</InputGroup.Text>
                        <FormControl
                            id="primarySkillsRateGrtrThan8"
                            name = "primarySkillsRateGrtrThan8"
                            placeholder="Primary Skills(Rating greater than 8)"
                            aria-label="Primary Skills(Rating greater than 8)"
                            value={props.adminFilter.algoStats.primarySkillsRateGrtrThan8}
                            onChange={handleChange()}
                        />
                    </InputGroup>
                </Col>
            </Row>


            <Row className= "bottom-padding"/>

        </Container>
    )
}
export default AlgorithmCriterias;