const {client} = require("./dbconfig");

const updateManyData=async ()=>{
    try{
        const myDatabase = client.db("faisallearn");
        const table = myDatabase.collection("insertmany");

        const filter = {};

        const updateData = {
            $set: {
                Name: "Imrul Hasan",
            },
        };

        const result = await table.updateMany(filter, updateData);
        console.log(`Updated ${result.modifiedCount} documents`);
    }
    catch(error){
        console.log("Error");
    }
    finally {
        await client.close();
    }
}

updateManyData();