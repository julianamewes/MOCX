const db = require('./MOCX')
const CadastrosSchema = mongoose.Schema({

   nome:{
        type:String,
        require: true
    },

    data_nascimento:{
        type: Date,
        require: true
    },

    cpf:{
        type:Number,
        require: true
    },

})

mongoose.model("cadastros", CadastrosSchema)
module.exports = Post