import React, { Component,useState } from 'react'
import { Container, Row, Col, Accordion , Card, FormControl,FormGroup,Tabs,Tab, Button  } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Faq extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
          };
          
      }
    
     
    render() {
        return (
            <section className="EnqueiryPage">
            
            <Container>
                <h1 className="text-center py-4">Do you have doubts?</h1>
                <Row className="justify-content-center" >
                    <Col md={8} xs={10}>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as="span"   variant="link" eventKey="0">
                                    What is plasma?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Plasma is the liquid part of the blood that carries cells and proteins throughout the body; Plasma of the recovered COVID-19 patient also contains antibodies that fight the Corona virus.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as="span"  eventKey="1">
                                What is plasma therapy?
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>Plasma from the recovered COVID-19 patients’ blood is infused in the blood of currently suffering COVID-19 patient. The antibodies in the plasma may help the patient to recover. </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as="span"  eventKey="2">
                                Is donating plasma safe?
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>Plasma donation is a completely safe and harmless process.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
            </section>
        )
    }
}




export default Faq;