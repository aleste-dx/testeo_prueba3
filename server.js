const express = require('express');
const cors = require('cors');
const app = express();
const port = 8011;
require('./server/config/mongoose.config')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const userRoutes = require('./server/routes/User.routes');
const pirataRoutes = require('./server/routes/Pirata.route');
//const projectRoutes = require('./server/routes/Project.routes');
userRoutes(app);

pirataRoutes (app);
//projectRoutes(app);
app.listen(port, ()=> {
    console.log("The server listening on port " + port);
});