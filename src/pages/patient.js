import React, { Component,useState } from 'react'
import appImage from '../images/blood-donor-nurse_74855-6262.jpg'

import firebase from '../firebase';
import { Container, Row, Col, Image , Form, FormControl,FormGroup,Tabs,Tab, Button  } from 'react-bootstrap';


class  Patient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastplasmaDonteDate: new Date(),
            prevBloodDonetionDate: new Date(),
            whatUserChoice:"",
            haveDonatePlasmaPrev:false,
            haveDonateBloodPrev: false,
            PatientName: '',
            PhoneNumber: ''
          };
          this.lastplasmaDonteCalender = this.lastplasmaDonteCalender.bind(this);
          this.lastbloodDongeCalender = this.lastbloodDongeCalender.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          this.handleChange = this.handleChange.bind(this);
          
          
            this.doneteChange = this.doneteChange.bind(this);
          this.havePlazmaChange = this.havePlazmaChange.bind(this);
          this.haveBloodChange = this.haveBloodChange.bind(this);
      }

      
      handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref('items');
        const item = {
        PatientName: this.state.PatientName,
          PhoneNumber: this.state.PhoneNumber
        }
        itemsRef.push(item);
        this.setState({
            PatientName: '',
            PhoneNumber: ''
        });
      }
      lastbloodDongeCalender(date) {
            this.setState({
            prevBloodDonetionDate: date
            })
        }
      havePlazmaChange(e){
        this.setState({
            haveDonatePlasmaPrev: e.target.checked,
          })
      }
      haveBloodChange(e){
        this.setState({
            haveDonateBloodPrev: e.target.checked,
          })
      }

      lastplasmaDonteCalender(date) {
        this.setState({
          lastplasmaDonteDate: date
        })
      }
      doneteChange(e){
        this.setState({
            whatUserChoice: e.target.value,
          })
      }
      handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
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
                        <p className="text-center pb-4 h6">We are with you...</p>
                        <Form onSubmit={this.handleSubmit}>
                                    <Row>
                                        <Col lg={6}>
                                            <FormGroup>
                                                <Form.Label>Patient Name</Form.Label>
                                                <FormControl as="input" name="PatientName" onChange={this.handleChange}   placeholder="Patient Name"/>
                                            </FormGroup>
                                        </Col>
                                       
                                        <Col lg={6}>
                                            <FormGroup>
                                                <Form.Label>Attender Phone Number</Form.Label>
                                                <FormControl as="input" name="PhoneNumber" onChange={this.handleChange}  placeholder="Phone Number"/>
                                            </FormGroup>
                                        </Col>
                                       
                                       
                                         <Col lg={6}>
                                            <FormGroup>
                                                <Form.Label>Blood Group</Form.Label>
                                                <Form.Control  as="select">
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
                                                <Button  className="mr-2">Submit</Button >
                                            </FormGroup>
                                        </Col>
                                        
                                    </Row>
                                </Form>
                       
                    </Col>
                </Row>
            </Container>
            </section>
        )
    }
}




export default Patient;