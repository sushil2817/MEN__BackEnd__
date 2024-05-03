import mongoose from "mongoose"

const hospitalHoursSchmea = new mongoose.Schema({
  workInHospitals:[
    {
      type:mongoose.Schmea.Type.ObjectId,
      ref:"Hospital"
    }
  ],
     wordHours:{
       type:String,
      timestamps:true,
      reuired:true
     }
})


const doctorSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  salary:{
    type:String,
    required:true
  },
  qualification:{
    type:String,
    required:true
  },
  experienceInYears:{
    type:Number,
    default:0
  },
  workInHospitals:[
    {
      type:mongoose.Schmea.Type.ObjectId,
      ref:"Hospital"
    }
  ],
  hospitalHours:["hospitalHoursSchmea"]
},
  {timestamps:true})


export const Doctor = mongoose.model("Doctor", doctorSchema)