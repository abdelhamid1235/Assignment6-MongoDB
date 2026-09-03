import { db } from "../../DB/connection.db.js"

export const createBooksCollection =async ()=>{
    const result =  await db.createCollection('Books' , {validator:{ title: {$exists: true,$type: "string", $ne: ""}}})
    return result
}

export const createAuthorCollection =async ()=>{
    const result =await db.collection("authors").insertOne({name:"Author1" , nationality:"British"})
    return result
}

export const createLogsCollection =async ()=>{
    const result =await db.createCollection('logs' , {capped:true , size : 1048576 ,max:3})
    return result

}

export const createBooksIndex=async ()=>{
    const result =await db.collection('Books').createIndex({title : 1})
    return result

}