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

class Recuperar extends Component {
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
      
      if(this.state.pageL==1){
        return <Redirect to ="/login"/>
      }

      return (
        <div className="App">
          <header className="App-header">
            
            <Image src={logo} className="App-logo " alt="logo" />
            <Form className="App-form " onSubmit={this.handleSubmit} >
              <Form.Label className="App-text" style={{width:"10em"}}>E-mail da sua conta</Form.Label>
              <Form.Group controlId="formBasicEmail" className="App-form-group">
                <Form.Label style={{color:"#E87715", marginTop:"2em", marginLeft:"-12em"}}>Informe seu e-mail</Form.Label>
                <Form.Control type="email" placeholder="Entre com seu e-mail"
                    className="App-form-control"  
                    // onChange = {value => this.onChangeEmail(value)}
                    />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
  
              <Button variant="outline-light" type="submit" className="App-button-login" 
              style={{color:"#E87715", borderColor:"#C1550C", marginTop:"6em"}} 
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
                <p className="App-text-button">Enviar e-mail de recuperação</p>
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
  export default connect(mapStateToProps, mapDispatchToProps)(Recuperar)