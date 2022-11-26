const {client} = require("./dbconfig");

const updateOneData=async()=>{
    try{
        const myDatabase = client.db("faisallearn");
        const table = myDatabase.collection("insertmany");

        const filter = {Name: "Imrul Islam" };

        const options = { upsert: true };

        const updateData = {
            $set: {
                Name: "Imrul Hasan"
            },
        };
        const result = await table.updateOne(filter, updateData, options);
        console.log(
            `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
        );
    }
    catch(error){
        console.log("Error");
    }
    finally {
        await client.close();
    }

}

updateOneData();