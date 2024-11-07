const express = require('express');
const cors = require('cors');
const Parser = require('rss-parser');

const app = express();
const parser = new Parser();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Bienvenue sur le serveur RSS !');
});
// Route pour récupérer les articles RSS
app.get('/rss', async (req, res) => {
    try {
        const feed = await parser.parseURL('https://feeds.feedburner.com/digest-react'); // Remplacez par votre URL RSS
        res.json(feed.items);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération du flux RSS' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});