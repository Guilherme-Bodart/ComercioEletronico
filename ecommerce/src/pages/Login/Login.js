import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import logo from "../../assets/logo2.png"
import '../../styles/Login.css'

import { autenticarUsuario } from '../../store/actions/usuarios/usuario'

const initialState = {
  pageC:1,
  pageE:1

}

class Principal extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
    }

    onChangePageC = (pageC) => {
      this.setState({
        pageC
     })
    }

    onChangePageE = (pageE) => {
      this.setState({
        pageE
     })
    }

    onChangeEmail = (event) => {
      this.setState({
        email: event.target.value
      })
    }
  
    onChangeSenha = (event) => {
      this.setState({
        senha: event.target.value
     })
    }

    render(props){
      if(this.props.usuario.logado){
        return <Redirect to ="/home"/>
      }
      if(this.state.pageC==0){
        return <Redirect to ="/cadastro"/>
      }
      if(this.state.pageE==2){
        return <Redirect to ="/recuperar"/>
      }
  
      return (
        <div className="App">
          <header className="App-header">
            
            <Image src={logo} className="App-logo " alt="logo" />
            <Form className="App-form " onSubmit={this.handleSubmit} >
              <Form.Label className="App-text">Fazer Login</Form.Label>
              <Form.Group controlId="formBasicEmail" className="App-form-group">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Entre com seu e-mail"
                    className="App-form-control"  
                      onChange = {value => this.onChangeEmail(value)}
                    />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
  
              <Form.Group controlId="formBasicPassword" className="App-form-group">
                <Form.Label >Senha</Form.Label>
                <Form.Control type="password" placeholder="Senha" 
                className="App-form-control" 
                  onChange = {value => this.onChangeSenha(value)}
                />
              </Form.Group>
              <Button variant="outline-light" className="App-button-login" 
              style={{color:"#E87715", borderColor:"#C1550C"}} 
                onClick = { async () =>
                  {
                      var usuario = {email:this.state.email,senha:this.state.senha}
                      await this.props.autenticarUsuario(usuario)
                  }
                }
                >
                <p className="App-text-button">Entrar</p>
              </Button>
              <Button variant="outline-secondary" className="App-button-login" 
                      onClick={ () => {
                          this.onChangePageC(0)
                        }
                      }
                      >
                <p className="App-text-button">Crie sua conta</p>
              </Button>
              
            </Form>
            <Button variant="link" className="App-button-link" style={{color:"#E87715"}}
                      onClick={ () => {
                        this.onChangePageE(2)
                    }}
                    >
                <p className="App-text-button">Quer mudar a senha ou Esqueceu sua senha?</p>
              </Button>
  
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
      autenticarUsuario: usuario => dispatch(autenticarUsuario(usuario)),
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Principal)