const {client} = require("./dbconfig");

const findSingleData=async()=>{
    try{
        const myDatabase = client.db("faisallearn");
        const insertmany = myDatabase.collection("insertmany");

        const query = {Id:"191-15-12440"};

        const result = await insertmany.findOne(query);

        console.log(result);
    }
    catch{
        console.log("Error");
    }
    finally {
        await client.close();
    }
}

findSingleData();