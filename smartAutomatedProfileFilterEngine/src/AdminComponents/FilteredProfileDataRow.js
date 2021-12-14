    import React from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import '../css/App.css';

    import {Col, Row} from "react-bootstrap";

    function FilteredProfileDataRow(props) {
        console.log(props.response)
        return (
          <div>
            <div className="container">
               {props.response.map((item, idx) => (
                 <Row className="margin-top div-border background-grey" key = {idx}>
                     <Col className = "col-sm-3">
                        <p className="para"> {item.name}</p>
                        <p className="para"> {item.mobileNumber}</p>
                        <p className="para"> {item.emailId}</p>
                     </Col>
                     <Col className = "col-sm-4 ">
                        <Row >
                            <p className="para para-heading"> Professional Experiences: </p>
                             { item.experience.map((ex, i) => (
                                <p className="para"> {ex.companyName}({ex.years})</p>
                             ))}
                        </Row>
                        <Row >
                            <p className="para para-heading"> Education Experiences:</p>
                              { item.education.map((ed, i) => (
                                 <p className="para"> {ed.degree}({ed.gpa})</p>
                              ))}
                        </Row>
                     </Col>
                     <Col className = "col-sm-4">
                        <p className="para para-heading"> Skills: </p>
                         { item.skills.map((ex, i) => (
                            <p className="para"> {ex.name}({ex.rating})</p>
                         ))}
                     </Col>
                     <Col className = "col-sm-1 div-nowrap ">
                        <p className="para para-heading"> Score: </p>
                        <p>{item.percentile}</p>
                     </Col>

                 </Row>
               ))}
            </div>
            <Row className= "bottom-padding"></Row>
          </div>
        );


    }


    export default FilteredProfileDataRow;