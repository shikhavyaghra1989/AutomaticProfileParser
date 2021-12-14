    import React, { useState } from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import InputGroup from 'react-bootstrap/InputGroup';
    import FormControl from 'react-bootstrap/FormControl'
    import Container from 'react-bootstrap/Container'
    import '../css/App.css';

    import {Col, Modal, Row, ToggleButtonGroup, ToggleButton, Button} from "react-bootstrap";

    function AddCertification(props) {

        const handleChange = idx => e => {
            const { name, value } = e.target;
            const certifications = [...props.profile.certifications];
            certifications[idx] = {
              ...props.profile.certifications[idx],
              [name]: value
            };
            props.onChange({
                 ...props.profile,
                 certifications
            });
          };

          const fileChangeHandler = idx => e => {
            const { name } = e.target;

            const certifications = [...props.profile.certifications];
            certifications[idx] = {
              ...props.profile.certifications[idx],
              [name]: e.target.files[0]
            };
            console.log(certifications[idx])
            props.onChange({
                 ...props.profile,
                 certifications
            });
          };

          const handleAddRow = () => {
            const item = {
              name: "",
              prizesWon: "",
              certificationFile: ""
            };
            props.onChange({
                 ...props.profile,
                 certifications: [...props.profile.certifications, item]
            });

          };
          const handleRemoveRow = () => {
            props.onChange({
               ...props.profile,
               certifications: props.profile.certifications.slice(0, -1)
           });
          };
          const handleRemoveSpecificRow = (idx) => () => {
            const certifications = [...props.profile.certifications]
            certifications.splice(idx, 1)
            props.onChange({
                       ...props.profile,
                       certifications: certifications
                   });
          }

        return (
          <div>
            <div className="container">
               <div className="top-padding">
                  <Row style={{backgroundColor: "#808080"}} >
                        <Col>
                            <h4>Certification </h4>
                        </Col>

                   </Row>
              </div>

              <div>

                {props.profile.certifications.map((item, idx) => (
                     <Row id="addr0" key={idx} className="bottom-padding">
                        <Col>
                            <Row>
                                <Col xs={6} md={3}>
                                    <InputGroup >
                                      <InputGroup.Text id="name">Name</InputGroup.Text>
                                        <FormControl
                                               placeholder="Name"
                                               aria-label="name"
                                               id="name"
                                               name="name"
                                               value={props.profile.certifications[idx].name}
                                               onChange={handleChange(idx)}
                                           />
                                   </InputGroup>
                                </Col>
                                <Col xs={6} md={4}>
                                    <InputGroup >
                                       <InputGroup.Text id="prizesWon">Prizes Won</InputGroup.Text>
                                       <FormControl
                                           placeholder="prizesWon"
                                           aria-label="prizesWon"
                                           id = "prizesWon"
                                           name="prizesWon"
                                           value={props.profile.certifications[idx].prizesWon}
                                           onChange={handleChange(idx)}
                                        />
                                    </InputGroup>
                                </Col>
                                <Col xs={5} md={4}>
                                    <InputGroup controlId="formFile">
                                        <InputGroup.Text>Certification</InputGroup.Text>
                                        <FormControl
                                        type="file"
                                        name="certificationFile"
                                        onChange={fileChangeHandler(idx)} />
                                     </InputGroup>
                                </Col>

                                <Col className="col-sm-1">
                                    <button className="btn btn-outline-danger btn-sm" onClick={handleRemoveSpecificRow(idx)}>
                                                    Remove
                                    </button>
                                </Col>
                            </Row>

                        </Col>
                       </Row>
                 ))}
              </div>
              <div className="bottom-padding"></div>
              <Button variant="secondary" onClick={handleAddRow} className="margin">Add Certification</Button>
              <Button variant="secondary" onClick={handleRemoveRow}>Delete Last Added Certification</Button>

            </div>
          </div>
        );


    }


    export default AddCertification;