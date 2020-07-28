import {Component} from 'react'
import axios from 'axios';
import LoginContainer from '../container/LoginContainer'
import { Alert } from '@material-ui/core';



class Login extends Component {
    constructor() {
        super()
        this.state = {
            emailAddress: "",
            password: ""

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    handleSubmit(e) {
        e.preventDefault();
        axios({
            method: "POST", 
            url:"http://localhost:8000/", 
            data:  this.state
          }).then((response)=>{
            if (response.data.status === 'success'){
              alert("Message Sent."); 
              this.resetForm()
            }else if(response.data.status === 'fail'){
              alert("Message failed to send.")
            }
          })
    }
    


    resetForm(){
        this.setState({emailAddress: '', password: ''})
     }

    

    render() {
        <LoginContainer 
            handleSubmit={this.handleSubmit}
            {...this.state}
        />
    }
   



}

export default Login;