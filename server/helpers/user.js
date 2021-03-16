const User=require('../shemas/user')
const bcrypt=require('bcryptjs')

module.exports.registro=async (info)=>{
    const { username, email, password } = info;

    // Look for email coincidence
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
     return {status:401,message:"el correo ya existe!"}
    } else {
      // Saving a New User
      const newUser = new User({ username, email, password });
      console.log(newUser)
      await newUser.save();
      return {status:200,message:"registro exitoso!",body:newUser}
  }

}

module.exports.login=async (info)=>{

    const emailUser = await User.findOne({ email: info.email });
    console.log("-----------------")
    console.log(emailUser)
    if (!emailUser) {
     return {status:400,message:"el usuario u/o contraseña es incorrecto por x razon "}
    } else {
      let pass=bcrypt.compareSync(info.password,emailUser.password);
      console.log(pass)
         if(!pass){
            return{status:400,message:"el usuario u/o contraseña es incorrecto por segunda razon"}
         }else{
           return {status:200,message:"login exitoso",body:emailUser}
         }
  }
}

