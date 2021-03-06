import * as mongoose from "mongoose";

// This is needed till mongoose implements the ES2015 native Promises, which should be in version 5.x
(mongoose as any).Promise = global.Promise;

const mongoDbUrl = process.env.MONGODB;
mongoose.connect(mongoDbUrl, { useMongoClient: true}, (err: any) => {
    if (err) {
        let errMsg = `Unable to connect to mongoDB: ${err.code}:${err.name}\n`;
        errMsg += `Message: ${err.message}`;
        console.log(errMsg);
    } else {
        console.log("Connected to MongoDB on : " + mongoDbUrl);
    }
});

 // print mongoose logs in dev env
if (process.env.MONGOOSE_DEBUG) {
    mongoose.set("debug", true);
}
