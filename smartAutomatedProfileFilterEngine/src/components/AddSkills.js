    import React from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import InputGroup from 'react-bootstrap/InputGroup';
    import FormControl from 'react-bootstrap/FormControl'
    import FormCheck from 'react-bootstrap/FormCheck'
    import '../css/App.css';
    import RangeSlider from 'react-bootstrap-range-slider';
    import Creatable from 'react-select/creatable';
    import  skills  from './skills.js';
    import {Col, Row, Button} from "react-bootstrap";

    function AddSkills(props) {
        const {skillsOptions} = skills()
        const handleChange = idx => e => {
            const { name, value } = e.target;
            const applicantSkills = [...props.profile.applicantSkills];
            applicantSkills[idx] = {
              ...props.profile.applicantSkills[idx],
              [name]: value
            };
            props.onChange({
                 ...props.profile,
                 applicantSkills
            });
        };

        const handleChangeCheckBox = idx => e => {
            const { name, checked } = e.target;

            const applicantSkills = [...props.profile.applicantSkills];
            applicantSkills[idx] = {
              ...props.profile.applicantSkills[idx],
              [name]: checked
            };
            props.onChange({
                 ...props.profile,
                 applicantSkills
            });
        };

        const handleSelectChange = (idx, value) =>  {
              const applicantSkills = [...props.profile.applicantSkills];
              applicantSkills[idx] = {
                    ...props.profile.applicantSkills[idx],
                    skillName: value.value,
                    skill: value
                  };
              props.onChange({
                   ...props.profile,
                   applicantSkills
              });
        };

      const handleAddRow = () => {
        const item = {
          skillName: "",
          skill: "",
          rate: "6",
          workedProfessionally: 0,
          quizRating: 0,
          takenQuiz: 0
        };
        props.onChange({
             ...props.profile,
             applicantSkills: [...props.profile.applicantSkills, item]
        });

      };
      const handleRemoveRow = () => {
        props.onChange({
           ...props.profile,
           applicantSkills: props.profile.applicantSkills.slice(0, -1)
       });
      };
      const handleRemoveSpecificRow = (idx) => () => {
        const applicantSkills = [...props.profile.applicantSkills]
        applicantSkills.splice(idx, 1)
        props.onChange({
                   ...props.profile,
                   applicantSkills: applicantSkills
               });
      }

        return (
          <div>
            <div className="container">
               <div className="top-padding">
                  <Row style={{backgroundColor: "#808080"}} >
                        <Col>
                            <h4>Skills </h4>
                        </Col>

                   </Row>
              </div>

              <div>

                {props.profile.applicantSkills.map((item, idx) => (
                     <Row id="addr0" key={idx} className="bottom-padding">
                        <Col>
                            <Row>
                                <Col xs={6} md={4}>
                                    <Creatable
                                        options={skillsOptions}
                                       isClearable
                                       placeholder="Start typing Skill"
                                       id = "skillName"
                                       name="skillName"
                                       onChange={(value) => handleSelectChange(idx, value)}
                                       value = {props.profile.applicantSkills[idx].skill}
                                       />
                                </Col>
                                <Col xs={5} md={3}>
                                    <InputGroup >
                                        {['checkbox'].map((type) => (
                                            <div key={`inline-${type}`} className="mb-3">
                                              <FormCheck
                                                inline
                                                label="Knows Skill Professionally"
                                                name="workedProfessionally"
                                                value={props.profile.applicantSkills[idx].workedProfessionally}
                                                onChange={handleChangeCheckBox(idx)}
                                                type={type}
                                                id={`inline-${type}-1`}
                                              />
                                            </div>
                                          ))}
                                    </InputGroup>
                                </Col>
                                <Col xs={4} md={1}>
                                    <p>Rate</p>
                                </Col>
                                <Col xs={4} md={2}>
                                    <RangeSlider  name = "rate" min={1}
                                    max={10} variant='secondary'
                                    tooltip='auto'
                                    value={props.profile.applicantSkills[idx].rate}
                                    onChange={handleChange(idx)}/>
                                    {props.errors.applicantSkills[idx]
                                    && props.errors.applicantSkills[idx].rate
                                    && <p className= "color-red">{props.errors.applicantSkills[idx].rate}</p>}
                                </Col>
                                <Col xs={2} md={1}>
                                    <FormControl value={props.profile.applicantSkills[idx].rate}/>
                                </Col>

                                <Col className="col-sm-1">
                                    <button className="btn btn-outline-danger btn-sm" onClick={handleRemoveSpecificRow(idx)}>
                                                    Remove
                                    </button>
                                </Col>
                            </Row>
                            {props.profile.applicantSkills[idx].rate === 10 && !props.profile.applicantSkills[idx].workedProfessionally &&
                                <Row className="bottom-padding-less">
                                    <Col xs={5} md={4}>
                                        <InputGroup >
                                            {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-3">
                                                  <FormCheck
                                                    inline
                                                    label="Taken quiz"
                                                    name="takenQuiz"
                                                    value={props.profile.applicantSkills[idx].takenQuiz}
                                                    onChange={handleChangeCheckBox(idx)}
                                                    type={type}
                                                    id={`inline-${type}-1`}
                                                  />
                                                </div>
                                              ))}
                                        </InputGroup>
                                    </Col>
                                    <Col xs={5} md={3}>
                                        <InputGroup className="bottom-padding-less" >
                                            <InputGroup.Text id="quizRating">Quiz Rating</InputGroup.Text>
                                            <FormControl
                                                disabled = {!props.profile.applicantSkills[idx].takenQuiz}
                                                id="quizRating"
                                                name = "quizRating"
                                                placeholder="Quiz Rating"
                                                aria-label="Quiz Rating"
                                                value={props.profile.applicantSkills[idx].quizRating}
                                                onChange={handleChange(idx)}
                                            />
                                        </InputGroup>
                                    </Col>
                                </Row>

                            }

                        </Col>
                       </Row>
                 ))}
              </div>
              <div className="bottom-padding"></div>
              <Button variant="secondary" onClick={handleAddRow} className="margin">Add skills</Button>
              <Button variant="secondary" onClick={handleRemoveRow}>Delete Last Added skills</Button>

            </div>
          </div>
        );


    }


    export default AddSkills;