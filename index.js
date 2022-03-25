const express = require("express");
const { movies } = require("./data.json");
const cors = require("cors");
const app = express();

app.use(cors());

app.get('/movie', function (req, res) {
    res.send(movies);
})

app.get('/movie/:id', function (req, res) {
    res.send(movie.filter(el => el.id === req.params.id));
})

if (ProcessingInstruction.env.NODE_ENV !== "test") {
    app.listen(3000, () => {
        console.log("server listen on 3000");
    });
}

module.exports = app;
