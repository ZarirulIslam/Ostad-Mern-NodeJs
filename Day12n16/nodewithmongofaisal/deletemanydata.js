const {client} = require("./dbconfig");

const deleteManyData=async()=>{
    try{
        const myDatabase = client.db("faisallearn");
        const table = myDatabase.collection("insertmany");

        const query = {};
        const result = await table.deleteMany(query);
        console.log("Deleted " + result.deletedCount + " documents");
    }
    catch(error){
        console.log(error);
    }
    finally {
        await client.close();
    }
}

deleteManyData();