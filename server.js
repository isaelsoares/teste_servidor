import express from "express";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// const JWT_SECRET = "super_secret";

// Rota de login

// app.post("/login", (req, res) => {
//   const { email } = req.body;

//   if (!email) {
//     return res.status(400).json({ error: "Email obrigatório" });
//   }

//   const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });

//   res.json({ token });
// });

// // Middleware de autenticação
// function authMiddleware(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];

//   if (!token) return res.sendStatus(401);

//   jwt.verify(token, JWT_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// }

// // Rota protegida
// app.get("/protected", authMiddleware, (req, res) => {
//   const lista = [
//     { id: 1, nome: "Item 1", descricao: "Primeiro item" },
//     { id: 2, nome: "Item 2", descricao: "Segundo item" },
//     { id: 3, nome: "Item 3", descricao: "Terceiro item" },
//   ];

//   res.json({
//     message: "Acesso autorizado!",
//     user: req.user,
//     data: lista,
//   });
// });

app.post("/", (req, res) => {
  console.log(req.body);
  return res.json({ message: req.body });
  // const response = await axios.get("https://hermes.gruposervopa.com.br/apiServopa/SmartShare/GetTempFilesFluxo/2457208", {
  //   headers: {

  //   }
  // })
});

app.listen(3000, () => console.log("Backend rodando na porta 3000"));
