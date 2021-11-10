const { response, request } = require('express');
const { generarJWT } = require('../helpers/jwt');
const bcrypt = require('bcryptjs');

const login = async(req = request, resp = response) => {
    try {
        const { email, password } = req.body;
        const userLogged = await User.findOne({ email, password });
        if (userLogged) {
            const token = await generarJWT(userLogged._id);
            return resp.status(200).json({
                ok: true,
                user: userLogged,
                token
            });
        }
        return resp.status(400).json({
            ok: false,
            message: 'Usuario o contraseña incorrectos'
        });
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            ok: false,
            message: 'Hable con el administrador'
        });
    }
}

const singUp = async(req = request, resp = response) => {
    try {
        const { email, password } = req.body;
        const tempUser = await User.findOne({ email });
        if (tempUser) {
            return resp.status(400).json({
                ok: false,
                message: 'El usuario ya existe'
            });
        } else {
            const user = new User(req.body);
            const salt = bcrypt.genSaltSync();
            user.password = bcrypt.hashSync(password, salt);

            await user.save();
            const token = await generarJWT(userLogged._id);
            return resp.status(200).json({
                ok: true,
                message: 'Usuario creado correctamente',
                token
            });
        }
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            ok: false,
            message: 'Hable con el administrador'
        });
    }
}

module.exports = {
    login,
    singUp
}