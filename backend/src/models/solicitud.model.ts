import { model, Schema, Types } from "mongoose";

const solicitudSchema = new Schema({
    descripcion: { type: String, required: true },
    fecha: { type: Date, required: true },
    estado: { type: String, required: true },
    usuario: { type: Types.ObjectId, ref: 'Usuario' },
}).method('toJson', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

export const SolicitudModel = model('Solicitud', solicitudSchema);
