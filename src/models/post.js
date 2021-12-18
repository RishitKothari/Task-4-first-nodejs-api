const mongoose = require('mongoose')
const { Schema } = mongoose;

const postSchema = new Schema({
  title:  {type:String ,default:""}, // String is shorthand for {type: String}
  author: {type:String, default:""},
  content:   {type:String, default:""},
  date: { type: Date, default: Date.now },
  hidden: { type: Boolean, default: false }
});

module.exports = mongoose.model('Post', postSchema);
