import { bookModules, logsModules } from "../../DB/model/index.js";

export const insertOneINBookCollection = async (inputs)=>{
    const create = await bookModules.insertOne(inputs);
    return create;
}
export const insertManyINBookCollection = async (inputs)=>{
    const create = await bookModules.insertMany(inputs);
    return create;
}

export const updateBooks = async ({ title})=>{
    const book = await bookModules.updateOne(
        {title:{$eq: title}} , 
        {$set:{
            yrar:2022
        }})
    if(!book.matchedCount){
        throw new Error("title not found",{cause:{status:404}});
    }
    return book
}

export const findBookByTitle = async ({ title})=>{
    const book = await bookModules.find({title}).toArray();
    if(book.length == 0){
        throw new Error("title not found",{cause:{status:404}});
    }
    return book
}

export const findBookByYear = async (input)=>{
    const {from , to} = input;
    const book = await bookModules.find({year:{ $gte:Number(from),$lte: Number(to)}}).toArray();
    if(book.length == 0){
        throw new Error("Not Found",{cause:{status:404}});
    }
    return book
}

export const findBookByGenre = async ({genre})=>{
    const book = await bookModules.find({genres:{$elemMatch:{$eq:genre}}}).toArray();
    if(book.length == 0){
        throw new Error("Not Found",{cause:{status:404}});
    }
    return book
}

export const skipLimit = async ({ })=>{
    const data = await bookModules.find({}).sort({year:-1}).skip(2).limit(3).toArray();
    return data;
}

export const getBooksWithYearInteger =async ()=>{

    const result = await bookModules.find({year:{$type:"int"}}).toArray()
    if(!result.length){
        throw new Error('No books found in this ' , {cause:{state:404}})
    }
    return result
}
export const getBooksNotIncludeGengreHorrorOr =async ()=>{
    const result = await bookModules.find({genres: { $nin: ["Horror", "Science Fiction"] }}).toArray()
    if(!result.length){
        throw new Error('No books found in this ' , {cause:{state:404}})
    }
    return result
}

export const deleteBook = async ({ })=>{
    const result = bookModules.deleteMany({year:{$lt:2000}})
    return result;
}

export const GetWithAggregate1 =async()=>{

    const result =await  bookModules.aggregate(
        [
            {
                $match:{year: {$gt:2000 }}

            },
            {
                $sort:{year:-1}

            }
        ]
    ).toArray()
    if(!result.length){
        throw new Error('No books found in this ' , {cause:{state:404}})
    }

    return result
}
export const GetWithAggregate2 =async()=>{
    const result =await bookModules.aggregate(
        [
            {
                $match:{year: {$gt:2000 }}

            },
            {
                $project:{
                    title:1 , author:1 , year:1 , _id:0

                }
            },
            {
                $sort:{year:-1}

            }
        ]
    ).toArray()
    if(!result.length){
        throw new Error('No books found in this ' , {cause:{state:404}})
    }

    return result
}

export const GetWithAggregate3 =async()=>{

    const result = await bookModules.aggregate([
        {
            $unwind: "$genres"
        },
        {
            $project:{
                title:1 , genres:1 , _id:0
            }
        }
    ]).toArray();
    if(!result.length){
        throw new Error('No books found in this ' , {cause:{state:404}})
    }

    return result
}

export const GetWithAggregate4 =async()=>{

    const result = await logsModules.aggregate([
        
        {$lookup: {
                from: "Books",      
                localField: "book_id",     
                foreignField: "_id",
                as: "bookDetails"
            },
        },
        
        {
                $project:{
                    _id:0 , book_id:0
                }
        }
        
    ]).toArray();
    if(!result.length){
        throw new Error('No books found in this ' , {cause:{state:404}})
    }

    return result
}