import React , { Component} from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import swal from 'sweetalert';

import prateleira from "../../assets/produtos/prateleira.jpg"
import prateleira2 from "../../assets/produtos/prateleira2.jpg"
import prateleira3 from "../../assets/produtos/prateleira3.jpg"
import prateleira4 from "../../assets/produtos/prateleira4.jpg"
import prateleira5 from "../../assets/produtos/prateleira5.jpg"

import '../../styles/principal.css'

import { addToCart, cleanCart, removeItem } from '../../store/actions/cart/cart'

const initialState = {
}

class Favoritos extends Component {

  constructor(props) {
    super(props)
    this.state = initialState
  }


  render(props) {
    var item1 = {image: prateleira, preco: 110}
    var item2 = {image: prateleira2, preco: 170}
    var item3 = {image: prateleira3, preco: 200}
    var item4 = {image: prateleira4, preco: 150}
    var item5 = {image: prateleira5, preco: 120}
    return (
        <Container>
            <Row style={{fontSize:"2em", fontFamily:"Arial, Helvetica, sans-serif", marginRight:"2em"}}>
                <Col md={{ span: 4, offset: 5  }}>Sala de Estar</Col>
            </Row>
            <Row style={{fontSize:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", marginRight:"2em", marginBottom:"2em"}}>
                <Col md={{ span: 5, offset: 4  }}>Lista com as platereiras para seu canto!</Col>
            </Row>
            <Row >
                <Col style={{marginLeft:"2em"}} md={{ span: 3, offset: 1 }}>
                    <a >
                        <Image src={item1.image} className="Principal-favorito-image" />
                    </a>
                    <p style={{marginLeft:"7em",marginTop:"1em", marginBottom:"-0.1em"}}>R$ {item1.preco}</p>
                    <Button variant="outline-secondary" style={{marginLeft:"3em", marginBottom:"1em"}}
                    onClick={()=>{
                        var item = { image : item1.image, preco: item1.preco, id: Math.random() }
                        this.props.addToCart(item)
                        swal({
                          title: "Sucesso",
                          text: 'Produto adicionado ao carrinho',
                          icon: "success",
                        })
                      }}>Adicionar ao Carrinho</Button>
                </Col>
                <Col md={{ span: 3, offset: 1 }}>
                    <a >
                        <Image src={item2.image} className="Principal-favorito-image" />
                    </a>
                    <p style={{marginLeft:"7em",marginTop:"1em", marginBottom:"-0.1em"}}>R$ {item2.preco}</p>
                    <Button variant="outline-secondary" style={{marginLeft:"3em", marginBottom:"1em"}}
                    onClick={()=>{
                        var item = { image : item2.image, preco: item2.preco, id: Math.random() }
                        this.props.addToCart(item)
                        swal({
                          title: "Sucesso",
                          text: 'Produto adicionado ao carrinho',
                          icon: "success",
                        })
                      }}>Adicionar ao Carrinho</Button>
                </Col>
                <Col md={{ span: 3, offset: 1 }}>
                    <a >
                        <Image src={item3.image} className="Principal-favorito-image" />
                    </a>
                    <p style={{marginLeft:"7em",marginTop:"1em", marginBottom:"-0.1em"}}>R$ {item3.preco}</p>
                    <Button variant="outline-secondary" style={{marginLeft:"3em", marginBottom:"1em"}}
                    onClick={()=>{
                        var item = { image : item3.image, preco: item3.preco, id: Math.random() }
                        this.props.addToCart(item)
                        swal({
                          title: "Sucesso",
                          text: 'Produto adicionado ao carrinho',
                          icon: "success",
                        })
                      }}>Adicionar ao Carrinho</Button>
                </Col>
            </Row>
            <Row > 
                <Col style={{marginLeft:"2em"}} md={{ span: 3, offset: 1 }}>
                    <a >
                        <Image src={item4.image} className="Principal-favorito-image" />
                    </a>
                    <p style={{marginLeft:"7em",marginTop:"1em", marginBottom:"-0.1em"}}>R$ {item4.preco}</p>
                    <Button variant="outline-secondary" style={{marginLeft:"3em", marginBottom:"1em"}}
                    onClick={()=>{
                        var item = { image : item4.image, preco: item4.preco, id: Math.random() }
                        this.props.addToCart(item)
                        swal({
                          title: "Sucesso",
                          text: 'Produto adicionado ao carrinho',
                          icon: "success",
                        })
                      }}>Adicionar ao Carrinho</Button>
                </Col>
                <Col md={{ span: 3, offset: 1 }}>
                    <a >
                        <Image src={item5.image} className="Principal-favorito-image" />
                    </a>
                    <p style={{marginLeft:"7em",marginTop:"1em", marginBottom:"-0.1em"}}>R$ {item5.preco}</p>
                    <Button variant="outline-secondary" style={{marginLeft:"3em", marginBottom:"1em"}}
                    onClick={()=>{
                        var item = { image : item5.image, preco: item5.preco, id: Math.random() }
                        this.props.addToCart(item)
                        swal({
                          title: "Sucesso",
                          text: 'Produto adicionado ao carrinho',
                          icon: "success",
                        })
                      }}>Adicionar ao Carrinho</Button>
                </Col>
            </Row>
            
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
    addToCart: product => dispatch(addToCart(product)),
    cleanCart: () => dispatch(cleanCart()),
    removeItem: product => dispatch(removeItem(product)),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Favoritos)

