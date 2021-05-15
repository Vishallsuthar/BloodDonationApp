import React from 'react'
import appImage from '../images/blood-donor-nurse_74855-6262.jpg'

import DatePicker from "react-datepicker";

import { subDays,subMonths } from "date-fns";
import { Container, Row, Col, Image , Form, FormControl,FormGroup,Tabs,Tab, Button  } from 'react-bootstrap';


const district = ['Banswara','Dungarpur','Udaipur']


const addressData = [
    {city:'Dungarpur',Dist:'Dungarpur'},
    {city:'Simalwara',Dist:'Dungarpur'},
    {city:'Jothri Pal',Dist:'Dungarpur'},
    {city:'Sagwara',Dist:'Dungarpur'},
    {city:'Aspur',Dist:'Dungarpur'},
    {city:'Chikhli',Dist:'Dungarpur'},
    {city:'Galiyakot',Dist:'Dungarpur'},
    {city:'Bichiwara',Dist:'Dungarpur'},
    {city:'Sabla',Dist:'Dungarpur'},
    {city:'Banswara',Dist:'Banswara'},
    {city:'Abapura',Dist:'Banswara'},
    {city:'Ghari',Dist:'Banswara'},
    {city:'Kushalgarh',Dist:'Banswara'},
    {city:'Bagidora',Dist:'Banswara'},
    {city:'Gangdatalyi',Dist:'Banswara'},
    {city:'Ganoda',Dist:'Banswara'},
    {city:'Sajjangarh',Dist:'Banswara'},
    {city:'Anandpuri',Dist:'Banswara'},
    {city:'Choti Sarvan',Dist:'Banswara'},
    {city:'Arthuna',Dist:'Banswara'},
    {city:'Girva',Dist:'Udaipur'},
    {city:'Ganora',Dist:'Udaipur'},
    {city:'Vallabnagar',Dist:'Udaipur'},
    {city:'Mavli',Dist:'Udaipur'},
    {city:'Sarada',Dist:'Udaipur'},
    {city:'Kherwara',Dist:'Udaipur'},
    {city:'Rishbhdev',Dist:'Udaipur'},
    {city:'Salumbar',Dist:'Udaipur'},
    {city:'Lasadiya',Dist:'Udaipur'},
    {city:'Jandol',Dist:'Udaipur'},
    {city:'Kotda',Dist:'Udaipur'},
    {city:'Badhghav',Dist:'Udaipur'},
    {city:'Bhindar',Dist:'Udaipur'},
    {city:'Kanoda',Dist:'Udaipur'}
]
              

