var express = require("express");
var app = express();
app.set('view engine', 'ejs');

// ROUTES
// root
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.log('SERVER STARTED!')
});
