const express =  require('express');
const chats = require('./data/data');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.get('/api/chats', (req, res) => {
    res.send(chats);

},);

app.get('/api/chats/:id', (req, res) => {
    const singlechat = chats.find((c) => c._id === req.params.id);
    res.send(singlechat);
});


app.listen(process.env.PORT || 5000, () => console.log('Server started on port 5000'));