class Donner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastplasmaDonteDate: new Date(),
            prevBloodDonetionDate: new Date(),
            whatUserChoice:"",
            haveDonatePlasmaPrev:false,
            haveDonateBloodPrev: false,
            selectedDetrict:"",

            
          };
        this.lastplasmaDonteCalender = this.lastplasmaDonteCalender.bind(this);
        this.lastbloodDongeCalender = this.lastbloodDongeCalender.bind(this);
        this.selectDistrict = this.selectDistrict.bind(this);
        this.doneteChange = this.doneteChange.bind(this);
        this.havePlazmaChange = this.havePlazmaChange.bind(this);
        this.haveBloodChange = this.haveBloodChange.bind(this);
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
      selectDistrict(e){
        this.setState({
            selectedDetrict: e.target.value,
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
                        <p className="text-center pb-4 h6">We're proud on you for taken this step.</p>
                        <Tabs className="TabsMenu " variant="pills"  defaultActiveKey="Plasma" >
                            <Tab eventKey="Plasma" title="Plasma" >
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
                                                <Form.Label>District</Form.Label>
                                                <Form.Control as="select" onChange={this.selectDistrict}>
                                                <option>-select District-</option>
                                                    {district.map(function(items,i){
                                                        return <option key={i} value={items}>{items}</option>
                                                    })}
                                                </Form.Control>
                                            </FormGroup>
                                            
                                        </Col>
                                        <Col lg={6}>{this.state.selectedDetrict === null?(<></>):(<>
                                           </>
                                                )}
                                            <FormGroup>
                                                <Form.Label>City</Form.Label>
                                                <Form.Control as="select" >
                                                <option>-Select City-</option>
                                              
                                                {this.state.selectedDetrict === ""?(<></>):(<>    {addressData.filter(t=>t.Dist === this.state.selectedDetrict).map((filteredPerson,i) => (
                                                        <option key={i} value={filteredPerson.city}>
                                                        {filteredPerson.city}
                                                        </option>
                                                    ))}</>
                                                
                                                )}
                                              
                                               </Form.Control>
                                            </FormGroup>
                                        </Col>

                                        
                                        <Col lg={6}>
                                            <FormGroup>
                                                <Form.Label>Blood Group</Form.Label>
                                                <Form.Control as="select" >
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
                                            <FormGroup className="d-flex justify-content-between">
                                            
                                                <Form.Label>Are you donate plaza last 15 Days?</Form.Label>
                                                <Form.Check   
                                                    label=""
                                                    type="switch"
                                                    id="custom-switch"
                                                    onClick={this.havePlazmaChange}
                                                />
                                            </FormGroup>
                                        </Col>

                                        
                                       {(this.state.haveDonatePlasmaPrev === true)? (<> <Col lg={6}>
                                            <FormGroup>
                                                <Form.Label>Last time donate Date</Form.Label>
                                                <DatePicker className="form-control"
                                                calendarClassName="w-100"
                                                    selected={ this.state.lastplasmaDonteDate }
                                                    onChange={ this.lastplasmaDonteCalender }
                                                    minDate={subDays(new Date(), 15)}
                                                    maxDate={new Date()}
                                                    name="lastplasmaDonteDate"
                                                    dateFormat="dd/MM/yyyy"
                                                />
                                            </FormGroup>
                                        </Col></>):(<></>)}
                                        
                                        
                                       
                                        
                                       
                                        <Col lg={12} >
                                            <FormGroup>
                                                <Button  as="button" className="mr-2">Submit</Button >
                                                <Button variant="secondary" as="button">Cancel</Button >
                                            </FormGroup>
                                        </Col>
                                        
                                    </Row>
                                </Form>  
                        </Tab>
                            <Tab eventKey="Blood" title="Blood">
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
                                                <Form.Label>District</Form.Label>
                                                <Form.Control as="select" onChange={this.selectDistrict}>
                                                <option>-select District-</option>
                                                    {district.map(function(items,i){
                                                        return <option key={i} value={items}>{items}</option>
                                                    })}
                                                </Form.Control>
                                            </FormGroup>
                                            
                                        </Col>
                                        <Col lg={6}>
                                            <FormGroup>
                                                <Form.Label>City</Form.Label>
                                                <Form.Control as="select" >
                                                <option>-Select City-</option>
                                                {this.state.selectedDetrict === ""?(<></>):(<>    {addressData.filter(t=>t.Dist === this.state.selectedDetrict).map((filteredPerson,i) => (
                                                        <option key={i} value={filteredPerson.city}>
                                                        {filteredPerson.city}
                                                        </option>
                                                    ))}</>
                                                )} 
                                               </Form.Control>
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
                                                <FormGroup className="d-flex justify-content-between">
                                                    <Form.Label>Are you donate bllod in last 3 months?</Form.Label>
                                                    <Form.Check   
                                                        label=""
                                                        type="switch"
                                                        id="haveDonateBloodPrev"
                                                        onClick={this.haveBloodChange}
                                                    />
                                                
                                                </FormGroup>
                                            </Col>
                                        {(this.state.haveDonateBloodPrev === true)? (<> <Col lg={6}>
                                                <FormGroup>
                                                    <Form.Label>Last time donate Date</Form.Label>
                                                    <DatePicker className="form-control"
                                                    calendarClassName="w-100"
                                                        selected={ this.state.prevBloodDonetionDate }
                                                        onChange={ this.lastbloodDongeCalender }
                                                        minDate={subMonths(new Date(), 3)}
                                                        maxDate={new Date()}
                                                        name="prevBloodDonetionDate"
                                                        dateFormat="dd/MM/yyyy"
                                                    />
                                                
                                                </FormGroup>
                                            </Col></>):(<></>)}
                                            
                                            
                                        
                                            
                                        
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




export default Donner;