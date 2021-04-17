const { test, expect, describe } = require("@jest/globals");
const request = require("supertest");

const app = require("../app");

describe("Movies API", () => {
  test("Should respond with movies array", async (done) => {
    const response = await request(app)
      .get("/movies")
      .set("Accept", "application/json");
    console.log(response.body, "response");
    expect(response.status).toBe(200);
    expect(response.body.success).toEqual(true);
    expect(response.body.error).toEqual(false);
    done();
  });
});
