const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      title: "The best software developer in Africa: Tunde-lawal Boluwatife!",
    },
    {
      id: "2",
      title:
        "i really really love my life now! Backend development is my life now!",
    },
    {
      id: "3",
      title: "i will be  very very very wealthy!!!",
    },
  ]);
});

app.listen(4000, () => {
  console.log("listening for requests on port 4000....!");
});
