const { Schema, model, Types } = require('mongoose');

const proyectoSchema = Schema({
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
        type: Boolean,
        default: false
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
        ref: 'SolicitudEstudiante'
    }],
    avances: [{
        type: String,
        required: true
    }],
    fase: {
        type: String,
        required: true
    },
});

proyectoSchema.methods('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model('Proyecto', proyectoSchema);