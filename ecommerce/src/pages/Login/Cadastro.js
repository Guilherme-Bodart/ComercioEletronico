import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import swal from 'sweetalert';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

import Login from "../Login/Login"

import { cpfMask } from "../../functions/mask"
import logo from "../../assets/logo2.png"
import '../../styles/Login.css'


const initialState = {
    email: '',
    senha: '',
    senhaConfirmada: '',
    nome: '',
    dataNascimento: '',
    telefone: '',
    cpf: '',
    endereco: '',
    pageL:0,
}

class Principal extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
    }

    onChangeNome = (event) => {
        this.setState({
          nome: event.target.value
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
    
      onChangeSenhaConfirmada = (event) => {
        this.setState({
          senhaConfirmada: event.target.value
       })
      }
    
      onChangeTelefone = (event) => {
        this.setState({
          telefone: event.target.value
       })
      }
    
      onChangeDataNascimento = (event) => {
        this.setState({
          dataNascimento: event.target.value
       })
      }
    
      onChangeCPF = (event) => {
        this.setState({
          cpf: cpfMask(event.target.value)
       })
      }
    
      onChangeEndereco = (event) => {
        this.setState({
          endereco: event.target.value
       })
      }

      onChangePageL = (pageL) => {
        this.setState({
          pageL
       })
      }
    
      handleSubmit(event){
        event.preventDefault()    
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

      if(this.state.pageL==1){
        return <Redirect to ="/login"/>
      }

      let data_atual = new Date();
      const data_max = (data_atual.getFullYear()-17)+'-01-01';

      return (
        <div className="App">
          <header className="App-header">
            
            <Image src={logo} className="App-logo " alt="logo" />
            
            <Form className="App-form-cadastro" onSubmit={this.handleSubmit} >
            
                <Form.Label className="App-text" style={{marginLeft:"-12em"}}>Cadastro</Form.Label>
                <Col>
                    <Row >
                        <Col>
                        <Form.Group controlId="formBasicEmail" className="App-form-groupC">
                            <Form.Label style={{color:"#E87715", marginLeft:"-10em"}}>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Entre com seu e-mail"
                                className="App-form-control"  
                                onChange = {value => this.onChangeEmail(value)}
                                />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group controlId="formBasicPassword" className="App-form-groupC">
                            <Form.Label  style={{color:"#E87715", marginLeft:"-10em"}}>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Nome completo" 
                            className="App-form-control" 
                            onChange = {value => this.onChangeNome(value)}
                            />
                        </Form.Group>
                        </Col>
                        
                        
                    </Row>
                    <Row >
                        <Col>
                        <Form.Group controlId="formBasicEmail" className="App-form-groupC">
                            <Form.Label style={{color:"#E87715", marginLeft:"-10.5em"}}>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha da conta"
                                className="App-form-control"  
                                onChange = {value => this.onChangeEmail(value)}
                                />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group controlId="formBasicPassword" className="App-form-groupC">
                            <Form.Label  style={{color:"#E87715", marginLeft:"-5.5em"}}>Confirmar senha</Form.Label>
                            <Form.Control type="password" placeholder="Confirmação de senha" 
                            className="App-form-control" 
                            onChange = {value => this.onChangeSenhaConfirmada(value)}
                            />
                        </Form.Group>
                        </Col>
                        
                        
                    </Row>
                    <Row >
                        <Col>
                        <Form.Group controlId="formBasicEmail" className="App-form-groupC">
                            <Form.Label style={{color:"#E87715", marginLeft:"-9em"}}>Endereço</Form.Label>
                            <Form.Control type="text" placeholder="Endereço"
                                className="App-form-control"  
                                onChange = {value => this.onChangeEndereco(value)}
                                />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group controlId="formBasicPassword" className="App-form-groupC">
                            <Form.Label style={{color:"#E87715", marginLeft:"-4em"}}>Data de nascimento</Form.Label>
                            <Form.Control type="date"
                            className="App-form-control" 
                            onChange = {value => this.onChangeDataNascimento(value)}
                            />
                        </Form.Group>
                        </Col>
                        
                        
                    </Row>
                    <Row >
                        <Col>
                        <Form.Group controlId="formBasicEmail" className="App-form-groupC">
                            <Form.Label style={{color:"#E87715", marginLeft:"-9.5em"}}>Telefone</Form.Label>
                            <Form.Control type="number" placeholder="Telefone de contato" pattern= "\([0-9]{2}\)[\s][0-9]{4}-[0-9]{4,5}"
                                className="App-form-control"  
                                onChange = {value => this.onChangeTelefone(value)}
                                />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group controlId="formBasicPassword" className="App-form-groupC">
                            <Form.Label  style={{color:"#E87715", marginLeft:"-11em"}}>CPF</Form.Label>
                            <Form.Control type="text" placeholder="CPF"  maxLength='14' value={this.state.cpf}
                            className="App-form-control" 
                            onChange = {value => this.onChangeCPF(value)}
                            />
                        </Form.Group>
                        </Col>
                        
                        
                    </Row>
                </Col>
              
              <Button variant="outline-secondary" className="App-button-login" 
                      onClick={ () => {
                            this.onChangePageL(1)
                        }
                      }
                >
                <p className="App-text-button">Voltar para o login</p>
              </Button>
              <Button variant="outline-secondary" className="App-button-login" style={{color:"#E87715", borderColor:"#C1550C", marginLeft:"2em"}}
                onClick = { async () => {
                    var idx = this.state.email.indexOf('@');
                    if(this.state.dataNascimento <= data_max && this.state.nome != '' && this.state.dataNascimento != '' && this.state.email != '' && idx != -1 
                    && this.state.senha != '' && this.state.senhaConfirmada != '' && this.state.cpf != ''){
                      if(this.state.senha === this.state.senhaConfirmada){
                        if(this.state.cpf.replace('-', '').replaceAll('.', '')){
                          await this.props.criarUsuario({nome:this.state.nome, email:this.state.email, dataNascimento:this.state.dataNascimento, 
                                                telefone:this.state.telefone, senha:this.state.senha, endereco:this.state.endereco, 
                                                cpf:this.state.cpf, permissao:1,})
                        }else{
                          swal({
                            title: "Error",
                            text: 'Falha no envio, CPF inválido',
                            icon: "error",
                          });
                        }
                      }
                      else{
                        swal({
                          title: "Error",
                          text: 'Falha no envio, senhas não coincidem',
                          icon: "error",
                        });
                      }
                    }
                }
                }>
                <p className="App-text-button">Criar Conta</p>
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
  export default connect(mapStateToProps, mapDispatchToProps)(Principal)