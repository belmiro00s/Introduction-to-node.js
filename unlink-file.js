import { unlink } from "node:fs"


//deleting an file
unlink("arquivo.csv", (error)=>{
    if(error){
        console.log("Error to delete file:", error.message)
    }
    console.log("File deleted with sucess")
})