const express = require("express");
const axios = require("axios");


const app = express();
const PORT = process.env.PORT || 8877;

app.use(express.json());

app.post("/*", (req, res) => {
  const url = req.params[0];

  const { body } = req;
//   console.log(req);
//   console.log(body);
  axios.post(url, body)
  .then(response =>{
      res.status(200).json(response.data);
    console.log(response.data)
  })
  .catch(err =>{
    res.status(400).json(err);
  })
});

app.listen(PORT);
console.log(`Iniciado na porta ${PORT}`);
