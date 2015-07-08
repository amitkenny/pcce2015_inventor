Template.insertitem.onRendered(function(){
  this.$('select').material_select();
})

Template.insertitem.helpers({
  productOptions : function(){
    return Products.find({}).map(function(doc){
      return {label : doc.name, value : doc._id};
    })
  },
  itemsList : function(){
    return Items.find({}).map(function(doc){
      var product = Products.findOne({_id : doc.product}).name;
      return {product : product, barcode : doc.barcode, mfg: moment(doc.manufactureDate).format('DD-MM-YYYY'), pd : moment(doc.purchaseDate).format('DD-MM-YYYY'), exp: moment(doc.expiryDate).format('Do MMM YYYY'), price : doc.price, disc : doc.discount}
    });
  }
})
