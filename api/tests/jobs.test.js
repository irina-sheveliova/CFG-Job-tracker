import request from 'supertest';
import bodyParser from 'body-parser';
import express from 'express';
import db from '../models/index'
import router from '../routes/jobs'


let app = express();

function mockAuthenticateMiddleware(id) {
  return async (req, res, next) => {
    req.userId = id;
    next();
  }
};

const setupApp = async (id) => {
  app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(mockAuthenticateMiddleware(id));
  app.use(router);
  await db.User.create({
    UID: 'abcdefghijkl',
    firstName: 'billy',
    lastName: 'bob',
    email: 'billy@bob.com'
  });
}

const testJob = {
  position: 'developer',
  company: 'Google',
  doa: '20.05.2023',
  salary: '40000',
  status: 'Applied',
  notes: 'great search engine',
}

beforeEach(async () => {
  await db.sequelize.sync({ force: true });
});



describe('GET /jobs', () => {
  it('responds with an empty array when there is no data for a user', async () => {
    await setupApp(5000);
    const response = await request(app).get('/jobs');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([]);
  });
});

describe('POST /jobs', () => {

  it('creates a job if the user exists', async () => {
    await setupApp(1);
    let response = await request(app).post('/jobs').set({ 'Content-Type': 'application/json' }).send(testJob);

    expect(response.statusCode).toBe(200);
    expect(response.body.company).toEqual(testJob.company);
    expect(response.body.position).toEqual(testJob.position);
    expect(response.body.doa).toEqual(testJob.doa);
    expect(response.body.salary).toEqual(testJob.salary);
    expect(response.body.status).toEqual(testJob.status);
    expect(response.body.notes).toEqual(testJob.notes);

    // expect the created job to also be in the get /jobs response
    response = await request(app).get('/jobs');
    expect(response.body.length).toEqual(1);
    expect(response.body[0].company).toEqual(testJob.company);
    expect(response.body[0].position).toEqual(testJob.position);
    expect(response.body[0].doa).toEqual(testJob.doa);
    expect(response.body[0].salary).toEqual(testJob.salary);
    expect(response.body[0].status).toEqual(testJob.status);
    expect(response.body[0].notes).toEqual(testJob.notes);
  });

});

describe('DELETE /jobs/:id', () => {
  it('creates a job if the user exists', async () => {
    await setupApp(1);
    let response = await request(app).post('/jobs').set({ 'Content-Type': 'application/json' }).send(testJob);
    expect(response.statusCode).toBe(200);  
    const jobId = response.body.id;
    response = await request(app).delete('/jobs/' + jobId);
    expect(response.statusCode).toBe(200); 
    response = await request(app).get('/jobs/' + jobId);
    expect(response.body).toBe(null); 
  })
});

describe('PUT /jobs/:id', () => {
  it('creates a job if the user exists', async () => {
    await setupApp(1);
    let response = await request(app).post('/jobs').set({ 'Content-Type': 'application/json' }).send(testJob);
    expect(response.statusCode).toBe(200);  
    const jobId = response.body.id;
    const job = response.body;
    job.notes = 'new notes';
    response = await request(app).put('/jobs/' + jobId).set({ 'Content-Type': 'application/json' }).send(job);
    expect(response.statusCode).toBe(200); 
    response = await request(app).get('/jobs/' + jobId);
    expect(response.body.notes).toBe('new notes'); 
  })
});