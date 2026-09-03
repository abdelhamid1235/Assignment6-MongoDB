import { ObjectId } from "mongodb";
import { logsModules } from "../../DB/model/index.js";

export const insertOneINLogsCollection = async ({book_id , action})=>{
    const create = await logsModules.insertOne({_id:ObjectId.createFromHexString(book_id) , action});
    return create;
}
// export const insertManyINBookCollection = async (inputs)=>{
//     const create = await bookModules.insertMany(inputs);
//     return create;
// }