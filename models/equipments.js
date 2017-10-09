var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var EquipmentsSchema = new Schema({
  category: {
    type: String
  },
  name: {
    type: String
  },
  img:{
    type: String
  },
  brand: {
    type: String
  },
  level: {
    type: Number
  },
  price: {
    type: Number
  }

});

var Equipments = mongoose.model("Equipments", EquipmentsSchema);
module.exports = Equipments;