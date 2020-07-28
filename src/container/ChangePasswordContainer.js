import React from 'react';
import { Button, Container, TextField, Checkbox, FormControlLabel, Box, Link } from '@material-ui/core';

function ChangePasswordContainer () {

    return (
        <div>
            <Container maxWidth="sm">
                <Box boxShadow={3} bgcolor="#caf0f8" p={8} mt={20}>
                    <h1 style={{color: '#03045e'}}>Change Password</h1>
                    <form noValidate autoComplete="off">
                        <TextField required  id="emailChangePassword" label="Email address" type="email"/> <br/> <br/>
                        <TextField required  id="oldPasswordChangePassword" label="Old password" type="password"/> <br/> <br/>
                        <TextField required  id="newPasswordChangePassword" label="New password" type="password"/> <br/> <br/>
                        <Button variant="contained" color="primary">Change Password</Button>
                    </form>
                </Box>
            </Container>
        </div>
    )
}
export default ChangePasswordContainer;