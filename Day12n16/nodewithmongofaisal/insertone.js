const {client} = require("./dbconfig");

const insertSingleData=async ()=>{
    try {
        const myDatabase = client.db("faisallearn");
        const myCollection = myDatabase.collection("learn");

        const data = {
            Name: "Zarirul Islam",
            Id: "191-15-12497",
        }


        const result = await myCollection.insertOne(data);
        console.log(`A data was inserted with the _id: ${result.insertedId}`);
    }
    catch (error) {
        console.log("Error");
    }
    finally {
        await client.close();
    }
}
insertSingleData();