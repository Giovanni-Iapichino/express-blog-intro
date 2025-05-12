const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("Server del mio blog");
});

const posts = [
  {
    titolo: "",
    descrizione: "",
    immagine: "",
    tags: [""],
  },
  {
    titolo: "",
    descrizione: "",
    immagine: "",
    tags: [""],
  },
  {
    titolo: "",
    descrizione: "",
    immagine: "",
    tags: [""],
  },
  {
    titolo: "",
    descrizione: "",
    immagine: "",
    tags: [""],
  },
  {
    titolo: "",
    descrizione: "",
    immagine: "",
    tags: [""],
  },
];

app.get("/bacheca", (req, res) => {
  res.json(posts);
});
