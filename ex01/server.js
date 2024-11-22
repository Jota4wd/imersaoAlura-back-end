import express from 'express'

const app = express()
app.listen(4000, () => {
    console.log('servidor escutando...');
});

app.get('/', (req, res) => {
    res.status(200).send('adicione "/hello" a url\nadicione/goodbye');
});

app.get('/hello', (req, res) => {
    res.json({ message: "Olá, bem-vindo à minha aplicação!" });
});

app.get('/goodbye', (req, res) => {
    res.json({ message: "Até logo, espero te ver novamente!" });
});
