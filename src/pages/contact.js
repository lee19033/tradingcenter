import React, {useState} from 'react'
import  * as ReactBootStrap from 'react-bootstrap';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const clearName = () => setName("");
  const clearEmail = () => setEmail(""); 
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      init("user_tphg43V1NYEK8c4ENbLRY");
      emailjs.sendForm('service_3e98wd5', 'template_bjtfk1b', evt.target)
      .then((result) => {
          console.log(result.text);
          handleShow();
          clearName();
          clearEmail(); 
      }, (error) => {
          console.log(error.text);
      });
  }

    return(
    
        <ReactBootStrap.Row style={{marginLeft: '10px', width:'40%'}}>
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
            )
}

export default Contact; 