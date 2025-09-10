import express, { response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/", async (req, res) => {
  console.log(req.body.data);

  const X_API_KEY = req.body.data["X-API-KEY"];
  const X_API_LOGIN = req.body.data["X-API-LOGIN"];
  const X_API_PASS = req.body.data["X-API-PASS"];

  const responseServopa = await axios.get(
    `https://hermes.gruposervopa.com.br/apiServopa/SmartShare/GetTempFilesFluxo/${req.body.data.value}`,
    {
      headers: {
        "X-API-KEY": X_API_KEY,
        "X-API-LOGIN": X_API_LOGIN,
        "X-API-PASS": X_API_PASS,
      },
  });

  console.log("Sucess", responseServopa.data);

  return res.json({"looker": { "success": true, "message": JSON.stringify(responseServopa.data)} });

});

app.listen(3000, () => console.log("Backend rodando na porta 3000"));
