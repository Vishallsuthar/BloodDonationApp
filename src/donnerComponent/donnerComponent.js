import React, { Component,useState } from 'react'
import appImage from '../images/blood-donor-nurse_74855-6262.jpg'

import DatePicker from "react-datepicker";

import { subDays,subMonths } from "date-fns";
import { Container, Row, Col, Image , Form, FormControl,FormGroup,Tabs,Tab, Button  } from 'react-bootstrap';


class donnerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            whatUserChoice:"",
          };
          this.handleChange = this.handleChange.bind(this);
          this.doneteChange = this.doneteChange.bind(this);
      }

      
    

      handleChange(date) {
        this.setState({
          startDate: date
        })
      }
      doneteChange(e){
        this.setState({
            whatUserChoice: e.target.value,
          })
      }
    render() {
        
        
        return (
            <section className="EnqueiryPage">

            
            <Container>
                <Row >
                    <Col lg={6}>
                        <Image src={appImage} fluid/>
                    </Col>
                    <Col lg={6}>
                        <h1 className="text-center py-2">Sapna Foundation</h1>
                        <p className="text-center pb-4 h6">We're  with you..</p>
                    <Tabs className="TabsMenu " variant="pills"  defaultActiveKey="Donner" >
                            <Tab eventKey="Patient" title="Patient" >
                                <Form>
                                    <Row>
                                        <Col lg={6}>
                                            <FormGroup>
                                                <Form.Label>Patient Name</Form.Label>
                                                <FormControl as="input" placeholder="First Name"/>
                                            </FormGroup>
                                        </Col>
                                       
                                        <Col lg={6}>
                                            <FormGroup>
                                                <Form.Label>Attender Phone Number</Form.Label>
                                                <FormControl as="input" placeholder="Phone Number"/>
                                            </FormGroup>
                                        </Col>
                                       
                                       
                                         <Col lg={6}>
                                            <FormGroup>
                                                <Form.Label>Blood Group</Form.Label>
                                                <Form.Control as="select">
                                                    <option>Select blood group </option>
                                                    <option>A+</option>
                                                    <option>A-</option>
                                                    <option>B+</option>
                                                    <option>B-</option>
                                                    <option>AB+</option>
                                                    <option>AB-</option>
                                                    <option>O+</option>
                                                    <option>O-</option>
                                                </Form.Control>
                                            </FormGroup>
                                        </Col>
                                        <Col lg={6}>
                                            <FormGroup>
                                                <Form.Label>Whats you Required</Form.Label>
                                                <Form.Control as="select">
                                                    <option>Select  </option>
                                                    <option>Plazma</option>
                                                    <option>Blood</option>
                                                </Form.Control>
                                            </FormGroup>
                                        </Col>
                                        <Col lg={6}>
                                            <FormGroup>
                                                <Form.Label>Hospital Name</Form.Label>
                                                <FormControl as="input" placeholder="Hospital Name"/>
                                            </FormGroup>
                                        </Col>
                                        <Col lg={6}>
                                            <FormGroup>
                                                <Form.Label>City</Form.Label>
                                                <Form.Control as="select">
                                                    <option>Select City </option>
                                                    <option>Dungarpur</option>
                                                    <option>Udaipur</option>
                                                    <option>Sagwara</option>
                                                    <option>Aspur</option>
                                                    <option>Simalwara</option>
                                                    <option>Ganoda(Banswara)</option>
                                                    <option>Banswara</option>
                                                </Form.Control>
                                            </FormGroup>
                                        </Col>
                                        <Col lg={12} >
                                            <FormGroup>
                                                <Button  as="button" className="mr-2">Submit</Button >
                                                <Button variant="secondary" as="button">Cancel</Button >
                                            </FormGroup>
                                        </Col>
                                        
                                    </Row>
                                </Form>
                        </Tab>
                        <Tab eventKey="Donner" title="Donner">
                        <Form>
                                    <Row>
                                        <Col lg={6}>
                                            <FormGroup>
                                                <Form.Label>Donner Name</Form.Label>
                                                <FormControl as="input" placeholder="First Name"/>
                                            </FormGroup>
                                        </Col>
                                       
                                        <Col lg={6}>
                                            <FormGroup>
                                                <Form.Label>Phone Number</Form.Label>
                                                <FormControl as="input" placeholder="Phone Number"/>
                                            </FormGroup>
                                        </Col>
                                        <Col lg={6}>
                                            <FormGroup>
                                                <Form.Label>City</Form.Label>
                                                <Form.Control as="select">
                                                    <option>Select City </option>
                                                    <option>Dungarpur</option>
                                                    <option>Udaipur</option>
                                                    <option>Sagwara</option>
                                                    <option>Aspur</option>
                                                    <option>Simalwara</option>
                                                    <option>partapur</option>
                                                    
                                                </Form.Control>
                                            </FormGroup>
                                        </Col>
                                        <Col lg={6}>
                                            <FormGroup>
                                                
                                                <Form.Label>Whats you want to donate</Form.Label>
                                                <Form.Control as="select" onClick={this.doneteChange}>
                                                    <option>Select  </option>
                                                    <option>Plazma</option>
                                                    <option>Blood</option>
                                                    
                                                </Form.Control>
                                            </FormGroup>
                                        </Col>
                                       {(this.state.whatUserChoice == "Plazma")? (<> <Col lg={6}>
                                            <FormGroup>
                                                <Form.Label>Last time donate Date</Form.Label>
                                                <DatePicker className="form-control"
                                                calendarClassName="w-100"
                                                    selected={ this.state.startDate }
                                                    onChange={ this.handleChange }
                                                    minDate={subDays(new Date(), 15)}
                                                    maxDate={new Date()}
                                                    name="startDate"
                                                    dateFormat="dd/MM/yyyy"
                                                />
                                            
                                            </FormGroup>
                                        </Col></>):(<></>)}
                                        {(this.state.whatUserChoice == "Blood")? (<> <Col lg={6}>
                                            <FormGroup>
                                                <Form.Label>Last time donate Date</Form.Label>
                                                <DatePicker className="form-control"
                                                calendarClassName="w-100"
                                                    selected={ this.state.startDate }
                                                    onChange={ this.handleChange }
                                                    minDate={subMonths(new Date(), 15)}
                                                    maxDate={new Date()}
                                                    name="startDate"
                                                    dateFormat="dd/MM/yyyy"
                                                />
                                            
                                            </FormGroup>
                                        </Col></>):(<></>)}
                                        <Col lg={6}>
                                            <FormGroup>
                                                <Form.Label>Won Fights againest Covid</Form.Label>
                                                <DatePicker className="form-control"
                                                calendarClassName="w-100"
                                                    selected={ this.state.startDate }
                                                    onChange={ this.handleChange }
                                                    minDate={subDays(new Date(), 15)}
                                                    maxDate={new Date()}
                                                    name="startDate"
                                                    dateFormat="dd/MM/yyyy"
                                                />
                                            
                                            </FormGroup>
                                        </Col>
                                        
                                        <Col lg={6}>
                                            <FormGroup>
                                                <Form.Label>Blood Group</Form.Label>
                                                <Form.Control as="select">
                                                    <option>Select blood group </option>
                                                    <option>A+</option>
                                                    <option>A-</option>
                                                    <option>B+</option>
                                                    <option>B-</option>
                                                    <option>AB+</option>
                                                    <option>AB-</option>
                                                    <option>O+</option>
                                                    <option>O-</option>
                                                </Form.Control>
                                            </FormGroup>
                                        </Col>
                                        
                                       
                                        <Col lg={12} >
                                            <FormGroup>
                                                <Button  as="button" className="mr-2">Submit</Button >
                                                <Button variant="secondary" as="button">Cancel</Button >
                                            </FormGroup>
                                        </Col>
                                        
                                    </Row>
                                </Form>
                            </Tab>
                        </Tabs>
                        
                    </Col>
                </Row>
            </Container>
            </section>
        )
    }
}




export default donnerComponent;