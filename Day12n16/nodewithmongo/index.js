const MongoClient = require("mongodb").MongoClient;

const URL = "mongodb+srv://zariruldemo:S4wRnHalKpovkcwT@cluster0.w0extkj.mongodb.net/?retryWrites=true&w=majority";

const config = {useUnifiedTopology: true};


MongoClient.connect(URL, config, function (error, MyMongoClient) {
    if(error){
        console.log("Connection Fail");
    }
    else{
        console.log("Connection Success");
        //insertData(MyMongoClient); // jokhon ei connection succesfull hobe tokhon ei method ta k execute korbo
        //insertManyData(MyMongoClient);
        //deleteOneData(MyMongoClient);
        //deleteAllData(MyMongoClient);
        //fineOneWithoutCondition(MyMongoClient);
        //fineOneWithCondition(MyMongoClient);
        //fineAllnode(MyMongoClient);
        //fineAllNodeByProjection(MyMongoClient);
        //fineNodeByQuery(MyMongoClient);
        //fineNodeByLimit(MyMongoClient);
        //findNodeBySort(MyMongoClient);
        //updateNodeData(MyMongoClient);
        //updatemanyNodeData(MyMongoClient);
        //createMyCollection(MyMongoClient);
        deleteMyCollection(MyMongoClient);
    }
})

function insertData(MyMongoClient) {
    const myDataBase = MyMongoClient.db("demo"); //ekhane database er name die dibo

    const myCollection = myDataBase.collection("list");// kon collection data add korbo

    const myData = {Name: "Zarirul", Id: "191-15-12497", Class: "BSc", City: "DSC"};

    myCollection.insertOne(myData, function (error) {
        if (error) {
            console.log("Data Insert Fail");
        } else {
            console.log("Data Insert Success");
        }
    })
}

function insertManyData(MyMongoClient) {
    const myDataBase = MyMongoClient.db("demo"); //ekhane database er name die dibo

    const myCollection = myDataBase.collection("list");// kon collection data add korbo

    const myData = [{Name: "Zarirul", Id: "191-15-12497", Class: "BSc", City: "DSC"},
        {Name: "Nahidul", Id: "191-15-12448", Class: "BSc", City: "DSC"},
        {Name: "Imrul", Id: "191-15-12440", Class: "BSc", City: "DSC"},
        {Name: "Hanzala", Id: "191-15-12404", Class: "BSc", City: "DSC"},
        {Name: "Akash", Id: "191-15-12491", Class: "BSc", City: "DSC"},
        {Name: "Ryan", Id: "192-15-13088", Class: "BSc", City: "DSC"},
        {Name: "Ariful", Id: "191-15-12850", Class: "BSc", City: "DSC"},
        {Name: "Musrat", Id: "192-15-13029", Class: "BSc", City: "DSC"}];

    myCollection.insertMany(myData, function (error) {
        if (error) {
            console.log("Data Insert Fail");
        } else {
            console.log("Data Insert Success");
        }
    })
}

