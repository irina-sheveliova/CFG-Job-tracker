import request from 'supertest';
import bodyParser from 'body-parser';
import express from 'express';
import db from '../models/index'
import router from '../routes/contactUs'


let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

// can use 'db.sequelize.sync({ force: true })' to drop and recreate any existing tables
beforeEach(async () => {
  await db.sequelize.sync();
});

const testMessage = {
    name: 'billy',
    email: 'billy@bob.com',
    message: 'this is a message',
};


describe('GET /contactus', () => {
  it('responds with an empty array when there are no messages', async () => {
    const response = await request(app).get('/contactus');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([]);
  });
});

describe('POST /contactus', () => {

  it('creates a message', async () => {
    let response = await request(app).post('/contactus').set({ 'Content-Type': 'application/json' }).send(testMessage);

    expect(response.statusCode).toBe(200);

    expect(response.body.name).toEqual(testMessage.name);
    expect(response.body.email).toEqual(testMessage.email);
    expect(response.body.message).toEqual(testMessage.message);

    // // expect the created message to also be in the get /messages response
    response = await request(app).get('/contactus');
    expect(response.body.length).toEqual(1);
    expect(response.body[0].name).toEqual(testMessage.name);
    expect(response.body[0].email).toEqual(testMessage.email);
    expect(response.body[0].message).toEqual(testMessage.message);
  });

});
