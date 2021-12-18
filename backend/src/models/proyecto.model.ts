import { model, Schema, Types } from "mongoose";

const proyectoSchemma = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    lider: {
        type: Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    estado: {
        type: String,
        default: "Activo"
    },
    objetivosEspecificos: [{
        type: String,
        required: true
    }],
    presupuesto: {
        type: Number,
        required: true
    },
    estudiantes: [{
        type: Types.ObjectId,
        ref: 'Usuario',
        required: true
    }],
    solicitudesEstudiantes: [{
        type: Types.ObjectId,
        ref: 'Solicitud'
    }],
    avances: [{
        type: String,
        required: true
    }],
    fase: {
        type: String,
        required: true
    },
}).method('toJson', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

export const ProyectoModel = model('Proyecto', proyectoSchemma, 'Proyectos');