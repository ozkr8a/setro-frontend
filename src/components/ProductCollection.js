import React, { Fragment } from "react";
import Product from './Product'
import { CardDeck, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const ProductCollection = (props) => {
  
  return(
    <Fragment>
      <h3> this is the Product Collection</h3>
      <CardDeck fluid>
        <Row>
      {props.allProducts.map(singleProduct => <Col><Product product={singleProduct} key={singleProduct.id} /></Col>)}
        </Row>

      </CardDeck>

      <Button onClick={props.handleMoreButton}> See More... </Button>
     
    </Fragment>
  )
}
export default ProductCollection
//just nothing