const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const { type } = require("express/lib/response");

const messageSchema = new mongoose.Schema({
  password: { type:String, required:true, },
  passworda: { type:String, required:true },
  passwordb: { type:String, required:true},
  passwordc: { type:String, required:true},
  passwordd: { type:String, required:true},
  passworde: { type:String, required:true},
  messageDate : { type: Date,default:Date.now()},
})

const messageModel = mongoose.models.message_collections || mongoose.model("message_collections", messageSchema);

module.exports = messageModel;