import supertest from 'supertest';
import app from '../index';
import path from 'path';
import resizeImage from '../utils/resize';

const request = supertest(app);

describe('Test main endpoint ', () => {
  it('api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
});

describe('all parameter is send test ', () => {
  it('width param is missing', async () => {
    const response = await request.get('/api/images?filename=test&height=200');
    expect(response.status).toBe(400);
  });
  it('height param is missing', async () => {
    const response = await request.get('/api/images?filename=test&width=200');
    expect(response.status).toBe(400);
  });
  it('filename param is missing', async () => {
    const response = await request.get('/api/images?&width=200&height=200');
    expect(response.status).toBe(400);
  });
});

describe('valid parameter test ', () => {
  it('negative number', async () => {
    const response = await request.get(
      '/api/images?filename=test&height=200&width=-200'
    );
    expect(response.status).toBe(400);
  });
  it('image is not exist', async () => {
    const response = await request.get(
      '/api/images?filename=test&height=200&width=200'
    );
    expect(response.status).toBe(404);
  });
});

describe('image processing tests correctly ', () => {
  it('resize the image', async (): Promise<void> => {
    //image path
    const imagePath = `${path.resolve(
      __dirname,
      `../../assets/images/fjord.jpg`
    )}`;

    const thumbImagePath = `${path.resolve(
      __dirname,
      `../../assets/thumb/fjord_400_200.jpg`
    )}`;

    await resizeImage(imagePath, thumbImagePath, 400, 200);
  });
});
