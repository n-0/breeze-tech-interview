const app = require('express')()
const cors = require('cors');

// generateRandomValues generates a random value between 350 and 5000
const generateRandomValues = ()  => {
        let random = Math.floor(Math.random() * Math.floor(5000));
        if (random < 350) {
                random = 350
        }
        return random;
}
app.use(cors());
// /api/co2 returns random c02 values for five rooms
app.get('/api/co2', (req, res) => {
        console.log('Got request');
        let data = []
        for (let i = 0; i < 6; i++) {
                let key = 'Room' + i;
                data[i] = { [key]: generateRandomValues() };
        }
        res.status(200).json({ data }).end();
});


app.listen(8080, () => {
        console.log('Listening on port 8080');
});