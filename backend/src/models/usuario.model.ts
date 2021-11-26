import { UsuarioType } from './../types/usuario.type';
import { model, Schema, Types } from "mongoose";

const usuarioSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    rol: { type: Types.ObjectId, ref: 'Rol' },
    activo: { type: Boolean, default: true }
}).method('toJson', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

export const UsuarioModel = model<UsuarioType>('Usuario', usuarioSchema, 'Usuarios');

