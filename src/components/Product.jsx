import { Button, Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Product(props) {

    const navigate = useNavigate();

    return(
    <Card style={{ width: '18rem', margin:"1rem"}} onClick={()=>{
      navigate("/productdetails", {
        state : {
          product: props.details
        }
      })
    }} >
      <div style={{display:"flex", justifyContent:"center"}}>
        <Card.Img style={{width:"15rem", height:"20rem"}} variant="top" src={props.details.image} />
      </div>
      <Card.Body>
        <Card.Title>{props.details.title}</Card.Title>
        {/* <Card.Text>
          {props.details.description}
        </Card.Text> */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Category: {props.details.category}</ListGroup.Item>
        <ListGroup.Item>Price: {props.details.price}</ListGroup.Item>
        <ListGroup.Item><Button variant="warning" style={{width:"100%"}}>Add to cart</Button></ListGroup.Item>
      </ListGroup>
    </Card>
    )
}