const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = 90;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});