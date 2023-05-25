const {client}=require("./dbconfig");

const findManyData=async()=>{
    try {
        const myDatabase = client.db("faisallearn");
        const insertmany = myDatabase.collection("insertmany");

        const query = {};

        const cursor = insertmany.find(query);

        if ((await cursor.count()) === 0) {
            console.log("No documents found!");
        }
        else {
            const result = await cursor.toArray();

            await result.forEach(user=>console.log(user));
        }

    }
    catch(error){
        console.log("Error");
    }
    finally {
        await client.close();
    }
}

findManyData();