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


app.get('/', (req,res) => { console.log("hello")})


app.listen(8000, () => {
    console.log(`Server is running at port :8000 ` );
})

export default app