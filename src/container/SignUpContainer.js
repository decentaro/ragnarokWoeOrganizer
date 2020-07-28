import React from 'react';
import { Button, Container, TextField, Checkbox, FormControlLabel, Box } from '@material-ui/core';
import { Link } from "react-router-dom";

function SignUpContainer () {

    return (
        <div>
            <Container maxWidth="sm">
                <Box boxShadow={3} bgcolor="#caf0f8" p={8} mt={20}>
                    <h1 style={{color: '#03045e'}}> Sign Up</h1>
                    <form noValidate autoComplete="off">
                        <TextField required  id="emailSignup" label="Email address" type="email"/> <br/> <br/>
                        <TextField required  id="passwordSignup" label="Password" type="password" type="password"/> <br/> <br/>
                        <TextField required  id="confirmPasswordSignup" label="Confirm password" type="password"/> <br/> <br/>
                        <Box component="div" display="inline" p={2}>
                            <Link style={{textDecoration: 'none', color: '#03045e'}} to="/">
                                Already have an account? Log in
                            </Link>
                        </Box> <br/> <br/>
                        <hr />
                        <Button variant="contained" color="primary">Sign Up</Button>
                    </form>
                </Box>
            </Container>
        </div>
    )
}
export default SignUpContainer;