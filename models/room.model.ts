import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./user.model";

export interface IRoom extends Document {
	roomName: string;
	participants: IUser[];
	roomType?: "group" | "one-on-one";
}

const RoomSchema: Schema = new Schema({
	roomName: { type: String, required: true },
	participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
	roomType: { type: String, enum: ["group", "one-on-one"], default: "group" }, 
});

export default mongoose.model<IRoom>("Room", RoomSchema);
