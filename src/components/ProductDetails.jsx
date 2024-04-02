import { Rating } from '@smastrom/react-rating';
import React, { useEffect } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import NotFound from './NotFound';

export default function ProductDetails() {

    let {state} = useLocation();
    let navigate = useNavigate();

  return (

      state==null ? <NotFound/> : 
      <div>
      <Card style={{margin:"2%", padding:"1%"}}>
       <Card.Img variant="top" style={{width:"10%", height:"20%"}} src={state.product.image} />
       <Card.Body>
       <Card.Title>{state.product.title}</Card.Title>
         <Card.Text>
          {state.product.description}
         </Card.Text>
         <ListGroup className="list-group-flush">
           <ListGroup.Item>Category: {state.product.category}</ListGroup.Item>
           <ListGroup.Item>Price: {state.product.price}</ListGroup.Item>
           <ListGroup.Item style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
               <Button variant="primary" style={{width:"49%"}}>Add to cart</Button>
               <Button variant="warning" style={{width:"49%"}}>Buy now</Button>
           </ListGroup.Item>
       </ListGroup>
       </Card.Body>

     </Card>
   </div>
  )
}
