import dotevn from "dotenv"
import connectDB from "./index.js"

dotevn.config({
  path: './env'
})

connectDB()
.then(()=>{
  app.listen(process.env.PORT|| 8000, ()=>{
    console.log(`Server is running at port:${process.env.PORT}`);
    })
})
.catch((err)=>{
  console.log('MONGODB connection is failed', err);
  
})

export default app;

