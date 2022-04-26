const mongoose = require("mongoose");
const dotenv = require('dotenv');
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

// Messages
const messageSchema = new Schema({
  message: {type: String, required: true},
  author: {type: String, required: true},
  date: {type: String, required: true},
  thread: {type: Schema.Types.ObjectId, ref: 'thread'}
});
const Message = mongoose.model('message', messageSchema);

// Threads
const threadSchema = new Schema({
  topic: {type: String, required: true},
  created_by: {type: String, required: true},
  num_msgs: {type: Number, required: true},
  category: {type: String, required: true},
});
const Thread = mongoose.model('thread', threadSchema);

module.exports = {
  Thread,
  Message
}
