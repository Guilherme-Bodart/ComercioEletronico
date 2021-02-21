import React, { Component } from "react";
import { connect } from 'react-redux';

import '../../styles/principal.css'


import NavbarP from "../../components/Navbar/Navbar"
import Carrossel from "../../components/Carrossel/Carrossel"
import Favoritos from "../../components/Favoritos/Favoritos"

const initialState = {
}

class Principal extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
    }

    render(props){
      return(
          <>
            <NavbarP/>
            <Carrossel/>
            <Favoritos/>
          </>
        
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