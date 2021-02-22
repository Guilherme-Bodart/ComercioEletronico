import React , { Component} from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import swal from 'sweetalert';

import mesa4 from "../../assets/produtos/mesa4.jpg"
import mesinha1 from "../../assets/produtos/mesinha1.jpg"
import mesinha2 from "../../assets/produtos/mesinha2.jpg"
import prateleira2 from "../../assets/produtos/prateleira2.jpg"
import prateleira5 from "../../assets/produtos/prateleira5.jpg"
import banheiro2 from "../../assets/produtos/banheiro2.jpg"
import decoracao3 from "../../assets/produtos/decoracao3.jpg"
import enfeite2 from "../../assets/produtos/enfeite2.jpg"
import enfeite4 from "../../assets/produtos/enfeite4.jpg"

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
    var item1 = {image: mesinha1, preco: 160}
    var item2 = {image: mesinha2, preco: 250}
    var item3 = {image: decoracao3, preco: 140}
    var item4 = {image: mesa4, preco: 280}
    var item5 = {image: prateleira2, preco: 170}
    var item6 = {image: prateleira5, preco: 120}
    var item7 = {image: banheiro2, preco: 280}
    var item8 = {image: enfeite4, preco: 180}
    var item9 = {image: enfeite2, preco: 90}
    return (
        <Container>
            <Row style={{fontSize:"2em", fontFamily:"Arial, Helvetica, sans-serif", marginRight:"2em"}}>
                <Col md={{ span: 4, offset: 5  }}>Favoritos do Site</Col>
            </Row>
            <Row style={{fontSize:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", marginRight:"2em", marginBottom:"2em"}}>
                <Col md={{ span: 5, offset: 4  }}>Lista com os produtos mais vendidos do site!</Col>
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
                <Col md={{ span: 3, offset: 1 }}>
                    <a >
                        <Image src={item6.image} className="Principal-favorito-image" /></a>
                    <p style={{marginLeft:"7em",marginTop:"1em", marginBottom:"-0.1em"}}>R$ {item6.preco}</p>
                    <Button variant="outline-secondary" style={{marginLeft:"3em", marginBottom:"1em"}}
                    onClick={()=>{
                        var item = { image : item6.image, preco: item6.preco, id: Math.random() }
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
                <Col style={{marginLeft:"2em"}} md={{ span: 3 }}>
                    <a >
                        <Image src={item7.image} className="Principal-favorito-image" />
                    </a>
                    <p style={{marginLeft:"7em",marginTop:"1em", marginBottom:"-0.1em"}}>R$ {item7.preco}</p>
                    <Button variant="outline-secondary" style={{marginLeft:"3em", marginBottom:"1em"}}
                    onClick={()=>{
                        var item = { image : item7.image, preco: item7.preco, id: Math.random() }
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
                        <Image src={item8.image} className="Principal-favorito-image" />
                    </a>
                    <p style={{marginLeft:"7em",marginTop:"1em", marginBottom:"-0.1em"}}>R$ {item8.preco}</p>
                    <Button variant="outline-secondary" style={{marginLeft:"3em", marginBottom:"1em"}}
                    onClick={()=>{
                        var item = { image : item8.image, preco: item8.preco, id: Math.random() }
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
                        <Image src={item9.image} className="Principal-favorito-image" />
                    </a>
                    <p style={{marginLeft:"7em",marginTop:"1em", marginBottom:"-0.1em"}}>R$ {item9.preco}</p>
                    <Button variant="outline-secondary" style={{marginLeft:"3em", marginBottom:"1em"}}
                    onClick={()=>{
                        var item = { image : item9.image, preco: item9.preco, id: Math.random() }
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

