import express, {} from 'express';
import cors from 'cors';
import fs from 'fs/promises';
const app = express();
const allowedUrls = [
    process.env.FRONTEND_URL,
    process.env.FRONTEND_URL_ALT,
].filter((origin) => !!origin);
app.use(cors({
    origin: allowedUrls
}));
app.use(express.json());
app.post('/referral_log', async (req, res) => {
    const { source } = req.body;
    const entry = {
        source: source.slice(0, 350),
        timestamp: new Date().toISOString(),
    };
    await fs.appendFile('referral_log.json', JSON.stringify(entry) + ',\n');
    res.json({});
});
app.listen(8000, '0.0.0.0', () => {
    console.log('Log server running on port 8000');
});
//# sourceMappingURL=server.js.map