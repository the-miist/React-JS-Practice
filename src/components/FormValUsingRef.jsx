import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function FormValUsingRef() {

    const name= useRef("");
    const surname = useRef("");
    const email = useRef("");
    const phone = useRef("");

    const nameMessage = useRef();
    const sNameMessage = useRef();
    const emailMessage = useRef();
    const phoneMessage = useRef();

    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    function validate() {

        if(name.current.name == "name") {
           
        }

        if(surname.current.name=="surname" && surname.current) {
           
        }

        if(email.current.name=="email") {
        
          
        }

        if(phone.current.name=="phone") {
      
           
        }

    }


    return(
        <div style={{margin:"10px"}}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={name} type="text" placeholder="Enter name" name="name" onChange={(event)=>{
                         name.current.value = name.current.value.trim();
                         if(name.current.value.trim().length<2) {
                             nameMessage.current.style.display = "block";
                         } else {
                             nameMessage.current.style.display = "none";
                         }
                    }}/>
                </Form.Group>
                <p style={{color:"red", display:"none"}} ref={nameMessage}>Name is too short!</p>

                <Form.Group className="mb-3" controlId="formBasicSurname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control ref={surname} type="text" placeholder="Surname" name="surname" onChange={(event)=>{
                         surname.current.value = surname.current.value.trim();
                         if(surname.current.value.trim().length<3) {
                             sNameMessage.current.style.display = "block";
                         } else {
                             sNameMessage.current.style.display = "none";
                         }
                    }}/>
                </Form.Group>
                <p style={{color:"red", display:"none"}} ref={sNameMessage}>Surname is too short!</p>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={email} type="text" placeholder="Email" name="email"  onChange={(event)=>{
                          if(emailPattern.test(email.current.value.trim())) {
                            emailMessage.current.style.display = "none";
                        } else {
                            emailMessage.current.style.display = "block";
                        }
                    }} />
                </Form.Group>
                <p style={{color:"red", display:"none"}} ref={emailMessage}>Email is Invalid!</p>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control ref={phone} type="text" placeholder="Phone number" name="phone" onChange={(event)=>{
                         if(phonePattern.test(phone.current.value.trim())) {
                            phoneMessage.current.style.display = "none";
                        } else {
                            phoneMessage.current.style.display = "block"; 
                        }
                    }}/>
                </Form.Group>
                <p style={{color:"red", display:"none"}} ref={phoneMessage}>Number is Invalid!</p>

                <Button variant="primary" type="submit" onClick={(event)=>{

                // if( (name && nameInvalid==false) && (surname && surnameInvalid==false) && (email && emailInvalid==false) && (phone && phoneInvalid==false) ) {
                //     alert("Form is valid");
                // }  else {
                //     event.preventDefault();
                //     alert("Details are not valid");
                // }
                }} >
                Submit
                </Button>
            </Form>
        </div>
    )


}