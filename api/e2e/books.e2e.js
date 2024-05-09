const request = require('supertest');
const { MongoClient } = require('mongodb');
const { config } = require('../src/config');
const createApp = require('../src/app');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for hello world endpoint', () => {
  let app = null;
  let server = null;
  let database = null;
  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);

    const client = new MongoClient(
      MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );

    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await database.dropDatabase();
    await server.close();
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('It Should return Books array', async () => {
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book Name',
          year: 1992,
          author: 'Sergio Villagran',
        },
        {
          name: 'Book Name',
          year: 1992,
          author: 'Sergio Villagran',
        },
        {
          name: 'Book Name',
          year: 1992,
          author: 'Sergio Villagran',
        },
      ]);

      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          console.log(seedData.insertedCount);
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
