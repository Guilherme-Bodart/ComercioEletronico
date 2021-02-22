import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect, withRouter } from "react-router-dom";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import swal from 'sweetalert';

import logo from "../../assets/logo2.png"
import '../../styles/Login.css'

import { recuperarSenha } from '../../store/actions/usuarios/usuario'


const initialState = {
  pageL:0,
  senha: '',
  senhaConfirmada: '',
}

class NovaSenha extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
    }

    onChangePageL = (pageL) => {
      this.setState({
        pageL
     })
    }

    onChangeSenha = (event) => {
      this.setState({
        senha: event.target.value
     })
    }
  
    onChangeSenhaConfirmada = (event) => {
      this.setState({
        senhaConfirmada: event.target.value
     })
    }
  

    render(props){
      if(this.props.usuario.logado){
        return <Redirect to ="/home"/>
      }

      if(this.state.pageL==1){
        return <Redirect to ="/login"/>
      }
  
      return (
        <div className="App">
          <header className="App-header">
            
            <Image src={logo} className="App-logo " alt="logo" />
            <Form className="App-form " onSubmit={this.handleSubmit} >
              <Form.Label className="App-text" style={{width:"7em"}}>Trocar senha</Form.Label>
              <Form.Group controlId="formBasicEmail" className="App-form-group">
                <Form.Label style={{color:"#E87715", marginLeft:"-15em",marginTop:"1em"}}>Nova senha</Form.Label>
                <Form.Control type="password" placeholder="Nova senha"
                    className="App-form-control"  
                    onChange = {value => this.onChangeSenha(value)}/>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
  
              <Form.Group controlId="formBasicPassword" className="App-form-group">
                <Form.Label style={{color:"#E87715", marginRight:"10em"}}>Confirmação da Senha</Form.Label>
                <Form.Control type="password" placeholder="Confirmar nova senha" 
                className="App-form-control" 
                onChange = {value => this.onChangeSenhaConfirmada(value)}/>
              </Form.Group>
              <Button variant="outline-light" className="App-button-login" 
              style={{color:"#E87715", borderColor:"#C1550C"}} 
              onClick = { async () => {
                    if(this.state.senha != '' && this.state.senhaConfirmada != ''){
                      if(this.state.senha === this.state.senhaConfirmada){
                        await this.props.recuperarSenha({senha:this.state.senha, token: this.props.match.params.token})
                      }
                      else{
                        swal({
                          title: "Error",
                          text: 'Falha no envio, senhas não coincidem',
                          icon: "error",
                        });
                      }
                    }
                    else{
                      swal({
                        title: "Error",
                        text: 'Falha no envio, campos vazios',
                        icon: "error",
                      });
                    }
                  }
                }
                >
                <p className="App-text-button">Alterar</p>
              </Button>
              <Button variant="outline-secondary" className="App-button-login" 
                          onClick={ () => {
                            this.onChangePageL(1)
                        }
                      }
                      >
                <p className="App-text-button">Voltar ao Login</p>
              </Button>
              
            </Form>
  
          </header>
        </div>
        
        
      )
    }
}

const mapStateToProps = ({ usuario }) => {
    return {
      usuario
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      recuperarSenha: usuario => dispatch(recuperarSenha(usuario)),
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NovaSenha))