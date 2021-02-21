import React, { Component } from "react";
import { connect } from 'react-redux';

import '../../styles/principal.css'

import NavbarP from "../../components/Navbar/Navbar"
import Carrossel from "../../components/Carrossel/Carrossel"
import Banheiro from "../../components/Produtos/Banheiro"
import Decoracao from "../../components/Produtos/Decoracao"
import DecoracaoMesa from "../../components/Produtos/DecoracaoMesa"
import Enfeites from "../../components/Produtos/Enfeites"
import Favoritos from "../../components/Produtos/Favoritos"
import SalaMesa from "../../components/Produtos/SalaMesa"
import SalaPrateleira from "../../components/Produtos/SalaPrateleira"

import { addToCart } from '../../store/actions/cart/cart'

const initialState = {
}

class Principal extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
    }
   
    render(props){

      var home =  this.props.usuario.view === 0 ? <Favoritos/> :
                  this.props.usuario.view === 1 ? <SalaMesa/> :
                  this.props.usuario.view === 2 ? <SalaPrateleira/> :
                  this.props.usuario.view === 3 ? <Banheiro/> :
                  this.props.usuario.view === 4 ? <DecoracaoMesa/> :
                  this.props.usuario.view === 5 ? <Decoracao/> :
                  this.props.usuario.view === 6 ? <Enfeites/> : <Favoritos/>  

      return(
          <>
            <NavbarP/>
            <Carrossel/>
            {home}
          </>
        
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
      addToCart: product => dispatch(addToCart(product)),
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Principal)