import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: ".env"
});


connectDB()
.then(()=> {
    app.listen(process.env.port || 8000, () => {
        console.log(process.env.port | 8000 , ()=>{
            console.log(`Server is running on port :  ${process.env.port || 8000}`);
        });
    });
})
.catch((error) => {
    console.log("MONGODB DB connection failed)", error); 
})

/*
const app = express();

const start = async () => {
    try {
        await connectDB();
        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        });
    } catch (error) {
        console.error("Startup error:", error);
        process.exit(1);
    }
};

start();
*/