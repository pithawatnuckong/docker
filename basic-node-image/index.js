import express from "express";

const app = express();

app.use(express.json());

const PORT = 3000;

const showText = "Hello world"

app.listen(PORT, () => {
	console.log(`server is running on ${PORT}`);
});

app.get("/", (req, res) => {
	res.send(`<h1>${showText}</h1>`);
});
