const { Schema, model } = require('mongoose');

const rolSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
});

usuarioSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('Rol', rolSchema);