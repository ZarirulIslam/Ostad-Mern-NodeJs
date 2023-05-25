const {client} = require("./dbconfig");

const insertManyData=async ()=>{
    try {
        const myDatabase = client.db("faisallearn");
        const insertmany = myDatabase.collection("insertmany");

        const data = [
            { Name: "Zarirul Islam", Id: "191-15-12497" },
            { Name: "Nahidul Islam", Id: "191-15-124448" },
            { Name: "Imrul Islam", Id: "191-15-12440" },
            { Name: "Hanzala Islam", Id: "191-15-12404" },
            { Name: "Akash Islam", Id: "191-15-12491" }
        ];


        //const options = { ordered: true };
        const result = await insertmany.insertMany(data);
        console.log(`${result.insertedCount} documents were inserted`);
    }
    catch(error){
        console.log("Error");
    }
    finally {
        await client.close();
    }
}
insertManyData();