const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// SERVIR FRONTEND
app.use(express.static(path.join(__dirname, "public")));

// CAMINHO DO JSON
const dataPath = path.join(__dirname, "agendamentos.json");

function loadAgendamentos() {
    try {
        return JSON.parse(fs.readFileSync(dataPath, "utf8"));
    } catch {
        return [];
    }
}

function saveAgendamentos(data) {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

// ROTAS API
app.post("/api/agendar", (req, res) => {
    const ags = loadAgendamentos();

    const novo = {
        id: Date.now(),
        status: "Pendente",
        ...req.body
    };

    ags.push(novo);
    saveAgendamentos(ags);

    res.status(201).json({ msg: "Agendamento salvo!" });
});

app.get("/api/agendamentos", (req, res) => {
    res.json(loadAgendamentos());
});

app.put("/api/agendamentos/:id", (req, res) => {
    const id = Number(req.params.id);
    const { status } = req.body;

    const ags = loadAgendamentos();
    const index = ags.findIndex(a => a.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Não encontrado" });
    }

    ags[index].status = status;
    saveAgendamentos(ags);

    res.json({ msg: "Status atualizado." });
});

// ROTA PRINCIPAL
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// START
app.listen(PORT, () => {
    console.log("Servidor rodando na porta", PORT);
});
