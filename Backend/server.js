const app=require("./index");
const connectDB = require("./src/config/db");
app.listen(process.env.PORT||5000,async()=>{
    try {
        await connectDB();
        console.log("Connected to 5000")
    } catch (error) {
        console.log(error)
    }
})