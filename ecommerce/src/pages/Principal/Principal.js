import React, { Component } from "react";
import { connect } from 'react-redux';

import '../../styles/principal.css'


const initialState = {
}

class Principal extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
    }

    render(props){
      return(
        <div style={{ backgroundColor:'rgba(220,220,220,0.7)',}} >
            AAAAAAAA
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