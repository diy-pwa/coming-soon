import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
  res.end('hello');
});

export const handler = app;
