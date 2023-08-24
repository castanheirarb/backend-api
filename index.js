const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const port = 3008;
let path = require('path');
const e = require('express');
const app = express();

const login = 'admin'
const password = 'admin'

app.use(session({
    secret: 'mysecret',
    resave: false, // Define a opção resave como false
    saveUninitialized: true 
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

    app.post('/', (req, res) => {
        
        if (req.body.login == login && req.body.password == password) {
            //logou
            req.session.login = login;
            res.render('logado')
            console.log('Logado com sucesso')
         }else{
            console.log('Login ou senha incorretos')
             res.render('index')
         }

    })
    

    app.get('/', (req, res) => {
        if (req.session.login) {
            res.render('logado')
        }else{
            res.render('index')
        }
        
    
    })

 app.listen(port, () => {
        console.log(`Server running on port: ${port}`);
 });