import React from 'react';
import LoginContainer from './container/LoginContainer'
import SignUpContainer from './container/SignUpContainer'
import ForgotPasswordContainer from './container/ForgotPasswordContainer'
import ChangePasswordContainer from './container/ChangePasswordContainer'
import { BrowserRouter as Router, Route } from "react-router-dom";




const App = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={LoginContainer}></Route>
        <Route path="/forgotpassword" component={ForgotPasswordContainer}></Route>
        <Route path="/signup" component={SignUpContainer}></Route>
        <Route path="/changepassword" component={ChangePasswordContainer}></Route>
      </Router>
    </div>
  );
}

export default App;
