import { Schema, model } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const productSchema = new Schema ({
    title: {
        type: String,
        required: true //si os i se ingresa titulo (atributo requerido)
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        index: true
    },
    status: {
        type: Boolean,
        default: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true 
    },
    thumbnail: {
        default: []
    }
})

productSchema.plugin(mongoosePaginate) //agrego a pagiante como agregado del schema products
const productModel = model("products", productSchema)
export default productModel