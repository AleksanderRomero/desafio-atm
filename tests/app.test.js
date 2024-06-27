const request = require("supertest");
const app = require("../app");

describe("POST /api/saque", () => {
    it("deve retornar a quantidade correta de cédulas para um saque válido", async () => {
        const res = await request(app).post("/api/saque").send({ valor: 380 });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            100: 3,
            50: 1,
            20: 1,
            10: 1,
            5: 0,
            2: 0,
        });
    });

    it("deve retornar erro para valor de saque inválido", async () => {
        const res = await request(app).post("/api/saque").send({ valor: -10 });
        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty("erro");
    });

    it("deve retornar erro para entrada inválida", async () => {
        const res = await request(app).post("/api/saque").send({});
        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty("erro");
    });
});
