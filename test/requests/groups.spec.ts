import app from "../../src/app";
import request from 'supertest';

describe('GET /groups', () => {
    it('should respond with json', (done) => {
        request(app)
            .get('/groups')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });

});
