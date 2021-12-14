import React from 'react';
import {Col, Row, Button, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import FilteredProfileDataRow from './FilteredProfileDataRow.js'
import { JSONToCSVConvertor } from './downloadToExcel.js'

function FilteredProfileData(props) {
    function convertToCSV(e){
       JSONToCSVConvertor(props.data, "executed", true)
    }
    return(
        <Container className="bottom-padding">
            {
                props.data.length >0 &&
                <div>
                    <Row style={{backgroundColor: "#808080"}}>
                        <Col xs={2} md={9}>
                            <h4>Qualified Profiles</h4>
                        </Col>
                        <Col xs={2} md={3}>
                            <Button variant="secondary" size="lg" type="button" onClick={convertToCSV} >Download profiles as Excel</Button>
                        </Col>
                    </Row>
                    <Row>
                        <FilteredProfileDataRow  response = {props.data}/>
                    </Row>
                </div>
            }

        </Container>
    )
}

export default FilteredProfileData;