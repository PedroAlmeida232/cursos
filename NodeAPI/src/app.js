import express from "express";
import connectDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const app = express();
app.use(express.json());

const conexao = await connectDatabase()

conexao.on("error" , (erro) => {
    console.error("erro de conexao", erro);
})
conexao.once("open", ()=>{
     console.log("Conexao com o banco feita com sucesso");   
})


app.get("/", (req, res)=> {
    res.status(200).send("Curso de node.js")
});

app.get("/livros" , async (req, res) => {
    const listaLivros = await livro.find()
    res.status(200).json(listaLivros);
});

app.get("/livros/:id", (req, res) => {
    const index = buscalivro(req.params.id)
    res.status(200).json(livros[index])
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso")
});

app.put("/livros/:id", (req, res) => {
    const index = buscalivro(req.params.id)
    livros[index].titulo = req.body.titulo
    res.status(200).json(livros)
})

app.delete("/livros/:id", (req, res) =>{
    const index = buscalivro(req.params.id)
    livros.splice(index, 1)
    res.status(200).send("livro removido com sucesso")
})

export default app;