function deleteOneData(MyMongoClient) {
    const myDataBase = MyMongoClient.db("demo"); //ekhane database er name die dibo

    const myCollection = myDataBase.collection("list");// kon collection data add korbo

    const deleteItem = {Id: "191-15-12497"};

    myCollection.deleteOne(deleteItem, function (error) {
        if (error) {
            console.log("Data Delete Fail");
        } else {
            console.log("Data Delete Success");
        }
    })
}

    function deleteAllData(MyMongoClient) {
        const myDataBase = MyMongoClient.db("demo"); //ekhane database er name die dibo

        const myCollection = myDataBase.collection("list");// kon collection data add korbo


        myCollection.deleteMany(function (error, resultObj) {
            if (error) {
                console.log("Data Delete Fail");
            } else {
                console.log(resultObj);
            }
        })
    }
    function fineOneWithoutCondition(MyMongoClient) {
        const myDataBase = MyMongoClient.db("demo"); //ekhane database er name die dibo

        const myCollection = myDataBase.collection("list");// kon collection data add korbo

        const findObj = {}

        myCollection.findOne(findObj, function (error, result) {

            console.log(result);
            console.log("Data FInd");
        })
    }
        function fineOneWithCondition(MyMongoClient) {
            const myDataBase = MyMongoClient.db("demo"); //ekhane database er name die dibo

            const myCollection = myDataBase.collection("list");// kon collection data add korbo

            const findObj = {Id: "192-15-13088"};

            myCollection.findOne(findObj, function (error, result) {

                console.log(result);
                console.log("Data FInd");
            })
    }
        function fineAllnode(MyMongoClient) {
            const myDataBase = MyMongoClient.db("demo"); //ekhane database er name die dibo

            const myCollection = myDataBase.collection("list");// kon collection data add korbo


             myCollection.find().toArray(function (error, result) {

                 console.log(result);
                 console.log("Data FInd");
             })
}
function fineAllNodeByProjection(MyMongoClient) {
    const myDataBase = MyMongoClient.db("demo"); //ekhane database er name die dibo

    const myCollection = myDataBase.collection("list");// kon collection data add korbo

    const ItemObj = {};

    const ItemProjection = {projection: {Name: 1, Id: 1}}; // 1 mean true , ineed this value ..... 0 means everything except this

    myCollection.find(ItemObj, ItemProjection).toArray(function (error, result) {

        console.log(result);
        console.log("Data FInd");
    })
}
function fineNodeByQuery(MyMongoClient) {
    const myDataBase = MyMongoClient.db("demo"); //ekhane database er name die dibo

    const myCollection = myDataBase.collection("list");// kon collection data add korbo

    const QueryObj = {City: "DSC"};

    myCollection.find(QueryObj).toArray(function (error, result) {

        console.log(result);
        console.log("Data FInd");
    })
}
function fineNodeByLimit(MyMongoClient) {
    const myDataBase = MyMongoClient.db("demo"); //ekhane database er name die dibo

    const myCollection = myDataBase.collection("list");// kon collection data add korbo

    myCollection.find().limit(4).toArray(function (error, result) {

        console.log(result);
        console.log("Data FInd");
    })
}
function findNodeBySort(MyMongoClient) {
    const myDataBase = MyMongoClient.db("demo"); //ekhane database er name die dibo

    const myCollection = myDataBase.collection("list");// kon collection data add korbo

    const SortPattern = {Id: 1};

    myCollection.find().sort(SortPattern).toArray(function (error, result) {

        console.log(result);
        console.log("Data FInd");
    })
}
function updateNodeData(MyMongoClient) {
    const myDataBase = MyMongoClient.db("demo"); //ekhane database er name die dibo

    const myCollection = myDataBase.collection("list");// kon collection data add korbo

    const myquery = {Id: "191-15-12850"};
    const newvalues = {$set: {Name: "Ariful Islam"}};

    myCollection.updateOne(myquery, newvalues, function (error, result) {

        console.log(result);
        console.log("Data Updated");
    })
}
function updatemanyNodeData(MyMongoClient) {
    const myDataBase = MyMongoClient.db("demo"); //ekhane database er name die dibo

    const myCollection = myDataBase.collection("list");// kon collection data add korbo

    const myquery = {Id: "191-15-12850"};
    const newvalues = {$set: {Name: "Ariful Islam"}};

    myCollection.updateOne(myquery, newvalues, function (error, result) {

        console.log(result);
        console.log("Data Updated");
    })
}


function createMyCollection(MyMongoClient) {
    const myDataBase = MyMongoClient.db("demo"); //ekhane database er name die dibo

    myDataBase.createCollection("Student", function (error, result) {
        console.log(result);
    })
}
function deleteMyCollection(MyMongoClient) {
    const myDataBase = MyMongoClient.db("demo"); //ekhane database er name die dibo

    myDataBase.dropCollection("Student", function (error, result) {
        console.log(result);
    })
}