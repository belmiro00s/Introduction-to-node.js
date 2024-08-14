import { error } from "node:console"
import { existsSync, readFile } from "node:fs"
import { readFileSync } from "node:fs"


const filename = './arquivo.txt'

//this way is assynchronous 
// readFile(filename, "utf-8", (error, data) => {
//     if (error) {
//         console.log("Error to read the file: ", error.message)
//         return
//     }

//     const entries = data.split(",")
//     console.log(entries)
//     entries.forEach((entry) => console.log(entry))
// })


//synchronous way
// try {
//     const data = readFileSync("./arquivo.txt", "utf-8")
//     console.log("file red with sucess:", data)
// } catch (err) {
//     console.log(err)
// }



const filename1 = 'arquivo.csv'

const exists = existsSync(filename1)

if (exists) {
    readFile(filename, "utf8", (error, data) => {
        if (error) {
            console.log("Error to read the file:", error.message)
            return
        }
        const entries = data.split(",")
        entries.forEach((entry) => console.log(entry))
    })
}else{
    console.log('The file do not exists')
}
