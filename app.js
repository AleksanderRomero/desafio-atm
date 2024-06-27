const express = require("express");
const app = express();

app.use(express.json());

const calcularCedulas = (valor) => {
    const cedulas = [100, 50, 20, 10, 5, 2];
    let resultado = {};
    cedulas.forEach((cedula) => {
        let quantidade = Math.floor(valor / cedula);
        valor %= cedula;
        resultado[cedula] = quantidade;
    });
    return resultado;
};

app.post("/api/saque", (req, res) => {
    const { valor } = req.body;
    if (typeof valor !== "number" || !Number.isInteger(valor) || valor <= 0) {
        return res
            .status(400)
            .json({ erro: "O valor deve ser um número inteiro positivo" });
    }
    const resultado = calcularCedulas(valor);
    res.json(resultado);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}
        http://localhost:${PORT}/api/saque`);
});

module.exports = app;
