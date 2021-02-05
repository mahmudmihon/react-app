import initDB from '../../helpers/initDB'
import Product from '../../models/Product'

initDB()

export default (req,res)=>{
    
    const { id, quantity } = req.body
    const productToBeUpdated = Product.findOne({_id: id})
    console.log(productToBeUpdated)
    //productToBeUpdated.quantity = (productToBeUpdated.quantity - product.quantity)
    /*
    Product.findOneAndUpdate(
        {_id:productToBeUpdated._id},
        {$push:{products: productToBeUpdated}}
    )
    */
}