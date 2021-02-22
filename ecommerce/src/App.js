import { Component } from "react";
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Principal from './pages/Principal/Principal';
import Login from './pages/Login/Login';
import Cadastro from './pages/Login/Cadastro';
import EditarUsuario from './pages/Login/EditarUsuario';
import Recuperar from './pages/Recuperar/Recuperar';
import NovaSenha from './pages/Recuperar/NovaSenha';

class App extends Component{
  render(props){
    return (
        <Switch>
          <Route exact path="/" > {/* Path vazio vai pra home */}
            <Redirect to="/home">              
            </Redirect>
          </Route>
          <Route exact path="/home">
            <Principal/>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/cadastro">
            <Cadastro />
          </Route>
          <Route exact path="/recuperar">
            <Recuperar />
          </Route>
          <Route exact path="/recuperar/novasenha"> {/*Colocar o token dps */}
            <NovaSenha />
          </Route>
          <Route exact path="/editar">
            <EditarUsuario />
          </Route>
          <Route > {/* Qualquer path que não existe vai pra home */}
            <Redirect to="/home">
            </Redirect>
          </Route>
          
        </Switch>
    )
  }
}

const mapStateToProps = ({  }) => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
      
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)