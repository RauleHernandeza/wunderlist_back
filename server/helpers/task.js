const task=require('../shemas/task');



module.exports.createTask=async(info)=>{
    const newTask=new task(info);
  
      await newTask.save();

      return {status:200,message:"tarea creada exitosamente!",body:{newTask}}



}


module.exports.selectTask=async (info)=>{

const TaskUser=await task.find({id_user:info.id_user});

return {status:200,message:"tareas",body:TaskUser}

}
module.exports.updateTask=async (info)=>{
 
const update=await task.findByIdAndUpdate(info.id_user,info)
return {status:200,message:"tarea actualizada correctamente!",body:update}
}



module.exports.deleteTask=async(info)=>{

    const deleteTask=await task.findByIdAndDelete(info._id)
}