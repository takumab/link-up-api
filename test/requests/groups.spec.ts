import app from "../../src/app";
import request from "supertest";

describe("GET /groups", () => {
  xit("should return the name of the Link Up group", (done) => {
    request(app)
      .get("/groups")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
  xit("should return a specific group", (done) => {
    request(app)
      .get("/groups/:id")
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
