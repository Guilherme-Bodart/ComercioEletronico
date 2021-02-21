import React , { Component} from 'react';
import { connect } from 'react-redux';

import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import banner3 from "../../assets/banner3.jpg"
import banner5 from "../../assets/banner5.jpg"
import banner6 from "../../assets/banner6.jpg"
import mesa2 from "../../assets/produtos/mesa2.jpg"
import mesa3 from "../../assets/produtos/mesa3.jpg"
import mesinha1 from "../../assets/produtos/mesinha1.jpg"
import mesinha2 from "../../assets/produtos/mesinha2.jpg"
import prateleira4 from "../../assets/produtos/prateleira4.jpg"
import prateleira5 from "../../assets/produtos/prateleira5.jpg"
import banheiro1 from "../../assets/produtos/banheiro1.jpg"
import banheiro2 from "../../assets/produtos/banheiro2.jpg"
import decoracao1 from "../../assets/produtos/decoracao1.jpg"
import decoracao2 from "../../assets/produtos/decoracao2.jpg"
import buda from "../../assets/produtos/buda.jpg"
import enfeite from "../../assets/produtos/enfeite.jpg"

import '../../styles/principal.css'

import { logout, viewUser } from '../../store/actions/usuarios/usuario'

const initialState = {
}

class Carrossel extends Component {

  constructor(props) {
    super(props)
    this.state = initialState
  }


  render(props) {
    return (
            <>
             <Carousel>
                <Carousel.Item interval={10000}>
                    <Image src={banner3}  className="Principal-banner" alt="First" />
                    <Carousel.Caption>
                        <CardDeck style={{color:"#C1550C", maxWidth:"30em",marginLeft:"26%"}}>

                            <Card >
                                <Card.Title style={{marginTop:"0.5em"}} >Sala de Estar</Card.Title>
                                <Card.Img variant="top" src={mesa2} className="Principal-banner-image" />
                                <Card.Img variant="top" src={mesa3} className="Principal-banner-image" />
                                
                                <Card.Footer>
                                    <Button variant="top" style={{height:"2em", marginBottom:"0.5em", color:"#E87715"}}>
                                        <small onClick={()=>{ this.props.viewUser(1)}} >Veja mais...</small>
                                    </Button>
                                </Card.Footer>
                            </Card>

                            <Card>
                                <Card.Title style={{marginTop:"0.5em"}} >Sala de Estar</Card.Title>
                                <Card.Img variant="top" src={prateleira5} className="Principal-banner-image" />
                                <Card.Img variant="top" src={prateleira4} className="Principal-banner-image" />
                                
                                <Card.Footer>
                                    <Button variant="top" style={{height:"2em", marginBottom:"0.5em", color:"#E87715"}}>
                                        <small onClick={()=>{ this.props.viewUser(2)}} >Veja mais...</small>
                                    </Button>
                                </Card.Footer>
                            </Card>
                            
                        </CardDeck>
                        
                      
                    </Carousel.Caption>
                    
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                   <Image src={banner6} className="Principal-banner"  alt="Second" />
                    <Carousel.Caption>
                        <CardDeck style={{color:"#C1550C", maxWidth:"15em", marginLeft:"38.5%"}}>
                            <Card >
                                <Card.Title style={{marginTop:"0.5em"}} >Banheiro</Card.Title>
                                <Card.Img variant="top" src={banheiro1} className="Principal-banner-image" />
                                <Card.Img variant="top" src={banheiro2} className="Principal-banner-image" />
                                
                                <Card.Footer>
                                    <Button variant="top" style={{height:"2em", marginBottom:"0.5em", color:"#E87715"}}>
                                        <small onClick={()=>{ this.props.viewUser(3)}} >Veja mais...</small>
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={10000}>
                    <Image src={banner5} className="Principal-banner"  alt="Third" />
                    <Carousel.Caption>
                       <CardDeck style={{color:"#C1550C", maxWidth:"45em",marginLeft:"15%"}}>

                            <Card >
                                <Card.Title style={{marginTop:"0.5em"}} >Decorações</Card.Title>
                                <Card.Img variant="top" src={mesinha1} className="Principal-banner-image" />
                                <Card.Img variant="top" src={mesinha2} className="Principal-banner-image" />
                                
                                <Card.Footer>
                                    <Button variant="top" style={{height:"2em", marginBottom:"0.5em", color:"#E87715"}}>
                                        <small onClick={()=>{ this.props.viewUser(4)}} >Veja mais...</small>
                                    </Button>
                                </Card.Footer>
                            </Card>

                            <Card>
                                <Card.Title style={{marginTop:"0.5em"}} >Decorações</Card.Title>
                                <Card.Img variant="top" src={decoracao1} className="Principal-banner-image" />
                                <Card.Img variant="top" src={decoracao2} className="Principal-banner-image" />
                                
                                <Card.Footer>
                                    <Button variant="top" style={{height:"2em", marginBottom:"0.5em", color:"#E87715"}}>
                                        <small onClick={()=>{ this.props.viewUser(5)}} >Veja mais...</small>
                                    </Button>
                                </Card.Footer>
                            </Card>

                            <Card>
                                <Card.Title style={{marginTop:"0.5em"}} >Enfeites</Card.Title>
                                <Card.Img variant="top" src={buda} className="Principal-banner-image" />
                                <Card.Img variant="top" src={enfeite} className="Principal-banner-image" />
                                
                                <Card.Footer>
                                    <Button variant="top" style={{height:"2em", marginBottom:"0.5em",maxWidth:"40em", color:"#E87715"}}>
                                        <small onClick={()=>{ this.props.viewUser(6)}} >Veja mais...</small>
                                    </Button>
                                </Card.Footer>
                            </Card>
                            
                        </CardDeck>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>           
            </>
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
    viewUser: (view) => dispatch(viewUser(view)),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Carrossel)

