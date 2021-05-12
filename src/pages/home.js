import React, { Component,useState } from 'react'
import appImage from '../images/blood-donor-nurse_74855-6262.jpg'

import DatePicker from "react-datepicker";

import { subDays,subMonths } from "date-fns";
import { Container, Row, Col, Image , Form, FormControl,FormGroup,Tabs,Tab, Button  } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const patientIcon = <svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m208.357 190.666c9.427 2.886 19.064 4.316 28.652 4.316 15.725 0 31.314-3.848 45.597-11.433 47.454-25.197 65.557-84.307 40.353-131.766-12.209-22.989-32.639-39.846-57.528-47.466-24.888-7.622-51.255-5.093-74.249 7.116 0 0-.001.001-.001.001-47.447 25.209-65.549 84.318-40.352 131.765 12.209 22.99 32.639 39.846 57.528 47.467zm-10.137-165.986-.001.001c19.454-10.33 41.765-12.466 62.821-6.021 21.057 6.446 38.342 20.708 48.671 40.159 21.325 40.155 6.009 90.166-34.14 111.484-19.455 10.331-41.763 12.469-62.821 6.022-21.057-6.447-38.342-20.709-48.672-40.16-21.319-40.144-6.003-90.156 34.142-111.485z"/><path d="m197.28 121.842h15.29v15.26c0 9.512 7.726 17.25 17.223 17.25h14.202c9.512 0 17.251-7.738 17.251-17.25v-15.26h15.262c9.513 0 17.252-7.738 17.252-17.25v-14.201c0-9.512-7.739-17.25-17.252-17.25h-15.262v-15.26c0-9.512-7.739-17.25-17.251-17.25h-14.202c-9.497 0-17.223 7.738-17.223 17.25v15.26h-15.29c-9.512 0-17.252 7.738-17.252 17.25v14.201c0 9.512 7.74 17.25 17.252 17.25zm-2.251-31.451c0-1.22 1.031-2.251 2.251-2.251h22.791c4.142 0 7.5-3.357 7.5-7.5v-22.76c0-1.22 1.018-2.251 2.222-2.251h14.202c1.22 0 2.251 1.031 2.251 2.251v22.76c0 4.142 3.358 7.5 7.5 7.5h22.762c1.22 0 2.251 1.031 2.251 2.251v14.201c0 1.22-1.031 2.251-2.251 2.251h-22.762c-4.142 0-7.5 3.357-7.5 7.5v22.76c0 1.22-1.031 2.251-2.251 2.251h-14.202c-1.205 0-2.222-1.031-2.222-2.251v-22.76c0-4.142-3.358-7.5-7.5-7.5h-22.791c-1.22 0-2.251-1.031-2.251-2.251z"/><path d="m482.831 439.442v-61.766h20.109c4.143 0 7.501-3.357 7.501-7.5v-150.28c0-15.872-12.928-28.786-28.817-28.786-13.28 0-24.482 9.04-27.791 21.286h-67.595c-4.143 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h66.597v135.282h-202.785v-104.801c0-16.808 13.675-30.482 30.484-30.482h71.064c4.143 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-71.064c-25.08 0-45.485 20.402-45.485 45.482v2.023h-89.611c-.287-11.737-7.425-22.798-18.764-27.49-.207-.086-.418-.162-.632-.229l-68.436-21.371v-38.617c0-15.888-12.928-28.814-28.817-28.814-15.875-.001-28.789 12.925-28.789 28.813v70.181c0 4.142 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-70.181c0-7.618 6.185-13.815 13.788-13.815 7.618 0 13.816 6.197 13.816 13.815v155.383c0 4.142 3.358 7.5 7.5 7.5h184.943v27.601h-220.046v-85.667c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v93.167c0 4.142 3.358 7.5 7.5 7.5h27.791v61.766c-16.634 3.471-29.168 18.245-29.168 35.893 0 20.217 16.45 36.666 36.669 36.666s36.669-16.449 36.669-36.666c0-17.648-12.535-32.421-29.168-35.893v-23.784h417.536v23.784c-16.634 3.471-29.169 18.245-29.169 35.893 0 20.217 16.45 36.666 36.669 36.666s36.67-16.45 36.67-36.667c0-17.648-12.535-32.421-29.169-35.892zm-1.208-233.333c7.619 0 13.816 6.184 13.816 13.787v142.781h-27.603v-142.781c0-7.603 6.185-13.787 13.787-13.787zm-360.407 40.28c5.493 2.401 8.976 7.776 9.228 13.512h-72.838v-33.378zm-63.61 73.687v-45.176h79.296 98.147v45.176zm6.854 155.258c0 11.947-9.72 21.666-21.668 21.666s-21.668-9.719-21.668-21.666c0-11.948 9.72-21.667 21.668-21.667s21.668 9.72 21.668 21.667zm-14.168-74.675v-22.982h417.538v22.982zm425.039 96.342c-11.948 0-21.668-9.719-21.668-21.666 0-11.948 9.72-21.667 21.668-21.667s21.668 9.719 21.668 21.667c0 11.946-9.72 21.666-21.668 21.666z"/></g></g></svg>
const donerIcon = <svg id="Layer_1" enable-background="new 0 0 510 510" height="512" viewBox="0 0 510 510" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m314.998 0c-20.648 0-40.062 8.041-54.662 22.642l-3.186 3.186-3.186-3.187c-14.601-14.6-34.014-22.641-54.661-22.641-42.625 0-77.304 34.679-77.304 77.304v8.011c0 20.649 8.041 40.063 22.642 54.661l112.51 112.51 112.509-112.509c14.602-14.601 22.643-34.013 22.643-54.662v-8.011c-.001-42.625-34.68-77.304-77.305-77.304zm47.304 85.314c0 12.635-4.921 24.514-13.855 33.448l-91.297 91.298-91.297-91.298c-8.935-8.933-13.854-20.812-13.854-33.447v-8.011c0-26.083 21.221-47.304 47.304-47.304 12.635 0 24.515 4.921 33.449 13.854l24.398 24.398 24.398-24.398c8.935-8.934 20.814-13.854 33.45-13.854 26.083 0 47.304 21.221 47.304 47.304z"/><g><path d="m494.423 249.564c-18.151-16.989-45.938-17.442-64.635-1.058l-105.084 92.098c-4.404-31.378-31.427-55.604-64.001-55.604h-93.594c-23.84 0-47.262 8.143-65.96 22.931l-100.817 78.569v38.034l119.306-92.978.09-.07c13.427-10.632 30.254-16.486 47.381-16.486h93.594c17.525 0 32.052 13.085 34.32 30h-89.691v30h125.643l118.587-103.932c7.048-6.176 17.518-6.005 24.36.398 3.734 3.496 5.775 8.238 5.745 13.354-.029 5.115-2.125 9.834-5.9 13.286l-144.258 131.894h-204.69l-94.117 80h46.321l58.824-50h205.31l152.853-139.752c9.872-9.026 15.579-21.876 15.657-35.252.078-13.377-5.478-26.291-15.244-35.432z"/></g></g></svg>
class Home extends React.Component {
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
                <h1 className="text-center py-4">Sapna Foundation</h1>
                <Row className="justify-content-center" >
                    <Col md={4} xs={10}>
                        <Link to="/patient" className="select-button btn"> 
                            {patientIcon}
                            <h4 className="mt-4">Are you patient?</h4>
                        </Link>
                    </Col>
                    <Col md={4} xs={10}>
                        <Link to="/doner" className="select-button btn"> 
                            {donerIcon}
                            <h4 className="mt-4">Are you donner?</h4>
                        </Link>
                    </Col>
                </Row>
            </Container>
            </section>
        )
    }
}




export default Home;