import mongoose , {Schema , Document} from "mongoose";

interface IStudent extends Document {
    name: string;
    year_of_birth: number;
    email: string;
    city: string;
}

const studentSchema = new Schema<IStudent>({
        name:{ type:String , required:true},
    year_of_birth:{ type:Number },
    email: { type:String },
    city: { type:String },
})

export const StudentModel = mongoose.model<IStudent>('Students', studentSchema);