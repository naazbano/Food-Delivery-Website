import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

//app config
const app = express()
const port = process.env.PORT || 4000;

//midileware
app.use(express.json())
app.use(cors())

// Serve frontend build
app.use(express.static('frontend/dist', {
    setHeaders: (res, path) => {
      if (path.endsWith('.css')) {
        res.set('Content-Type', 'text/css');
      }
    }
  }));

//Db comnnection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

// app.get("/",(req,res)=>{
  
//     res.send("API Working")
// })
// Serve frontend for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
  });

app.listen(port, ()=>{
 console.log(`Server Started on http://localhost:${port}`);
})

