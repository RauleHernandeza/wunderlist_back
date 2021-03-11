const {Schema,model} =require('mongoose');
const bcrypt=required('bcryptjs');

const UserShema= new Schema({
username:{type:String, required:true},
email:{type:String,required:true},
password:{type:String,required:true}
})


UserShema.methods.encryptPassword=async (pass)=>{
    return await bcryt.hashSync(pass,10);
}

UserShema.methods.MathPassword=async (pass)=>{
return await bcrypt.compareSync(pass,this.password);

}

module.exports=model("user",UserShema);