Products = new Mongo.Collection('products');
var productschema = new SimpleSchema({
name : {
  type: 'String',
  label: 'Name of Product',
  max : 300
},
description : {
  type : 'String',
  label : 'Description of Product',
  max : 1000
}
})

Products.attachSchema(productschema);

Items = new Mongo.Collection('items');
var itemschema =  new SimpleSchema({
product : {
  type: 'String',
  label : 'Product'
},
barcode : {
  type : 'String',
  label : 'Barcode',
  max : 1000
},
manufactureDate : {
  type : Date,
  label : 'Manufacturing Date'
},
purchaseDate : {
  type : Date,
  label : 'Purchase Date'
},
expiryDate : {
  type : Date,
  label : 'Expiry Date',
  optional : true
},
price  : {
  type : 'Number',
  decimal : true,
  label : 'Price',
  min : 1
},
discount : {
  type : 'Number',
  decimal : true,
  label : 'Discount %',
  optional : true
}
})
Items.attachSchema(itemschema);
