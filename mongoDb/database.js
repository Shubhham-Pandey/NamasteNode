const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://NamasteNode:9|00CDQz&ow)@learnmongodb.phqr2.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'HelloWorld';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');
  
    const data = [
        {
            "firstName": "aditya",
            "lastName": "sharma",
            "city": "gwalior",
            "phoneNumber": "0987654321" 

        },
        {
            "firstName": "akshay",
            "lastName": "saini",
            "city": "dehradun",
            "phoneNumber": "8734981731" 

        },
        {
            "firstName": "akash",
            "lastName": "neupane",
            "city": "delhi",
            "phoneNumber": "87638768263" 

        },
    ];
    // const insertResult = await collection.insertMany(data);
    // console.log('Inserted documents =>', insertResult);

    const findResult1 = await collection.find({}).toArray();
    console.log('Found documents =>', findResult1);
    // the following code examples can be pasted here...
  
    const updateResult = await collection.updateMany({ firstName: 'akash' }, { $set: { lastName: 'khurana' } });
    console.log('Updated documents =>', updateResult)
    
    const findResult2 = await collection.find({}).toArray();
    console.log('Found documents =>', findResult2);

    const documentsCount = await collection.countDocuments({});
    console.log("Document Counts =>", documentsCount);
    return 'done.';
  }
  
main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close())