import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
	username: string;
	socketId: string;
	rooms: mongoose.Types.ObjectId[];
}

const UserSchema: Schema = new Schema({
	username: { type: String, required: true },
	socketId: { type: String, required: true },
	rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room" }],
});

export default mongoose.model<IUser>("User", UserSchema);
