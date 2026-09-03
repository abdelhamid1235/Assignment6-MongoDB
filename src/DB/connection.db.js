import { MongoClient } from 'mongodb';
import { DB_NAME, DB_URL } from '../config.js';


export const client = new MongoClient(DB_URL);

export const bootstrap = async (app , port)=>{
    try {
        await client.connect();
        console.log("DB successfully connection ✔️");
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
        
    } catch (error) {
        console.log({eerror : error});
        console.log("Faild Connection DB ❌");
    }
}

export const db = client.db(DB_NAME);