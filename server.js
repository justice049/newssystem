import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/*', async (req, res) => {
  try {
    const url = `https://m.maoyan.com${req.originalUrl.replace('/api', '')}`;
    const response = await axios.get(url, {
      headers: {
        Referer: 'https://m.maoyan.com/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: '请求失败', details: error.message });
  }
});

app.listen(3001, () => console.log('代理服务器运行在 http://localhost:3001'));








