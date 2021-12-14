    import React, { useState } from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import InputGroup from 'react-bootstrap/InputGroup';
    import FormControl from 'react-bootstrap/FormControl'
    import FormCheck from 'react-bootstrap/FormCheck'
    import Container from 'react-bootstrap/Container'
    import '../css/App.css';
    import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

    import {Col, Modal, Row, ToggleButtonGroup, ToggleButton, Button} from "react-bootstrap";

    function AddprofessionalExperiences(props) {
        let today: Date = new Date();
        let currentYear: number = today.getFullYear();
        let currentMonth: number = today.getMonth();

        const handleChange = idx => e => {
            const { name, value } = e.target;
            const professionalExperiences = [...props.profile.professionalExperiences];
            professionalExperiences[idx] = {
              ...props.profile.professionalExperiences[idx],
              [name]: value
            };
            props.onChange({
                 ...props.profile,
                 professionalExperiences
            });
          };

          const handleChangeCheckBox = idx => e => {
              const { name, checked } = e.target;

              const professionalExperiences = [...props.profile.professionalExperiences];
              professionalExperiences[idx] = {
                ...props.profile.professionalExperiences[idx],
                [name]: checked
              };
              props.onChange({
                   ...props.profile,
                   professionalExperiences
              });
          };

          const handleChangeRadioButton = (idx, newEmployementType, name) => {

            const professionalExperiences = [...props.profile.professionalExperiences];
            professionalExperiences[idx] = {
              ...props.profile.professionalExperiences[idx],
              [name]: newEmployementType
            };
            props.onChange({
                 ...props.profile,
                 professionalExperiences
            });
        };

          const handleDateChange = idx => e => {
            const { name } = e.target;
            var dateObj = e.value;
            var month = dateObj.getUTCMonth() +1 ;
            var year = dateObj.getUTCFullYear();

            var newDate = month<10? (year+"-0"+month+"-01") : year+ "-"+ month +"-01"

            const professionalExperiences = [...props.profile.professionalExperiences];
            professionalExperiences[idx] = {
              ...props.profile.professionalExperiences[idx],
              [name]: newDate
            };
            props.onChange({
                 ...props.profile,
                 professionalExperiences
            });
          }

          const handleAddRow = () => {
            const item = {
              title: "",
              employementType: "",
              companyName: "",
              location: "",
              startDate: "",
              endDate: "",
              industry: "",
              workingCurrently: 0

            };
            props.onChange({
                 ...props.profile,
                 professionalExperiences: [...props.profile.professionalExperiences, item],
            });

          };
          const handleRemoveRow = () => {
//               var result = window.confirm("Would you like to delete this row?");
//               if (result) {
                   props.onChange({
                          ...props.profile,
                          professionalExperiences: props.profile.professionalExperiences.slice(0, -1)
                      });
//                }
          }

         const handleRemoveSpecificRow = (idx) => () => {
             const professionalExperiences = [...props.profile.professionalExperiences]
             professionalExperiences.splice(idx, 1)
             props.onChange({
                ...props.profile,
                professionalExperiences: professionalExperiences
             });
         }

        return (
          <div>
            <div className="container">
               <div className="top-padding">
                  <Row style={{backgroundColor: "#808080"}} >
                        <Col>
                            <h4>Professional Experience  </h4>
                        </Col>

                   </Row>
              </div>

              <div>

                {props.profile.professionalExperiences.map((item, idx) => (
                     <Row id="addr0" key={idx} className="bottom-padding">
                        <Col>
                            <Row className="bottom-padding-less">
                                <Col xs={6} md={4}>
                                    <InputGroup >
                                      <InputGroup.Text id="title">Title</InputGroup.Text>
                                        <FormControl
                                               placeholder="Title"
                                               aria-label="title"
                                               id="title"
                                               name="title"
                                               value={props.profile.professionalExperiences[idx].title}
                                               onChange={handleChange(idx)}
                                           />
                                   </InputGroup>
                                    {props.errors.professionalExperiences[idx]
                                        && props.errors.professionalExperiences[idx].title
                                        && <p className= "color-red">{props.errors.professionalExperiences[idx].title}</p>}
                                </Col>
                                <Col xs={6} md={4}>
                                    <InputGroup >
                                       <InputGroup.Text id="companyName">Company Name</InputGroup.Text>
                                       <FormControl
                                           placeholder="Company Name"
                                           aria-label="companyName"
                                           id = "companyName"
                                           name="companyName"
                                           value={props.profile.professionalExperiences[idx].companyName}
                                           onChange={handleChange(idx)}
                                        />
                                    </InputGroup>

                                </Col>
                                <Col xs={6} md={4}>
                                    <InputGroup  >
                                        <label id="name" >Employement type </label>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} className="mb-3 date-picker">
                                              <FormCheck
                                                inline
                                                label="Full time"
                                                name="employementType"
                                                value='Full-Time'
                                                onChange={(e) => handleChangeRadioButton(idx, e.currentTarget.value, e.currentTarget.name)}
                                                type={type}
                                                id={`inline-${type}-1`}
                                              />
                                              <FormCheck
                                                  inline
                                                  label="Part time"
                                                  name="employementType"
                                                  value='Part-Time'
                                                  onChange={(e) => handleChangeRadioButton(idx, e.currentTarget.value, e.currentTarget.name)}
                                                  type={type}
                                                  id={`inline-${type}-1`}
                                                />
                                            </div>
                                          ))}
                                    </InputGroup>
                                </Col>

                            </Row>
                            <Row className="bottom-padding-less">
                                <Col xs={6} md={4}>
                                    <InputGroup >
                                       <InputGroup.Text id="location">Location</InputGroup.Text>
                                       <FormControl
                                           placeholder="Location"
                                           aria-label="location"
                                           id = "location"
                                           name="location"
                                           value={props.profile.professionalExperiences[idx].location}
                                           onChange={handleChange(idx)}
                                        />
                                   </InputGroup>
                                </Col>
                                <Col xs={6} md={8}>
                                    <InputGroup>
                                       <InputGroup.Text id="industry">Industry</InputGroup.Text>
                                       <FormControl
                                           placeholder="Industry"
                                           aria-label="industry"
                                           name="industry"
                                           value={props.profile.professionalExperiences[idx].industry}
                                           onChange={handleChange(idx)}
                                       />
                                    </InputGroup>
                                </Col>

                            </Row>
                            <Row className="bottom-padding-less">
                                <Col xs={6} md={4}>
                                    <InputGroup>
                                           <Col xs={3} md={3} >
                                               <InputGroup.Text id="startDate" >Start Date</InputGroup.Text>
                                           </Col>
                                           <Col xs={6} md={9} >
                                                <DatePickerComponent
                                                   placeholder="yyyy-MM-DD"
                                                   format='yyyy-MM-DD'
                                                   max = {new Date(currentYear, currentMonth)}
                                                   start="Year"
                                                   depth = "Year"
                                                   id="startDate"
                                                   name="startDate"
                                                   value={props.profile.professionalExperiences[idx].startDate}
                                                   onChange={handleDateChange(idx)}
                                                   cssClass = "date-picker "
                                               />
                                           </Col>
                                    </InputGroup>
                                   {props.errors.professionalExperiences[idx]
                                       && props.errors.professionalExperiences[idx].startDate
                                       && <p className= "color-red">{props.errors.professionalExperiences[idx].startDate}</p>}
                                </Col>
                                <Col xs={6} md={4}>
                                    <InputGroup >
                                        {['checkbox'].map((type) => (
                                            <div key={`inline-${type}`} className="mb-3">
                                              <FormCheck
                                                inline
                                                label="Working currently"
                                                name="workingCurrently"
                                                value={props.profile.professionalExperiences[idx].workingCurrently}
                                                onChange={handleChangeCheckBox(idx)}
                                                type={type}
                                                id={`inline-${type}-1`}
                                              />
                                            </div>
                                          ))}
                                    </InputGroup>
                                </Col>
                                <Col xs={6} md={4}>
                                    <InputGroup>
                                           <Col xs={3} md={3} >
                                               <InputGroup.Text id="endDate" >End Date</InputGroup.Text>
                                           </Col>
                                           <Col xs={6} md={9} >
                                                <DatePickerComponent
                                                   placeholder="yyyy-MM-DD"
                                                   format='yyyy-MM-DD'
                                                   max = {new Date(currentYear, currentMonth)}
                                                   start="Year"
                                                   depth = "Year"
                                                   id="endDate"
                                                   name="endDate"
                                                   value={props.profile.professionalExperiences[idx].endDate}
                                                   onChange={handleDateChange(idx)}
                                                   cssClass = "date-picker "
                                                   disabled = {props.profile.professionalExperiences[idx].workingCurrently}
                                               />
                                           </Col>
                                    </InputGroup>
                                    {props.errors.professionalExperiences[idx]
                                    && props.errors.professionalExperiences[idx].endDate
                                    && <p className= "color-red">{props.errors.professionalExperiences[idx].endDate}</p>}
                                </Col>
                            </Row>

                            </Col>
                            <Col className="col-sm-1">
                                <button className="btn btn-outline-danger btn-sm" onClick={handleRemoveSpecificRow(idx)}>
                                                Remove
                                </button>
                            </Col>
                        </Row>
                 ))}
              </div>
              <div className="bottom-padding"></div>
              <Button variant="secondary" onClick={handleAddRow} className="margin">Add Professional Experience</Button>
              <Button variant="secondary" onClick={handleRemoveRow}>Delete Last Added Professional Experience</Button>

            </div>
          </div>
        );


    }


    export default AddprofessionalExperiences;