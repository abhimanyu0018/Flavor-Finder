import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express()



app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      Credential: true,
    })
  );

app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

//------------ routes for sever --------------- 

// user route --
import userRounter from "./routes/user.routes.js";
app.use("/api/user", userRounter)



export default app