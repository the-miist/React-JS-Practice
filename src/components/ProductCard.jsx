import { Button, Card } from "react-bootstrap";

export default function ProductCard(props) {

    let details=props.details
    return(
        <>
           <Card style={{ width: '18rem', border: "1px solid black", padding:"10px", margin:"5px", borderRadius:"2px" }}>
            <Card.Img variant="top" src={details.image} />
            <Card.Body>
                <Card.Title>{details.title}</Card.Title>
                <Card.Text>
                    {details.desc}
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
            </Card>
        </>
    )
}