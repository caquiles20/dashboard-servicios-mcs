export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const response = await fetch('https://api.monday.com/v2', {
    method: 'POST',
    headers: {
      'Authorization': process.env.MONDAY_TOKEN,
      'Content-Type': 'application/json',
      'API-Version': '2024-01'
    },
    body: JSON.stringify(req.body)
  });
  const data = await response.json();
  res.status(200).json(data);
}
