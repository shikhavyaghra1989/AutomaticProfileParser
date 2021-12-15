import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container'
import {Row} from "react-bootstrap";
import '../css/App.css';

function AddPersonalInformation(props) {
    function handleChange(event) {
        props.onChange({
            ...props.profile,
            [event.target.id] : event.target.value,
        });
    }

    return (
        <Container>
                    <div className="row">
                        <p></p>
                    </div>
                    <Row style={{backgroundColor: "#808080"}}>
                        <h4>Personal Information </h4>
                    </Row>
                    <Row className="bottom-padding">
                            <InputGroup className="bottom-padding-less" >
                                <InputGroup.Text id="name">Username</InputGroup.Text>
                                <FormControl
                                    id="name"
                                    placeholder="Username"
                                    aria-label="name"
                                    value={props.value}
                                    onChange={handleChange}
                                />
                            </InputGroup>
                            {props.errors.name && <p className= "color-red">{props.errors.name}</p>}
                        <InputGroup className="bottom-padding-less" >
                            <InputGroup.Text id="emailId">Email id</InputGroup.Text>
                            <FormControl
                                id="emailId"
                                placeholder="emailId"
                                aria-label="emailId"
                                aria-describedby="emailId"
                                value={props.value}
                                onChange={handleChange}
                            />
                        </InputGroup>
                        {props.errors.emailId && <p className= "color-red">{props.errors.emailId}</p>}
                        <InputGroup  className="bottom-padding-less">
                            <InputGroup.Text id="mobileNumber">Contact Number</InputGroup.Text>
                            <FormControl
                                id="mobileNumber"
                                placeholder="Contact Number"
                                aria-label="Contact Number"
                                aria-describedby="mobileNumber"
                                value={props.value}
                                type= "mobileNumber"
                                onChange={handleChange}
                            />
                        </InputGroup>
                        {props.errors.mobileNumber && <p className= "color-red">{props.errors.mobileNumber}</p>}
                    </Row>
                </Container>
    )

}


export default AddPersonalInformation;