import React from 'react'
import { Container, Row, Col, Image , Card  } from 'react-bootstrap';


  import { FaPhoneAlt ,FaRegEnvelope} from 'react-icons/fa';
  
  import logo  from '../images/pp.jpg'
class Ourteam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
          };
          
      }
    
     
    render() {
        return (
            <section className="our-temas-section">
            
            <Container>
                <h1 className="text-left pt-4 pb-2 mb-0">Our Teams</h1>
                <p className="text-left "></p>
                <Row className="justify-content-center" >
                    <Col md={4} xs={10}>
                        <Card className="text-center bg-white p-4 border-0 mb-4">
                            <Image src={logo} roundedCircle fluid className="mb-2"/>
                            <h5>Vishal Suthar</h5>
                            <span>
                                <a href="tel:9571919909" className="btn  btn-secondary mr-2"><FaPhoneAlt className="text-primary"/></a>
                                <a href="tel:9571919909" className="btn btn-secondary"><FaRegEnvelope className="text-danger"/></a>
                            </span>
                        </Card>
                    </Col>
                    <Col md={4} xs={10}>
                        <Card className="text-center bg-white p-4 border-0  mb-4">
                            <Image src={logo} roundedCircle fluid className="mb-2"/>
                            <h5 >Vishal Suthar</h5>
                            <span>
                                <a href="tel:9571919909" className="btn  btn-secondary mr-2"><FaPhoneAlt className="text-primary"/></a>
                                <a href="tel:9571919909" className="btn btn-secondary"><FaRegEnvelope className="text-danger"/></a>
                            </span>
                        </Card>
                    </Col>
                    <Col md={4} xs={10}>
                        <Card className="text-center bg-white p-4 border-0  mb-4">
                            <Image src={logo} roundedCircle fluid className="mb-2"/>
                            <h5 >Vishal Suthar</h5>
                            <span>
                                <a href="tel:9571919909" className="btn  btn-secondary mr-2"><FaPhoneAlt className="text-primary"/></a>
                                <a href="tel:9571919909" className="btn btn-secondary"><FaRegEnvelope className="text-danger"/></a>
                            </span>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </section>
        )
    }
}




export default Ourteam;