import React from 'react'
import Navigation from '../Navigation';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'; 
import Form from 'react-bootstrap/Form';
import Footer from '../Footer';
import Figure from 'react-bootstrap/Figure';

function Contact() {
  return (
    <div>
        <Navigation />
       <section className="py-5">
            <Container className="container px-5">
                   
                    <Card.Body className="bg-light rounded-4 py-5 px-4 px-md-5">
                        <Card.Text className="text-center mb-5">
                            <div>
                              <Figure.Image src="https://img.freepik.com/vecteurs-libre/marketing-par-e-mail-discussion-internet-assistance-24-heures-24_335657-3009.jpg?size=626&ext=jpg&uid=R107750808&ga=GA1.1.431377284.1691224391&semt=sph"  className="rounded-4" />
                            </div>
                            <h1 className="fw-bolder">Laissez-nous un message</h1>
                        </Card.Text>
                        <Row className="row gx-5 justify-content-center">
                            <div class="col-lg-8 col-xl-6">
                                 
                                <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                    
                                    <div className="form-floating mb-3">
                                        <Form.Label for="name">Votre nom complet <span >*</span></Form.Label>
                                        <Form.Control className="form-control"  id="name" type="text" placeholder="Nom complet" required="required"/>
                                    </div>
                                    
                                    <div class="form-floating mb-3">
                                        <Form.Label for="email">Email address <span >*</span></Form.Label>
                                        <Form.Control className="form-control" id="email" type="email" onchange="onChangeInputEmail" placeholder="name@example.com" required="required"/>
                                    </div>
                                    
                                    <div class="form-floating mb-3">
                                        <Form.Label for="phone">Phone number <span >*</span></Form.Label>
                                        <Form.Control className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" required="required"/>
                                    </div>
                                    
                                    <div class="form-floating mb-3">
                                        <Form.Label for="message">Message <span >*</span></Form.Label>
                                        <Form.Control className="form-control" id="message" type="text" placeholder="Ecrivez ici votre message" required="required"></Form.Control>
                                    </div>
                                    
                                    <div className="d-grid"><button className="btn btn-primary btn-lg" id="submitButton" type="submit">Envoyer</button></div>
                                </Form> <br />
                                <div id="dataDisplay">

                                </div>
                            </div>
                            
                        </Row>
                    </Card.Body>
                </Container>
        </section>
        <Footer />
    </div>
  )
}

export default Contact
