const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({ message: "Server del mio blog" });
});

const posts = [
  {
    titolo: "Post 01",
    descrizione: "Ciambellone",
    immagine: "/img/ciambellone.jpeg",
    tags: ["#dolciincucina", "#mangiandos'impara", "#passionedolci"],
  },
  {
    titolo: "Post 02",
    descrizione: "Cracker alla barbabietola",
    immagine: "/img/cracker_barbabietola.jpeg",
    tags: ["#dolciincucina", "#mangiandos'impara", "#passionedolci"],
  },
  {
    titolo: "Post 03",
    descrizione: "Pane fritto dolce",
    immagine: "/img/pane_fritto_dolce.jpeg",
    tags: ["#dolciincucina", "#mangiandos'impara", "#passionedolci"],
  },
  {
    titolo: "Post 04",
    descrizione: "Pasta alla barbabietola",
    immagine: "/img/pasta_barbabietola.jpeg",
    tags: ["#dolciincucina", "#mangiandos'impara", "#passionedolci"],
  },
  {
    titolo: "Post 05",
    descrizione: "Torta paesana",
    immagine: "/img/torta_paesana.jpeg",
    tags: ["#dolciincucina", "#mangiandos'impara", "#passionedolci"],
  },
];

app.get("/bacheca", (req, res) => {
  res.json({ posts });
});

app.listen(port, () => {
  console.log(`Server attivo su http://localhost: ` + port);
});
