import React , { Component} from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { RiShoppingCartLine } from "react-icons/ri"

import banner from "../../assets/banner.jpg"
import banner3 from "../../assets/banner3.jpg"
import banner4 from "../../assets/banner4.jpg"
import banner5 from "../../assets/banner5.jpg"
import banner6 from "../../assets/banner6.jpg"
import mesa1 from "../../assets/produtos/mesa1.jpg"
import mesa2 from "../../assets/produtos/mesa2.jpg"
import mesa3 from "../../assets/produtos/mesa3.jpg"
import mesa4 from "../../assets/produtos/mesa4.jpg"
import mesinha1 from "../../assets/produtos/mesinha1.jpg"
import mesinha2 from "../../assets/produtos/mesinha2.jpg"
import mesinha3 from "../../assets/produtos/mesinha3.jpg"
import prateleira from "../../assets/produtos/prateleira.jpg"
import prateleira2 from "../../assets/produtos/prateleira2.jpg"
import prateleira3 from "../../assets/produtos/prateleira3.jpg"
import prateleira4 from "../../assets/produtos/prateleira4.jpg"
import prateleira5 from "../../assets/produtos/prateleira5.jpg"
import banheiro1 from "../../assets/produtos/banheiro1.jpg"
import banheiro2 from "../../assets/produtos/banheiro2.jpg"
import decoracao1 from "../../assets/produtos/decoracao1.jpg"
import decoracao2 from "../../assets/produtos/decoracao2.jpg"
import decoracao3 from "../../assets/produtos/decoracao3.jpg"
import buda from "../../assets/produtos/buda.jpg"
import enfeite from "../../assets/produtos/enfeite.jpg"
import enfeite2 from "../../assets/produtos/enfeite2.jpg"
import enfeite3 from "../../assets/produtos/enfeite3.jpg"
import enfeite4 from "../../assets/produtos/enfeite4.jpg"

import '../../styles/principal.css'

import { logout } from '../../store/actions/usuarios/usuario'

const initialState = {
}

class Favoritos extends Component {

  constructor(props) {
    super(props)
    this.state = initialState
  }


  render(props) {
      var preco1 = 250.00
      var preco2 = 400.00
      var preco3 = 85.00
      var preco4 = 170.00
      var preco5 = 120.00
      var preco6 = 130.00
      var preco7 = 210.00
      var preco8 = 150.00
      var preco9 = 100.00
    return (
        <Container>
            <Row style={{fontSize:"2em", fontFamily:"Arial, Helvetica, sans-serif", marginRight:"2em"}}>
                <Col md={{ span: 4, offset: 6  }}>Sala de Estar</Col>
            </Row>
            <Row style={{fontSize:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", marginRight:"2em", marginBottom:"2em"}}>
                <Col md={{ span: 5, offset: 5  }}>Lista com os produtos para sua sala!</Col>
            </Row>
            <Row >
                <Col style={{marginLeft:"2em"}} md={{ span: 3, offset: 1 }}>
                    <a href="/home">
                        <Image src={mesa1} className="Principal-favorito-image" />
                    </a>
                    <p style={{marginLeft:"7em",marginTop:"1em", marginBottom:"-0.1em"}}>R$ {preco1}</p>
                    <Button variant="outline-secondary" style={{marginLeft:"3em", marginBottom:"1em"}}>Adicionar ao Carrinho</Button>
                </Col>
                <Col md={{ span: 3, offset: 1 }}>
                    <a href="/home">
                        <Image src={mesa2} className="Principal-favorito-image" />
                    </a>
                    <p style={{marginLeft:"7em",marginTop:"1em", marginBottom:"-0.1em"}}>R$ {preco2}</p>
                    <Button variant="outline-secondary" style={{marginLeft:"3em", marginBottom:"1em"}}>Adicionar ao Carrinho</Button>
                </Col>
                <Col md={{ span: 3, offset: 1 }}>
                    <a href="/home">
                        <Image src={mesa3} className="Principal-favorito-image" />
                    </a>
                    <p style={{marginLeft:"7em",marginTop:"1em", marginBottom:"-0.1em"}}>R$ {preco3}</p>
                    <Button variant="outline-secondary" style={{marginLeft:"3em", marginBottom:"1em"}}>Adicionar ao Carrinho</Button>
                </Col>
            </Row>
            <Row > 
                <Col style={{marginLeft:"2em"}} md={{ span: 3, offset: 1 }}>
                    <a href="/home">
                        <Image src={mesa4} className="Principal-favorito-image" />
                    </a>
                    <p style={{marginLeft:"7em",marginTop:"1em", marginBottom:"-0.1em"}}>R$ {preco4}</p>
                    <Button variant="outline-secondary" style={{marginLeft:"3em", marginBottom:"1em"}}>Adicionar ao Carrinho</Button>
                </Col>
                
            </Row>
           
        </Container>
      );
    
  }
}
const mapStateToProps = ({ usuario,  }) => {
  return {
      usuario,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Favoritos)

