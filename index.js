const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const users = [
  {
    username: 'senha',
    password: 'senha'
  }
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Request body:', req.body);
  const user = users.find(u => u.username === username && u.password === password);
  console.log('User found:', user);
  if (user) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
});

app.listen(3008, () => console.log('3008'));
