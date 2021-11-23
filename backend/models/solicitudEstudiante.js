const { Schema, model, Types } = require('mongoose');

const solicitudEstudianteSchema = Schema({
    descripcion: {
        type: String,
        required: true,
    },
    estudiante: {
        type: Types.ObjectId,
        ref: 'Usuario',
    }
});

solicitudEstudianteSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model('SolicitudEstudiante', solicitudEstudianteSchema);