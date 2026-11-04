const request = require("supertest");
const app = require("../app");
const config = require("../config/config");

const API_KEY = config.apiKey;

describe("Product API", () => {
  // ---------- GET ----------
  test("GET /api/products - list wapas aani chahiye (200)", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("GET /api/products/1 - ek product milna chahiye", async () => {
    const res = await request(app).get("/api/products/1");
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("Laptop");
  });

  test("GET /api/products/999 - 404 aana chahiye", async () => {
    const res = await request(app).get("/api/products/999");
    expect(res.statusCode).toBe(404);
  });

  // ---------- POST ----------
  test("POST bina API key - 401 aana chahiye", async () => {
    const res = await request(app)
      .post("/api/products")
      .send({ name: "Pen", price: 50 });
    expect(res.statusCode).toBe(401);
  });

  test("POST sahi data aur key ke saath - 201", async () => {
    const res = await request(app)
      .post("/api/products")
      .set("x-api-key", API_KEY)
      .send({ name: "Keyboard", price: 3500 });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.name).toBe("Keyboard");
  });

  test("POST adhoora data - 400 aana chahiye", async () => {
    const res = await request(app)
      .post("/api/products")
      .set("x-api-key", API_KEY)
      .send({ name: "Sirf naam" });
    expect(res.statusCode).toBe(400);
  });

  // ---------- PUT ----------
  test("PUT /api/products/2 - price update honi chahiye", async () => {
    const res = await request(app)
      .put("/api/products/2")
      .set("x-api-key", API_KEY)
      .send({ price: 2000 });
    expect(res.statusCode).toBe(200);
    expect(res.body.price).toBe(2000);
  });

  // ---------- DELETE ----------
  test("DELETE /api/products/2 - delete ho kar phir 404 aana chahiye", async () => {
    const del = await request(app)
      .delete("/api/products/2")
      .set("x-api-key", API_KEY);
    expect(del.statusCode).toBe(200);

    const check = await request(app).get("/api/products/2");
    expect(check.statusCode).toBe(404);
  });

  // ---------- Galat URL ----------
  test("Galat URL - 404 JSON aana chahiye", async () => {
    const res = await request(app).get("/api/abc");
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("message");
  });
});