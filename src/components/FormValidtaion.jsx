import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function FormValidation() {

    const[name, setName] = useState("");
    const[surname, setSurname] = useState("");
    const[email, setEmail] = useState("");
    const[phone, setPhone] = useState("");

    const[nameInvalid, setNameInvalid] = useState(false);
    const[surnameInvalid, setSurnameInvalid] = useState(false);
    const[emailInvalid, setEmailInvalid] = useState(false);
    const[phoneInvalid, setPhoneInvalid] = useState(false);

    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;


    function validate(event) {

        if(event.target.name == "name") {
            setName(event.target.value.trim());
            if(event.target.value.trim().length<2) {
                setNameInvalid(true);
            } else {
                setNameInvalid(false);
            }
        }

        if(event.target.name=="surname") {
            setSurname(event.target.value);
            if(event.target.value.trim().length<3) {
                setSurnameInvalid(true);
            } else {
                setSurnameInvalid(false);
            }
        }

        if(event.target.name=="email") {
            setEmail(event.target.value);
            if(emailPattern.test(event.target.value.trim())) {
                setEmailInvalid(false);
            } else {
                setEmailInvalid(true);
            }
        }

        if(event.target.name=="phone") {
            setPhone(event.target.value);
            if(phonePattern.test(event.target.value)) {
                setPhoneInvalid(false);
            } else {
                setPhoneInvalid(true);
            }
        }

    }


    return(
        <div style={{margin:"10px"}}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" onChange={(event)=>{
                        validate(event)
                    }}/>
                </Form.Group>

                {nameInvalid ? <p style={{color:"red"}}>Name is too short!</p> : null}

                <Form.Group className="mb-3" controlId="formBasicSurname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" placeholder="Surname" name="surname" onChange={(event)=>{
                        validate(event)
                    }}/>
                </Form.Group>

                { surnameInvalid ? <p style={{color:"red"}}>Surname is too short!</p> : null }

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Email" name="email"  onChange={(event)=>{
                        validate(event)
                    }} />
                </Form.Group>

                { emailInvalid ? <p style={{color:"red"}}>Email is invalid!</p> : null }

                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" placeholder="Phone number" name="phone" onChange={(event)=>{
                        validate(event)
                    }}/>
                </Form.Group>

                { phoneInvalid ? <p style={{color:"red"}}>Phone number is invalid!</p> : null }
              
                <Button variant="primary" type="submit" onClick={(event)=>{

                    if( (name && nameInvalid==false) && (surname && surnameInvalid==false) && (email && emailInvalid==false) && (phone && phoneInvalid==false) ) {
                        alert("Form is valid");
                    }  else {
                        event.preventDefault();
                        alert("Details are not valid");
                    }
                }}>
                    Submit
                </Button>
            </Form>
        </div>
    )

}