const express = require('express')
const app = express()



app.post('/', (req, res) => {
    var emailAddress = req.body.emailAddress
    var password = req.body.password
})


app.post('/signup', (req, res) => {
    // signup
})


app.post('/forgotpassword', (req, res) => {
    // forgotpassword
})


app.post('/changepassword', (req, res) => {
    // changepassword
})




port = 8000;
app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))