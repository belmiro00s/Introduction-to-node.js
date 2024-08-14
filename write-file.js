import { error } from "node:console"
import { rename, writeFileSync } from "node:fs"

//create a new file 
try {
    writeFileSync("./arquivo.txt", "hello mars!", "utf-8")
    console.log("file created with sucess")
} catch (err) {
    console.log(err)
}


try {
    writeFileSync("./arquivo.csv", "hello bitch!", "utf-8")
    console.log("file created with sucess")
} catch (err) {
    console.log(err)
}



//rename an file 
    rename("./arquivo.txt","file.csv", (error)=>{
        if(error){
            console.log("Error to rename file:", error.message)
            return
        }
        console.log('File renamed with sucess')
    })
