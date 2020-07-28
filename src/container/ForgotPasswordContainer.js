import React from 'react';
import { Button, Container, TextField, Checkbox, FormControlLabel, Box, Link } from '@material-ui/core';

function ForgotPasswordContainer () {

    return (
        <div>
            <Container maxWidth="sm">
                <Box boxShadow={3} bgcolor="#caf0f8" p={8} mt={20}>
                    <h1 style={{color: '#03045e'}}>Forgot Password</h1>
                    <form noValidate autoComplete="off">
                        <TextField required  id="emailForgotPassword" label="Email address" type="email"/> <br/> <br/>
                        <Button variant="contained" color="primary">Forgot Password</Button>
                    </form>
                </Box>
            </Container>
        </div>
    )
}
export default ForgotPasswordContainer;