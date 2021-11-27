const User = require('../models/User.model');
var response = {
    msg: "",
    exito: false

}

const PruebaCtrl = {}

PruebaCtrl.create = async(req, res) => {
    var user = new User({
        nombre: req.body.nombre,
        cedula: req.body.cedula, 
        email: req.body.email, 
        password: req.body.password, 
        rol: req.body.rol, 
        estado : req.body.estado   
    })
    await user.save()
    res.json({
        mensaje:'Usuario guardado.'
    })
}

PruebaCtrl.find = (req, res) => {
    User.find().then(users => {
        res.json(users);
    })
} 

PruebaCtrl.findId = (req, res) => {
    User.findById(req.params.id).then(users => {
        res.json(users);
    })
} 


PruebaCtrl.update = async(req, res) => {
    //var user = ({
    //    nombre: req.body.nombre,
    //    cedula: req.body.cedula, 
    //    email: req.body.email, 
    //    password: req.body.password, 
    //    rol: req.body.rol, 
    //    estado : req.body.estado   
    //})
    //await User.findByIdAndUpdate(req.params.id, user );   
    //res.send(user);
    await User.findByIdAndUpdate(req.params.id, req.body );    
    res.json({ mensaje:'Usuario Actualizado.'});
}


PruebaCtrl.delete = async(req, res) => {   
    await User.findByIdAndDelete(req.params.id);    
    res.json({ mensaje:'Usuario Borrado.'});
}




PruebaCtrl.obtener = (req, res) => {
    res.send('Funcionando GET');
}

PruebaCtrl.crear2 = (req, res) => {
    res.send('Funcionando POST Crear.');
}

PruebaCtrl.crear1 = async(req, res) => {
    const {nombre,apellido,salario} = req.body
    const NuevoRegistro = new user({
        nombre,
        apellido,
        salario
    })
    await NuevoRegistro.save()
    res.json({
        mensaje:'Empleado guardado.'
    })
}


PruebaCtrl.actualizar = (req, res) => {
    res.send('Funcionando PUT Actualizar.');
}

PruebaCtrl.borrar = (req, res) => {
    res.send('Funcionando DELETE Borrar.');
}

module.exports = PruebaCtrl