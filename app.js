const express = require("express");
const axios = require("axios");


const app = express();
const PORT = process.env.PORT || 8877;

app.use(express.json());

app.post("/*", (req, res) => {
  const url = req.params[0];
  const header =  req.headers;
  console.log(header);

  const { body } = req;
//   console.log(req);
  console.log(JSON.stringify({body}));
  axios.post(url, body, {headers: {authorization: header?.authorization}})
  .then(response =>{
      res.status(200).json(response.data);
    console.log(JSON.stringify(response.data))
  })
  .catch(err =>{
    res.status(400).json(err);
    console.log(JSON.stringify(err))
  })
});

app.listen(PORT);
console.log(`Iniciado na porta ${PORT}`);
