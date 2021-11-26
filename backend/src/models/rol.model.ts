import { RolType } from './../types/rol.type';
import { model, Schema } from "mongoose";

const rolSchema = new Schema({
    nombre: { type: String, required: true }
});

rolSchema.method('toJson', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

export const RolModel = model<RolType>('Rol', rolSchema, 'Roles');