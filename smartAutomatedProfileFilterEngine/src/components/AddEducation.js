    import React from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import InputGroup from 'react-bootstrap/InputGroup';
    import FormControl from 'react-bootstrap/FormControl'
    import FormCheck from 'react-bootstrap/FormCheck'
    import DropdownButton from 'react-bootstrap/DropdownButton'
    import Dropdown from 'react-bootstrap/Dropdown'
    import '../css/App.css';
    import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

    import {Col, Row, Button} from "react-bootstrap";

    function AddEducation(props) {
        let today: Date = new Date();
        let currentYear: number = today.getFullYear();
        let currentMonth: number = today.getMonth();

        const handleChange = idx => e => {
            const { name, value } = e.target;
            const educationalQualifications = [...props.profile.educationalQualifications];
            educationalQualifications[idx] = {
              ...props.profile.educationalQualifications[idx],
              [name]: value
            };
            props.onChange({
                 ...props.profile,
                 educationalQualifications
            });
          };

          const handleChangeCourses = idx => e => {
              const { value } = e.target;
              var nameArr = value.split(',');
              var coursesTakenArray = []
              nameArr.forEach(element =>
                coursesTakenArray.push({courseName: element})
              );
              const educationalQualifications = [...props.profile.educationalQualifications];
              educationalQualifications[idx] = {
                ...props.profile.educationalQualifications[idx],
                coursesTaken: coursesTakenArray
              };
              props.onChange({
                   ...props.profile,
                   educationalQualifications
              });
          };

          const handleSelect = idx => e => {
            const educationalQualifications = [...props.profile.educationalQualifications];
            educationalQualifications[idx] = {
              ...props.profile.educationalQualifications[idx],
              degree: e
            };
            props.onChange({
                 ...props.profile,
                 educationalQualifications
            });

          }

          const handleDateChange = idx => e => {
              const { name } = e.target;
              var dateObj = e.value;
              var month = dateObj.getUTCMonth() +1 ;
              var year = dateObj.getUTCFullYear();

              var newDate = month<10? (year+"-0"+month+"-01") : year+ "-"+ month +"-01"

              const educationalQualifications = [...props.profile.educationalQualifications];
              educationalQualifications[idx] = {
                ...props.profile.educationalQualifications[idx],
                [name]: newDate
              };
              props.onChange({
                   ...props.profile,
                   educationalQualifications
              });

            }

          const handleChangeCheckBox = idx => e => {
                const { name, checked } = e.target;

                const educationalQualifications = [...props.profile.educationalQualifications];
                educationalQualifications[idx] = {
                  ...props.profile.educationalQualifications[idx],
                  [name]: checked
                };
                props.onChange({
                     ...props.profile,
                     educationalQualifications
                });
            };

          const fileChangeHandler = idx => e => {
              const { name } = e.target;
              const educationalQualifications = [...props.profile.educationalQualifications];
              educationalQualifications[idx] = {
                ...props.profile.educationalQualifications[idx],
                [name]: e.target.files[0]
              };
              props.onChange({
                   ...props.profile,
                   educationalQualifications
             })
          };

          const handleAddRow = () => {
            const item = {
              school: "",
              degree: "",
              fieldOfStudy: "",
              location: "",
              startDate: "",
              tillDate: 0,
              endDate: "",
              coursesTaken: "",
              gpa: 0,
              transcriptFile: ""
            };
            props.onChange({
                 ...props.profile,
                 educationalQualifications: [...props.profile.educationalQualifications, item]
            });

          };
          const handleRemoveRow = () => {
            props.onChange({
               ...props.profile,
               educationalQualifications: props.profile.educationalQualifications.slice(0, -1)
           });
          };
          const handleRemoveSpecificRow = (idx) => () => {
            const educationalQualifications = [...props.profile.educationalQualifications]
            educationalQualifications.splice(idx, 1)
            props.onChange({
                       ...props.profile,
                       educationalQualifications: educationalQualifications
                   });
          }

        return (
          <div>
            <div className="container">
               <div className="top-padding">
                  <Row style={{backgroundColor: "#808080"}} >
                        <Col>
                            <h4>educational Qualifications </h4>
                        </Col>

                   </Row>
              </div>

              <div>

                {props.profile.educationalQualifications.map((item, idx) => (
                     <Row id="addr0" key={idx} className="bottom-padding">
                        <Col>
                            <Row className="bottom-padding-less">
                                <Col xs={6} md={4}>
                                    <InputGroup >
                                      <InputGroup.Text id="school">School</InputGroup.Text>
                                        <FormControl
                                               placeholder="School"
                                               aria-label="school"
                                               id="school"
                                               name="school"
                                               value={props.profile.educationalQualifications[idx].school}
                                               onChange={handleChange(idx)}
                                           />
                                   </InputGroup>
                                </Col>
                                <Col xs={6} md={4}>
                                    <InputGroup >

                                           <InputGroup.Text id="degree">Degree</InputGroup.Text>

                                           <DropdownButton
                                              id="degree"
                                              title={props.profile.educationalQualifications[idx].degree}
                                              variant= "secondary"
                                              name="degree"
                                              value={props.profile.educationalQualifications[idx].degree}
                                              onSelect={handleSelect(idx)}
                                           >
                                             <Dropdown.Item eventKey = "Secondary School">Secondary School</Dropdown.Item>
                                             <Dropdown.Item eventKey = "Bachelors">Bachelors</Dropdown.Item>
                                             <Dropdown.Item eventKey = "Masters">Masters</Dropdown.Item>
                                             <Dropdown.Item eventKey = "PHD">PHD</Dropdown.Item>
                                           </DropdownButton>

                                    </InputGroup>
                                </Col>
                                <Col xs={6} md={4}>
                                    <InputGroup >
                                       <InputGroup.Text id="fieldOfStudy">Field Of Study</InputGroup.Text>
                                       <FormControl
                                           placeholder="Field Of Study"
                                           aria-label="fieldOfStudy"
                                           id = "fieldOfStudy"
                                           name="fieldOfStudy"
                                           value={props.profile.educationalQualifications[idx].fieldOfStudy}
                                           onChange={handleChange(idx)}
                                        />
                                    </InputGroup>
                                </Col>

                            </Row>
                            <Row className="bottom-padding-less">
                                <Col xs={6} md={4}>
                                    <InputGroup >
                                       <InputGroup.Text id="gpa">GPA</InputGroup.Text>
                                       <FormControl
                                           placeholder="gpa"
                                           aria-label="gpa"
                                           id = "gpa"
                                           name="gpa"
                                           type="number"
                                           value={props.profile.educationalQualifications[idx].gpa}
                                           onChange={handleChange(idx)}
                                        />
                                   </InputGroup>
                                   {props.errors.educationalQualifications[idx]
                                   && props.errors.educationalQualifications[idx].gpa
                                   && <p className= "color-red">{props.errors.educationalQualifications[idx].gpa}</p>}
                                </Col>
                                <Col xs={5} md={4}>
                                        <InputGroup >
                                           <InputGroup.Text id="coursesTaken">Courses Taken</InputGroup.Text>
                                           <FormControl
                                               placeholder="Comma Separated"
                                               aria-label="coursesTaken"
                                               name="coursesTaken"
                                               value={props.profile.educationalQualifications[idx].coursesTaken &&
                                               Array.prototype.map.call(props.profile.educationalQualifications[idx].coursesTaken, s => s.courseName).toString()
                                                }
                                               onChange={handleChangeCourses(idx)}
                                           />
                                       </InputGroup>
                                   </Col>
                                   <Col xs={5} md={4}>
                                       <InputGroup controlId="formFile">
                                           <InputGroup.Text>Transcript</InputGroup.Text>
                                           <FormControl type="file"
                                            name="transcriptFile"
                                            onChange={fileChangeHandler(idx)}/>
                                        </InputGroup>
                                   </Col>
                                </Row>
                                <Row className="bottom-padding-less">
                                    <Col xs={6} md={4} >
                                        <InputGroup className="mb-3">
                                           <Col xs={3} md={3} >
                                               <InputGroup.Text id="startDate" >Start Date</InputGroup.Text>
                                           </Col>
                                           <Col xs={6} md={9} >
                                                <DatePickerComponent
                                                   placeholder="YYYY-MM-DD"
                                                   format='MM-yyyy'
                                                   max = {new Date(currentYear, currentMonth)}
                                                   start="Year"
                                                   depth = "Year"
                                                   id="startDate"
                                                   name="startDate"
                                                   value={props.profile.educationalQualifications[idx].startDate}
                                                   onChange={handleDateChange(idx)}
                                                   cssClass = "date-picker "

                                               />
                                           </Col>


                                       </InputGroup>
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <InputGroup >
                                            {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-3">
                                                  <FormCheck
                                                    inline
                                                    label="Till Date"
                                                    name="tillDate"
                                                    value={props.profile.educationalQualifications[idx].tillDate}
                                                    onChange={handleChangeCheckBox(idx)}
                                                    type={type}
                                                    id={`inline-${type}-1`}
                                                  />
                                                </div>
                                              ))}
                                        </InputGroup>
                                    </Col>
                                    <Col xs={6} md={4} >
                                        <InputGroup className="mb-3">
                                           <Col xs={3} md={3} >
                                               <InputGroup.Text id="endDate" >End Date</InputGroup.Text>
                                           </Col>
                                           <Col xs={6} md={9} >
                                                <DatePickerComponent
                                                   placeholder="YYYY-MM-DD"
                                                   format='MM-yyyy'
                                                   max = {new Date(currentYear, currentMonth)}
                                                   start="Year"
                                                   depth = "Year"
                                                   id="endDate"
                                                   name="endDate"
                                                   value={props.profile.educationalQualifications[idx].endDate}
                                                   onChange={handleDateChange(idx)}
                                                   cssClass = "date-picker "
                                                   disabled = {props.profile.educationalQualifications[idx].tillDate}
                                               />
                                           </Col>
                                       </InputGroup>
                                       {props.errors.educationalQualifications[idx]
                                       && props.errors.educationalQualifications[idx].endDate
                                       && <p className= "color-red">{props.errors.educationalQualifications[idx].endDate}</p>}
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
              <Button variant="secondary" onClick={handleAddRow} className="margin">Add Education</Button>
              <Button variant="secondary" onClick={handleRemoveRow}>Delete Last Added Education</Button>

            </div>
          </div>
        );


    }


    export default AddEducation;