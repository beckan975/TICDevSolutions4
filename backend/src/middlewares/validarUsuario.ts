import { NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export const validarUsuario = (req, res, next: NextFunction) => {
    const token = req.header('x-token');

    if (!token) {
        return res.status(400).send({
            ok: false,
            msg: "No hay token en la peticion"
        });
    }

    try {
        const { uid, rol } = jwt.verify(token, process.env.JWT_SECRET);
        req.uid = uid;
        req.rol = rol;
        next();
    } catch (error) {
        return res.status(401).send({
            ok: false,
            msg: "Token incorrecto"
        });
    }

}
