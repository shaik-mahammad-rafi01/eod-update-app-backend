import express from "express"
import cors from "cors"
import { EodUpdateRouter } from "./src/routes/EodRoutes.js";

const app = express();
app.use(express.json())
app.use(cors())
const port = 3006
app.use("/" , EodUpdateRouter)

app.listen(port, () => {
  console.log(`Api calls are listening on port ${port}`)
})


