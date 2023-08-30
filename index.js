const Express = require('express');
const App = Express();
const PORT = 8000;
const bodyParser = require('body-parser');
const StudentRouter = require('./application/routes/student-router.js');

App.set('view engine', 'ejs');
App.set('views', __dirname + '/application/views');

App.use('/', StudentRouter);
App.use(bodyParser.urlencoded({ extended: true }));
App.use(Express.static(__dirname + '/assets'));

App.listen(PORT, () => console.log(`Connected to port ${PORT}`));