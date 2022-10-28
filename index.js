const express= require("express")
const app = express();

const conectarDB = require('./config/db');


app.listen(4000, () =>{

    console.log('El servidor esta corriendo en el puerto 4000')
})

conectarDB();
app.use(express.json());
app.use('/api/cerveza', require('./rutas/cervezas'));