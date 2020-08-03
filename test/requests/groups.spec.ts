import app from "../../src/app";
import request from "supertest";

describe("GET /groups", () => {
  it("should respond with json", (done) => {
    request(app)
      .get("/groups")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body.name).toEqual("Black Devs");
        return done();
      });
  });
});
