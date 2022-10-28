const Cerveza = require('../models/cerveza');

exports.CrearCerveza = async(req, res) =>{
    try{
        let cerveza;
        cerveza = new Cerveza(req.body);
        await unidad.save();
        console.log(cerveza);
        msg="cerveza dado de alta"
    }
    catch(error){
        console.log(error);
        res.status(500).send('Hay un error en crear cerveza')
    }
}

/*exports.ObtenerCerveza= async(req, res)=>{
    console.log('Hemos entrado a la ruta')
    try{
        const cerveza = await Cerveza.find();
        res.json(cerveza);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Hay un error en obtener cerveza')
    }
}*/
