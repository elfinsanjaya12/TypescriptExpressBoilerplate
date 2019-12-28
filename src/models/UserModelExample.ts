import { Schema, model } from 'mongoose';

const UserSchema: Schema = new Schema({
  name: String,
  createdAt: Date,
  updatedAt: Date,
});

export default model('User', UserSchema);
