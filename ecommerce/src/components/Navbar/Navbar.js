import React , { Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Image from 'react-bootstrap/Image'
import { RiShoppingCartLine } from "react-icons/ri"

import logo from "../../assets/logo2.png"
import '../../styles/principal.css'

import { logout, viewUser } from '../../store/actions/usuarios/usuario'

const initialState = {
}

class NavbarP extends Component {

  constructor(props) {
    super(props)
    this.state = initialState
  }

  onChangePageL = (pageL) => {
    this.setState({
      pageL
   })
  }

  render(props) {
    // var lista = this.props.usuario.nome.split(" ")
    // var nome1 = lista[0] ? lista[0] : ""
    // var nome2 = lista[1] ? lista[1] : ""

    if(this.state.pageL==1){
      return <Redirect to ="/login"/>
    }

    var qtdCompras = 5
    var logado = true ? <Dropdown className="ml-auto">
                          <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{fontSize:"1em",marginRight:"0.1em", color:"#E87715"}}>
                            GUIGA
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item 
                              onClick={ () => {
                                this.props.logout()
                              }}>Logout</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>  
                      : <Button className="ml-auto" variant="dark" style={{fontSize:"1em",marginRight:"0.1em", color:"#E87715"}} 
                          onClick={ () => {
                            this.onChangePageL(1)
                        }}>Olá, faça seu login</Button>

    return (
            <>
             <Navbar bg="dark" variant="dark" style={{width:"100%", minWidth:"60em"}}>
                <a href="/home" onClick={()=>{ this.props.viewUser(0)}}>
                  <Image src={logo} className="Principal-logo" alt="logo" style={{marginLeft:"0.5em"}}/>
                </a>
                <Nav >
                <Nav.Link href="/home/produtos" onClick={()=>{this.props.viewUser(0)}} style={{fontSize:"1.1em", color:"#E87715", marginLeft:"2em", }}>Produtos</Nav.Link>               
                <FormControl type="text" placeholder="Search" style={{ width:"20em", marginLeft:"1em"}} />
                <Button variant="dark" style={{color:"#E87715", borderColor:"#C1550C", marginLeft:"0.5em"}}>Search</Button>
                </Nav>
                  {logado}
                <Button variant="dark" style={{fontSize:"1.5em", marginRight:"1em", color:"#E87715"}}>
                  <RiShoppingCartLine style={{ fontSize:"1.7em", color:"#E87715"}} /> {qtdCompras}
                </Button>
            </Navbar>            
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
export default connect(mapStateToProps, mapDispatchToProps)(NavbarP)

