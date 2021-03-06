const mongoose = require("mongoose"); // va a almacenar los datos de las ciudades "cities"
// import { Link, Link as Linkrouter } from 'react-router-dom';


const citiesSchema = new mongoose.Schema ({
    name:{type:String,require:true},
    country:{type:String,require:true},
    textShort:{type:String,require:true},
    description:{type:String,require:true},
    currency:{type:String,require:true},
    language:{type:String,require:true},
    demonym:{type:String,require:true},
    population:{type:String,require:true},
    timezone:{type:String,require:true},
    coordinates:{type:String,require:true},
    googlemaps:{type:String,require:true},
    continents:{type:String,require:true},
    region:{type:String,require:true},
    image:{type:String,require:true},
})

const City = mongoose.model("Cities",citiesSchema)

module.exports = City;