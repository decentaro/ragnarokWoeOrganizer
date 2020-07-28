import React from 'react';
import { Button, Container, TextField, Checkbox, FormControlLabel, Box } from '@material-ui/core';
import { Link } from "react-router-dom";



function LoginContainer(props) {
    return (
        <Container maxWidth="sm">
                <Box boxShadow={5} bgcolor="#caf0f8" p={8} mt={20}>
                    <h1 style={{color: '#03045e'}}>Log in</h1>
                    <form  autoComplete="off" >
                        <TextField 
                            required  
                            id="emailAddress" 
                            label="Email Address" 
                            type="email"
                            value={props.emailAddress}
                        /> 
                        <br/> <br/>
                        <TextField 
                            required  
                            id="password" 
                            label="Password" 
                            type="password"
                            value={props.password}
                        /> 
                        <br/> <br/>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    //checked={}
                                    //onChange={}
                                    name="rememberMeCheckBox"
                                    color="primary"
                                />
                            }
                            label="Remember me"
                        /> <br/>
                        <Box display="inline" p={3}>
                            <Link style={{textDecoration: 'none', color: '#03045e'}} to="/forgotpassword">
                                Forgot Password?
                            </Link>
                        </Box>
                        <Box display="inline">
                            <Link style={{textDecoration: 'none', color: '#03045e'}} to="/signup">
                                Create Account
                            </Link>
                        </Box> <br/> <br/>
                        <hr />
                        <Button onSubmit={props.handleSubmit} method="POST" variant="contained" size="large" color="primary">Log in</Button>
                    </form>
                </Box>
            </Container>
    )
}
export default LoginContainer;