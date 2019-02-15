var express = require('express');
var exphbs  = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 8080;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static("public"));

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});