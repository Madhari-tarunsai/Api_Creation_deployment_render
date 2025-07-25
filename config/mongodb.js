const mongoose=require("mongoose")
const uri="mongodb+srv://saitarunsai04062002:gfW6PmASedRpBQ3N@cluster0.annbira.mongodb.net/"
// function creation
async function conntect_dataBase(){
    try{
        const mongodb=await mongoose.connect(uri,{dbName:"todo_application"})
        console.log("database connected sucessfully")

    }catch(error){
        console.log("database not connected please check the connections",error)

    }
}
module.exports={conntect_dataBase}