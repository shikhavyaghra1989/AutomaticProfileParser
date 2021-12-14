import React, { useState } from 'react';
import {Col, Row, Button, Container} from "react-bootstrap";
import parserimg from '../svgs/parser-svg.svg'
import Navbar from "react-bootstrap/Navbar";
import FilterProfile from './FilterProfile.js'
import FilteredProfileData from './FIlteredProfileData.js'
import AlgorithmCriterias from './AlgorithmCriterias.js'
import AutomaticProfileParserService  from '../APICalls/ApiCall.js'

function Admin(props) {
    const [adminFilter, setAdminFilter] =
            React.useState({primarySkills: [],
                            secondarySkills: [],
                            professionalExperience: 0,
                            education: {
                                degree : '',
                                gpa: 0,
                            },
                            algoStats: {
                                    mastersGPAGrtrTnEqualThree: 2,
                                    mastersGPAlessTnThree: 1,
                                    phdGPAGrtrTnEqualThree: 5,
                                    phdGPAlessTnThree: 4,
                                    experience: 1,
                                    primarySkillsRateBw5and8: 2,
                                    primarySkillsRateLessThan5:1,
                                    primarySkillsRateGrtrThan8: 3
                                }
                            });
    const [showAlgorithmCriteria, setShowAlgorithmCriteria] = useState(false)
    const [data, setData] = useState([])

    function handleChange(updatedFilter) {
            console.log(JSON.stringify(adminFilter))
            setAdminFilter(updatedFilter);
    }

    function handleSubmit() {

        AutomaticProfileParserService.getData(adminFilter)
            .then(res => {
                setData(res)
            })

        console.log("response")
        console.log(data)
    }

    function showAlgorithmFilterCriteria(){
        if(showAlgorithmCriteria){
            setShowAlgorithmCriteria(false)
        } else {
            setShowAlgorithmCriteria(true)
        }
    }
    return (
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
              <FilterProfile adminFilter ={adminFilter}  onChange={handleChange} onSubmit={handleSubmit}/>
              <Row>
                  <Col>
                      <Button variant="link" type="button" onClick={showAlgorithmFilterCriteria}>To verify the assumptions made in search and ranking, please click here</Button>
                  </Col>
              </Row>
              {showAlgorithmCriteria === true &&
                    <AlgorithmCriterias adminFilter ={adminFilter}  onChange={handleChange}/>
               }
              <FilteredProfileData data= {data}/>

        </Container>

    )
}
export default Admin;