const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nombre: { type: String, require: true },
    cedula: {type: String, require: true },
    email: { type: String, require: true},
    password: { type: String, require: true},
    rol: { type: String, require: true},
    estado: { type: String, require: true}
    
},
{timestamps: true, versionKey: false})

module.exports = mongoose.model('user', UserSchema);