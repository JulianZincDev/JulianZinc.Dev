import express, { type Request, type Response } from 'express';
import type { Entry } from './types/Entry.js';
import cors from 'cors';
import fs from 'fs/promises';

const app = express()

const allowedUrls = [
  process.env.FRONTEND_URL,
  process.env.FRONTEND_URL_ALT,
].filter((origin): origin is string => !!origin);

app.use(cors({
  origin: allowedUrls
}));
app.use(express.json());

app.post('/api/referral_log', async (req: Request, res: Response) => {
  const { source } = req.body;
  const entry: Entry =  {
    source: source.slice(0, 350),
    timestamp: new Date().toISOString(),
  };

  await fs.appendFile('referral_log.json', JSON.stringify(entry) + ',\n');

  res.json({});
})

app.listen(8000, '0.0.0.0', () => {
  console.log('Log server running on port 8000');
});
