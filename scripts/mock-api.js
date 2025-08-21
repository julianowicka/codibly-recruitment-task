const express = require('express');
const app = express();
const port = process.env.MOCK_API_PORT || 4000;

// Basic CORS for local dev
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

// Root/info & health endpoints
app.get('/', (req, res) => {
  res.send('Mock API running. Use GET /api/unknown or /api/unknown/:id');
});
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Sample data (based on ReqRes colors)
const data = [
  { id: 1, name: 'cerulean', year: 2000, color: '#98B2D1', pantone_value: '15-4020' },
  { id: 2, name: 'fuchsia rose', year: 2001, color: '#C74375', pantone_value: '17-2031' },
  { id: 3, name: 'true red', year: 2002, color: '#BF1932', pantone_value: '19-1664' },
  { id: 4, name: 'aqua sky', year: 2003, color: '#7BC4C4', pantone_value: '14-4811' },
  { id: 5, name: 'tigerlily', year: 2004, color: '#E2583E', pantone_value: '17-1456' },
  { id: 6, name: 'blue turquoise', year: 2005, color: '#53B0AE', pantone_value: '15-5217' }
];

app.get('/api/unknown', (req, res) => {
  const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
  const per_page = Math.max(parseInt(req.query.per_page, 10) || 5, 1);
  const start = (page - 1) * per_page;
  const paged = data.slice(start, start + per_page);
  const total = data.length;
  const total_pages = Math.ceil(total / per_page);

  res.json({ page, per_page, total, total_pages, data: paged });
});

app.get('/api/unknown/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const item = data.find(x => x.id === id);
  if (!item) return res.status(404).json({ error: 'Not Found' });
  res.json({ data: item });
});

app.listen(port, () => {
  console.log(`Mock API listening on http://localhost:${port}`);
});
