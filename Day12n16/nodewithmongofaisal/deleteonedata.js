const {client} = require("./dbconfig");

const deleteOneData=async()=>{
    try {
        const myDatabase = client.db("faisallearn");
        const table = myDatabase.collection("insertmany");

        const query = { Id: "191-15-12491" };

        const result = await table.deleteOne(query);

        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
        } else {
            console.log("No documents matched the query. Deleted 0 documents.");
        }
    }
    catch(error){
        console.log("Error");
    }
    finally {
        await client.close();
    }
}

deleteOneData();