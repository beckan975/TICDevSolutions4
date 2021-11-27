const mongoose = require('mongoose')

const url = 'mongodb+srv://ticdevsolutions:ticdevsolutions123456@cluster0.785ky.mongodb.net/ciclo4?retryWrites=true&w=majority'

//const url = ('mongodb://localhost/ensayo')

//const url = ('mongodb+srv://mean_user:Bucefalo_1205.@cluster0.f9i98.mongodb.net/TicDevs?authSource=admin&replicaSet=atlas-138iwx-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true')

//const url = 'mongodb://localhost/crud'

mongoose.connect(url, {
    useNewUrlParser:true,
    useUnifiedTopology:true   
})
    .then(()=>console.log('Base de datos conectada.'))
    .catch((e)=>console.log('Error: ' + e))

module.exports = mongoose
