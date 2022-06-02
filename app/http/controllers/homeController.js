const Menu = require("../../models/menu");

function homeController() {
  return {
    async index(req, res) {
     const products = await Menu.find()
     return res.render("home", { products: products });
    },
    async productId(req, res) {
      const {id} = req.params
      const product = await Menu.findOne({brand: id})
      
      if(product) {
        return res.render('details',{product: product} )
      }
    }
  };
}

module.exports = homeController;
