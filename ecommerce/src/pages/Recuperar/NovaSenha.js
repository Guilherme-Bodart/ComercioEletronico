import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import logo from "../../assets/logo2.png"
import '../../styles/Login.css'

const initialState = {
  pageL:0
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

    render(props){
      // if(this.props.page.page === "cadastro"){
      //   return <Redirect to ="/cadastro"/>
      // }
      // if(this.props.page.page === "enviarEmail"){
      //   return <Redirect to ="/enviarEmail"/>
      // }
      // if(this.state.logado && this.props.usuario.permissao==2){
      //   return <Redirect to ="/admin"/>
      // }
      // if(this.state.logado && this.props.usuario.permissao==1){
      //   return <Redirect to ="/user"/>
      // }

      if(this.state.pageL==1){
        return <Redirect to ="/login"/>
      }
  
      return (
        <div className="App">
          <header className="App-header">
            
            <Image src={logo} className="App-logo " alt="logo" />
            <Form className="App-form " onSubmit={this.handleSubmit} >
              <Form.Label className="App-text" style={{width:"9em"}}>Recuperar senha</Form.Label>
              <Form.Group controlId="formBasicEmail" className="App-form-group">
                <Form.Label style={{color:"#E87715", marginLeft:"-15em",marginTop:"1em"}}>Nova senha</Form.Label>
                <Form.Control type="email" placeholder="Nova senha"
                    className="App-form-control"  
                    // onChange = {value => this.onChangeEmail(value)}
                    />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
  
              <Form.Group controlId="formBasicPassword" className="App-form-group">
                <Form.Label style={{color:"#E87715", marginRight:"10em"}}>Confirmação da Senha</Form.Label>
                <Form.Control type="password" placeholder="Confirmar nova senha" 
                className="App-form-control" 
                // onChange = {value => this.onChangeSenha(value)}
                />
              </Form.Group>
              <Button variant="outline-light" type="submit" className="App-button-login" 
              style={{color:"#E87715", borderColor:"#C1550C"}} 
                // onClick = { async () =>
                //   {
                //     var idx = this.state.email.indexOf('@');
                //     if(idx != -1){
                //       var usuario = {email:this.state.email,senha:this.state.senha}
                //       await this.props.autenticarUsuario(usuario)
                //       await this.onChangeLogado(this.props.usuario.logado)
                //     }
                //   }
                // }
                >
                <p className="App-text-button">Entrar</p>
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

const mapStateToProps = ({ }) => {
    return {
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(NovaSenha)