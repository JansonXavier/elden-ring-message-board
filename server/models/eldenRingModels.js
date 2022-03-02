const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config();

const MONGO_URI = process.env.DB_URI

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'EldenRingMessageBoard'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

// sets a schema for the 'categories' collection
const categorySchema = new Schema({
  name: {type: String, required: true},
  thread_id: {
    // type of ObjectId makes this behave like a foreign key referencing the 'thread' collection
    type: Schema.Types.ObjectId,
    ref: 'thread'
  }
});
// creates a model for the 'categories' collection that will be part of the export
const Category = mongoose.model('category', categorySchema);

const threadSchema = new Schema({
  topic: {type: String, required: true},
  created_by: {type: String, required: true},
  msgs: {type: Number, required: true},
  last_post: {type: String, required: true},
});
const Thread = mongoose.model('thread', threadSchema);

const messageSchema = new Schema({
  message: {type: String, required: true},
  author: {type: String, required: true},
  date: {type: String, required: true}
});
const Message = mongoose.model('message', messageSchema);

module.exports = {
  Category,
  Thread,
  Message
}
