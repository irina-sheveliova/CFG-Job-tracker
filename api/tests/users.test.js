import request from 'supertest';
import bodyParser from 'body-parser';
import express from 'express';
import db from '../models/index';
import router from '../routes/users';


let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

const testUser = {
  UID: "TestUID",
  firstName: 'Alex',
  lastName: 'Smith',
  email: 'alex.smith@test.com'
};

// can use 'db.sequelize.sync({ force: true })' to drop and recreate any existing tables
beforeEach(async () => {
  await db.sequelize.sync({ force: true });
});

describe('GET /users', () => {
  it('responds with an empty array when there are no users', async () => {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([]);
  });
});

describe('POST /users', () => {
  it('creates a user', async () => {
    let response = await request(app).post('/users').set({ 'Content-Type': 'application/json' }).send(testUser);

    expect(response.statusCode).toBe(200);
    expect(response.body.UID).toEqual(testUser.UID);
    expect(response.body.firstName).toEqual(testUser.firstName);
    expect(response.body.lastName).toEqual(testUser.lastName);
    expect(response.body.email).toEqual(testUser.email);

    // // expect the created user to also be in the get /users response
    response = await request(app).get('/users');
    expect(response.body.length).toEqual(1);
    expect(response.body[0].UID).toEqual(testUser.UID);
    expect(response.body[0].firstName).toEqual(testUser.firstName);
    expect(response.body[0].lastName).toEqual(testUser.lastName);
    expect(response.body[0].email).toEqual(testUser.email);
  });
});

describe('DELETE /users/:UID', () => {
  it('creates a user', async () => {
    let response = await request(app).post('/users').set({ 'Content-Type': 'application/json' }).send(testUser);
    
    expect(response.statusCode).toBe(200);
    const userUID = response.body.UID;
    response = await request(app).delete('/users/' + userUID);
    
    expect(response.statusCode).toBe(200);
    response = await request(app).get('/users/' + userUID);
    expect(response.body).toBe(null);
  });
});