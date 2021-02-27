import React, {useState} from 'react'
import  * as ReactBootStrap from 'react-bootstrap';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';

const Contact = () =>  {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const clearName = () => setName("");
  const clearEmail = () => setEmail(""); 
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      init(process.env.REACT_APP_EMAILJS_INIT);
      emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE,
                       process.env.REACT_APP_EMAILJS_TEMPLATE, evt.target)
      .then((result) => {
          handleShow();
          clearName();
          clearEmail(); 
      }, (error) => {
          console.log(error.text);
      });
  }

    return(    
        <div class="container ml-1">
          <div class="row">
            <div class="col-6">
        <ReactBootStrap.Row>
        <ReactBootStrap.Col>
          <p></p>
           <h2>Contact US:</h2>
           <p>Swing by for a cup of coffee, or leave us a message:</p>
          <ReactBootStrap.Form onSubmit={handleSubmit}>
            <ReactBootStrap.Form.Group controlId="formBasicEmail">
              <ReactBootStrap.Form.Label>Email address</ReactBootStrap.Form.Label>
              <ReactBootStrap.Form.Control type="email" value={email} name="reply_to" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
              <ReactBootStrap.Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </ReactBootStrap.Form.Text>
            </ReactBootStrap.Form.Group>

            <ReactBootStrap.Form.Group controlId="formBasicPassword">
              <ReactBootStrap.Form.Label>Full Name</ReactBootStrap.Form.Label>
              <ReactBootStrap.Form.Control type="Text" value={name} name="to_name" placeholder="Enter full name" onChange={e => setName(e.target.value)}/>
            </ReactBootStrap.Form.Group>
            <ReactBootStrap.Form.Group controlId="formBasicCheckbox">
              <ReactBootStrap.Form.Check type="checkbox" label="Keep me updated" />
            </ReactBootStrap.Form.Group>
          <ReactBootStrap.Button variant="primary" type="submit" onSubmit=''>
            Submit
          </ReactBootStrap.Button>
  </ReactBootStrap.Form>
  </ReactBootStrap.Col>

            <ReactBootStrap.Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          >
          <ReactBootStrap.Modal.Header closeButton>
            <ReactBootStrap.Modal.Title>@2021 Trading Center App</ReactBootStrap.Modal.Title>
          </ReactBootStrap.Modal.Header>
          <ReactBootStrap.Modal.Body>
            Thank you for your response, we will be contact you soon. 
          </ReactBootStrap.Modal.Body>
          <ReactBootStrap.Modal.Footer>
            <ReactBootStrap.Button variant="secondary" onClick={handleClose}>
              Close
            </ReactBootStrap.Button>
          </ReactBootStrap.Modal.Footer>
          </ReactBootStrap.Modal>
  
  </ReactBootStrap.Row>
  </div>
  </div>
  </div>
            )
}

export default Contact; 