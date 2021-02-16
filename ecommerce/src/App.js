import { Component } from "react";
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Principal from './pages/Principal/Principal';
// import { pageLogin, pageCadastrar, pageRecuperar } from './store/actions/pages/page'

class App extends Component{
  render(props){
    return (
        <Switch>
          <Route path="/">
            <Principal />
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