import {Schema} from 'mongoose';

export default new Schema<{
  id: number,
  name: string,
  role: string
}>({
  id: Number,
  name: String,
  role: String
})
