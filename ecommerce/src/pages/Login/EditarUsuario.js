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

import { editarUsuario } from '../../store/actions/usuarios/usuario'


const initialState = {
    email: '',
    nome: '',
    dataNascimento: '',
    telefone: '',
    cpf: '',
    endereco: '', 
    pageL:0,
    pageH:0,
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

      onChangePageH = (pageH) => {
        this.setState({
          pageH
       })
      }
    
      handleSubmit(event){
        event.preventDefault()    
      }
      
      preencheState(cpf, dataNascimento, email, endereco, nome, telefone){
        this.setState({
          cpf,
          dataNascimento: dataNascimento.substr(0, 10),
          email,
          endereco,
          nome,
          telefone
        })
      }

      async componentDidMount(){
        await this.preencheState(this.props.usuario.cpf, this.props.usuario.dataNascimento, this.props.usuario.email, this.props.usuario.endereco, this.props.usuario.nome, this.props.usuario.telefone)

      }


    render(props){
      if(this.state.pageL==1){
        return <Redirect to ="/home"/>
      }

      if(this.state.pageH==2){
        return <Redirect to ="/home"/>
      }

      let data_atual = new Date();
      const data_max = (data_atual.getFullYear()-17)+'-01-01';

      return (
        <div className="App">
          <header className="App-header">
            
            <Image src={logo} className="App-logo " alt="logo" />
            
            <Form className="App-form-cadastro" onSubmit={this.handleSubmit} style={{height:'25em'}}>
            
                <Form.Label className="App-text" style={{marginLeft:"-10em"}}>Editar Usuário</Form.Label>
                <Col>
                    <Row >
                        <Col>
                        <Form.Group controlId="formBasicEmail" className="App-form-groupC">
                            <Form.Label style={{color:"#E87715", marginLeft:"-10em"}}>E-mail</Form.Label>
                            <Form.Control type="email" value={this.state.email}
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
                            <Form.Control type="text" value={this.state.nome}
                            className="App-form-control" 
                            onChange = {value => this.onChangeNome(value)}
                            />
                        </Form.Group>
                        </Col>
                        
                        
                    </Row>
                    <Row >
                        <Col>
                        <Form.Group controlId="formBasicEmail" className="App-form-groupC">
                            <Form.Label style={{color:"#E87715", marginLeft:"-9em"}}>Endereço</Form.Label>
                            <Form.Control type="text" value={this.state.endereco}
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
                            <Form.Control type="date" value={this.state.dataNascimento}
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
                            <Form.Control type="number" value={this.state.telefone}
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
                            <Form.Control type="text"  maxLength='14' value={this.state.cpf}
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
                <p className="App-text-button">Voltar à página principal</p>
              </Button>
              <Button variant="outline-secondary" className="App-button-login" style={{color:"#E87715", borderColor:"#C1550C", marginLeft:"2em"}}
                onClick = { async () => {
                    var idx = this.state.email.indexOf('@');
                    if(this.state.dataNascimento <= data_max && this.state.nome != '' && this.state.dataNascimento != '' && this.state.email != '' && idx != -1 
                    && this.state.senha != '' && this.state.senhaConfirmada != '' && this.state.cpf != ''){
                      if(this.state.cpf.replace('-', '').replaceAll('.', '')){
                        await this.props.editarUsuario({nome:this.state.nome, email:this.state.email, dataNascimento:this.state.dataNascimento, 
                                              telefone:this.state.telefone, endereco:this.state.endereco, 
                                              cpf:this.state.cpf, permissao:1,})
                                              this.onChangePageH(2)
                                              
                        
                        
                      }else{
                        swal({
                          title: "Error",
                          text: 'Falha no envio, CPF inválido',
                          icon: "error",
                        });
                      }
                    }
                  }
                }>
                <p className="App-text-button">Alterar dados</p>
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
      editarUsuario: usuario => dispatch(editarUsuario(usuario)),
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Principal)