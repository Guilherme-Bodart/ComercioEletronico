import React , { Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import swal from 'sweetalert';
import { AiOutlineClose } from "react-icons/ai"

import '../../styles/principal.css'

import { logout, viewUser } from '../../store/actions/usuarios/usuario'
import { addToCart, cleanCart, removeItem } from '../../store/actions/cart/cart'

const initialState = {
}

class ModalP extends Component {

  constructor(props) {
    super(props)
    this.state = initialState
  }

  render(props) {
    var soma = 0
    const produtos = this.props.cart.cart.map((produto, index)=> {
      index = produto.id
      soma = soma + produto.preco
        return (
          <Row>
            <Col md={{ span: 4}}>
            <Image src={produto.image} className="Principal-carrinho-image" />
            </Col>
            <Col md={{ span: 4}} >
            <p style={{width:"5em", marginLeft:"3em", fontSize:"2em", marginTop:"2em" }}>R$ {produto.preco}</p>
            </Col>
            <Col md={{ span: 4}} >
            <Button variant="" style={{marginLeft:"4em", marginTop:"4.3em"}} 
                    onClick={()=>{
                      this.props.removeItem(produto)
                    }}><AiOutlineClose style={{ fontSize:"1.7em", color:"#E87715"}} /></Button>
                    </Col>
            
          </Row>
        )
    })

    return (
      <Container>
        <Row>
         <p style={{fontSize:"1.73em"}}>Valor Total:</p><p className="ml-auto" style={{fontSize:"1.73em"}}>R$ {soma}</p>
       </Row>
        {produtos}
       
       </Container>
      );
    
  }
}
const mapStateToProps = ({ usuario, cart }) => {
  return {
      usuario,
      cart
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    viewUser: (view) => dispatch(viewUser(view)),
    addToCart: product => dispatch(addToCart(product)),    
    cleanCart: () => dispatch(cleanCart()),
    removeItem: product => dispatch(removeItem(product)),


  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalP)

