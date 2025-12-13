const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// 🔓 LIBERA FRONTEND (Live Server, celular, etc)
app.use(cors());

// 📦 JSON
app.use(express.json());

// 🌐 SERVIR FRONTEND (caso use tudo junto depois)
app.use(express.static(path.join(__dirname, "public")));

// 📁 CAMINHO DO ARQUIVO DE DADOS
const dataPath = path.join(__dirname, "agendamentos.json");

// 📥 LER AGENDAMENTOS
function loadAgendamentos() {
    try {
        return JSON.parse(fs.readFileSync(dataPath, "utf8"));
    } catch {
        return [];
    }
}

// 💾 SALVAR AGENDAMENTOS
function saveAgendamentos(data) {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

// =====================
// 🔹 ROTAS DA API
// =====================

// ➕ CRIAR AGENDAMENTO
app.post("/api/agendar", (req, res) => {
    const ags = loadAgendamentos();

    const novoAgendamento = {
        id: Date.now(),
        status: "Pendente",
        ...req.body
    };

    ags.push(novoAgendamento);
    saveAgendamentos(ags);

    res.status(201).json({ ok: true, msg: "Agendamento salvo!" });
});

// 📄 LISTAR AGENDAMENTOS
app.get("/api/agendamentos", (req, res) => {
    res.json(loadAgendamentos());
});

// 🔄 ATUALIZAR STATUS
app.put("/api/agendamentos/:id", (req, res) => {
    const id = Number(req.params.id);
    const { status } = req.body;

    const ags = loadAgendamentos();
    const index = ags.findIndex(a => a.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Agendamento não encontrado" });
    }

    ags[index].status = status;
    saveAgendamentos(ags);

    res.json({ ok: true, msg: "Status atualizado" });
});

// 🏠 ROTA PRINCIPAL (opcional)
app.get("/", (req, res) => {
    res.send("Backend da Barbearia rodando 🚀");
});

// ▶️ START
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
