
import { app } from "./app.js";
import 'dotenv/config';

app.listen(process.env.PORT,()=>{console.log(`server working at port ${process.env.PORT}`)})