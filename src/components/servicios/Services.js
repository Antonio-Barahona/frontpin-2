import React from 'react';
import imageSeccionCuatro from "../../asset/images/section4-image.png";
import IconFeatherUp from "../../asset/images/Icon feather-chevron-up.svg";
import { Accordion, Card } from "react-bootstrap";


const Services = () => {
    return (
        <section id="services" className="servSec">
            
            <div className="imgSer">
                <img src={imageSeccionCuatro} alt="section4"/>
            </div>
           
            
            <Accordion className="accordion" defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <h4>Sed ut perspiciatis</h4>
                        <img src={IconFeatherUp} alt="IconFeatherUp"/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body> <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br></br>eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam <br></br> voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita <br></br> kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p></Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        <h4>Ut enim ad minima veniam</h4>
                        <img src={IconFeatherUp} alt="IconFeatherUp"/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br></br> eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam <br></br> voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita <br></br>kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p></Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        <h4>Sit amet, consectetur, adipisci</h4>
                        <img src={IconFeatherUp} alt="IconFeatherUp"/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br></br> eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam<br></br> voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita<br></br> kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p></Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
              

             
         

        </section>
    )
}

export default Services;